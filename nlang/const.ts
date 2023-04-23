export const reserved = Object.freeze({
  keywords: ['ADD', 'NOZOMI'],
  typeKeywords: ['INCOME', 'EXPENSE'],
});

export const metadata = Object.freeze({
  id: 'nlang',
  theme: 'nlang-default-theme',
  alternativeTheme: 'nlang-default-theme-dark',
  path: 'inmemory://nlang',
});

export const colors = Object.freeze({
  keyword: '#ff6600',
  type: '#0984e3',
  number: '#e84393',
  comment: '#747d8c',
  string: '#009966',
  editorBackground: '#f1f2f6',
});

export const sampleScript = `// Welcome to the implementation of Nlang!
// This is a toy programming language for me to test how to build a code
// editor with a text parser to make sure that the technical grammar is correct.

// The pattern of using Nlang is:
// - 'ADD (INCOME/EXPENSE) NUMBER STRING'
// - Of course, you don't have to put the single quotes.
// - You have to enter line breaks to create a new declaration / input.
// - 'STRING' has to be enclosed within double quotes; and
// - Line breaks are not supported at the moment for strings. You have to fit it all in one line.
// - You can add comments by using the '//' characters (single-line).
// - Multi-line comments are not supported at the moment.
// - Autocompletes are supported. Please try it out by typing one of the base keywords!

// Example: ADD INCOME 50000 "Salary"
// Please enjoy the code editor and feel free to comment on GitHub!

ADD INCOME 1000 "Received stock dividends payment this morning"
ADD INCOME 500 "お金を受け取り"
ADD EXPENSE 500 "사랑해요"
ADD EXPENSE 250 "Purchased Yokohama Ramen for dinner"
ADD EXPENSE 250 "Purchased some snacks and a 1 liter Ocha from the nearest 7/11 store"
`;
