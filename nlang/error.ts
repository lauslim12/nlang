import {
  ErrorListener,
  type RecognitionException,
  type Recognizer,
} from 'antlr4';
import type monaco from 'monaco-editor';

interface NLangError extends monaco.editor.IMarkerData {}

export class NLangErrorListener implements ErrorListener<any> {
  private errors: NLangError[] = [];

  /**
   * TODO: There should be a better way to recognize these errors, maybe I have to add
   * some typing but my brain is kinda not working right now.
   */
  public syntaxError(
    recognizer: Recognizer<any>,
    offendingSymbol: any,
    line: number,
    column: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    const baseSyntaxError = {
      startLineNumber: line,
      endLineNumber: line,
      startColumn: column,
      endColumn: column + this.errors.length,
    };

    if (/missing string/i.test(msg)) {
      this.errors.push({
        ...baseSyntaxError,
        message:
          'Missing string encountered, you should type a string or should close your existing string by double quotes, or maybe you have an unparseable text',
        severity: 8,
        code: 'missing-string',
      });
    } else if (/token recognition error/i.test(msg)) {
      this.errors.push({
        ...baseSyntaxError,
        message:
          'Unrecognized token, please fix your input by following the grammar pattern (`ADD (INCOME/EXPENSE) NUMBER STRING`)',
        severity: 8,
        code: 'token-recognition-error',
      });
    } else if (/missing number/i.test(msg)) {
      this.errors.push({
        ...baseSyntaxError,
        message: 'Missing number encountered, you should type a number',
        severity: 8,
        code: 'missing-number',
      });
    } else if (/mismatched input/i.test(msg)) {
      this.errors.push({
        ...baseSyntaxError,
        message:
          'Mismatched input, the text after the whitespace should follow the pattern',
        severity: 8,
        code: 'mismatched-input',
      });
    } else if (/extraneous input/i.test(msg)) {
      this.errors.push({
        ...baseSyntaxError,
        message:
          'Extraneous input discovered, please follow the grammar pattern properly (start with ADD)',
        severity: 8,
        code: 'extraneous-input',
      });
    } else {
      this.errors.push({
        ...baseSyntaxError,
        message: msg,
        severity: 8,
        code: 'unknown-error',
      });
    }
  }

  public getErrors() {
    return this.errors;
  }
}
