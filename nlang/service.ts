import { CharStream, CommonTokenStream } from 'antlr4';

import { NLangErrorListener } from './error';
import NLangLexer from './lang/NLangLexer';
import NLangParser, {
  ExpenseExpressionContext,
  IncomeExpressionContext,
  SecretExpressionContext,
} from './lang/nlangParser';

const parse = (code: string) => {
  const inputStream = new CharStream(code);
  const lexer = new NLangLexer(inputStream);
  lexer.removeErrorListeners();

  const nlangErrorListener = new NLangErrorListener();
  lexer.addErrorListener(nlangErrorListener);

  const tokenStream = new CommonTokenStream(lexer);
  const parser = new NLangParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener(nlangErrorListener);

  const ast = parser.nlangExpression();
  const errors = nlangErrorListener.getErrors();

  return { ast, errors };
};

export const parseAndGetAstRoot = (code: string) => {
  return parse(code).ast;
};

export const parseAndGetSyntaxErrors = (code: string) => {
  return parse(code).errors;
};

export const parseAndGetTokens = (code: string) => {
  if (parseAndGetSyntaxErrors(code).length !== 0) {
    throw new Error('Failed to parse the grammar!');
  }

  const { children } = parseAndGetAstRoot(code);
  if (!children) {
    throw new Error(
      'Failed to parse the children of the abstract syntax tree.'
    );
  }

  // Everything should be an instance of our grammar, if not then we can
  // fallback to returning `undefined`. It is actually recommended to mark the
  // `reduce` method as a generic `string[][]` instead of casting
  // the in the `initialValue` level of the `reduce` method.
  //
  // Reference: https://stackoverflow.com/a/62537717.
  const results = children.reduce<string[][]>((accumulator, node) => {
    if (node instanceof IncomeExpressionContext) {
      const add = node.ADD().getText();
      const income = node.INCOME().getText();
      const number = node.NUMBER().getText();
      const string = node.STRING().getText();

      accumulator.push([add, income, number, string]);
    } else if (node instanceof ExpenseExpressionContext) {
      const add = node.ADD().getText();
      const expense = node.EXPENSE().getText();
      const number = node.NUMBER().getText();
      const string = node.STRING().getText();

      accumulator.push([add, expense, number, string]);
    } else if (node instanceof SecretExpressionContext) {
      const nozomi = node.SECRET().getText();

      accumulator.push([nozomi]);
    }

    return accumulator;
  }, []);

  return results;
};

export const translateNlang = (tokenized: string[]) => {
  // 'NOZOMI'
  if (tokenized.length === 1) {
    return 'You have discovered the secret keyword, NOZOMI! Congratulations and thank you for exploring the language! I wish you best of luck for the future. May the odds ever be in your favor :D';
  }

  if (tokenized.length !== 4) {
    return '';
  }

  // 'ADD'
  const add = 'You have';

  // 'INCOME' / 'EXPENSE'
  const type = tokenized[1] === 'INCOME' ? 'earned' : 'expended';

  // 'NUMBER'
  const amount = `${tokenized[2]} for`;

  // 'STRING'
  const purpose = tokenized[3];

  // Concatenated output.
  const translated = `${add} ${type} ${amount} ${purpose}`;

  return translated;
};
