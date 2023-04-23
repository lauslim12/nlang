import type { Monaco } from '@monaco-editor/react';
import type monaco from 'monaco-editor';

import { colors, metadata, reserved } from './const';

const registerNlangLanguage = (monaco: Monaco) => {
  monaco.languages.register({ id: metadata.id });
};

const registerNlangReservedKeywords = (monaco: Monaco) => {
  monaco.languages.setMonarchTokensProvider(metadata.id, {
    // If we miss anything, this will trigger
    defaultToken: 'invalid',
    keywords: reserved.keywords,
    typeKeywords: reserved.typeKeywords,
    escapes:
      /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
      root: [
        // Identifiers and keywords
        [
          /[a-zA-Z_$][\w$]*/,
          {
            cases: {
              '@keywords': { token: 'keyword' },
              '@typeKeywords': { token: 'type' },
              '@default': 'identifier',
            },
          },
        ],

        // For numbers
        [/\d+/, 'number'],

        // Whitespace
        { include: '@whitespace' },

        // Strings
        [/"([^"\\]|\\.)*$/, 'string.invalid'], // non-teminated string
        [/"/, 'string', '@string'],

        // Comments
        [/\/\/.*/g, 'comment'],
      ],
      whitespace: [[/[ \t\r\n]+/, '']],
      string: [
        [/[^\\"]+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/"/, 'string', '@pop'],
      ],
    },
  });
};

const registerNlangTheme = (monaco: Monaco) => {
  monaco.editor.defineTheme(metadata.theme, {
    base: 'vs',
    inherit: true,
    colors: {
      'editor.background': colors.editorBackground,
    },
    rules: [
      { token: 'keyword', foreground: colors.keyword, fontStyle: 'bold' },
      { token: 'type', foreground: colors.type, fontStyle: 'bold' },
      { token: 'number', foreground: colors.number },
      { token: 'comment', foreground: colors.comment },
      { token: 'string', foreground: colors.string },
    ],
  });
};

const registerNlangAlternativeTheme = (monaco: Monaco) => {
  monaco.editor.defineTheme(metadata.alternativeTheme, {
    base: 'vs-dark',
    inherit: true,
    colors: {},
    rules: [
      { token: 'keyword', foreground: colors.keyword, fontStyle: 'bold' },
      { token: 'type', foreground: colors.type, fontStyle: 'bold' },
      { token: 'number', foreground: colors.number },
      { token: 'comment', foreground: colors.comment },
      { token: 'string', foreground: colors.string },
    ],
  });
};

// Ref: https://github.com/microsoft/monaco-editor/blob/main/website/src/website/data/playground-samples/extending-language-services/custom-languages/sample.js
const registerNlangAutocomplete = (monaco: Monaco) => {
  monaco.languages.registerCompletionItemProvider(metadata.id, {
    provideCompletionItems: (model, position) => {
      const word = model.getWordUntilPosition(position);

      const range: monaco.IRange = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };

      const suggestions: monaco.languages.CompletionItem[] = [
        {
          label: 'ADD',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText:
            'ADD ${1:INCOME|EXPENSE} ${2:2500} "${3:Purchasing some stuff at 7/11}"',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Autocomplete for a single Nlang declaration.',
          range,
        },
        {
          label: 'INCOME',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'INCOME',
          documentation:
            'INCOME is to declare that you have received an income.',
          range,
        },
        {
          label: 'EXPENSE',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'EXPENSE',
          documentation: 'EXPENSE is to declare that you have done an expense',
          range,
        },
      ];

      return { suggestions };
    },
  });
};

export const registerMonaco = (monaco: Monaco) => {
  // Register Nlang as the recognized language of Monaco.
  registerNlangLanguage(monaco);

  // Set the reserved keywords for Nlang.
  registerNlangReservedKeywords(monaco);

  // Adjust color highlight for the reserved keywords.
  registerNlangTheme(monaco);
  registerNlangAlternativeTheme(monaco);

  // Setup autocomplete for the language.
  registerNlangAutocomplete(monaco);
};
