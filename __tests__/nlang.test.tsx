import { parseAndGetSyntaxErrors, parseAndGetTokens } from '../nlang/service';

interface SuccessTestParameters {
  name: string;
  input: string[];
  output: string[][];
}

test.each<SuccessTestParameters>([
  {
    name: 'normal income',
    input: ['ADD INCOME 750 "Received stock dividends payment this morning"'],
    output: [
      [
        'ADD',
        'INCOME',
        '750',
        '"Received stock dividends payment this morning"',
      ],
    ],
  },
  {
    name: 'normal expense',
    input: ['ADD EXPENSE 5000 "Bought Yokohama Ramen for dinner outside"'],
    output: [
      ['ADD', 'EXPENSE', '5000', '"Bought Yokohama Ramen for dinner outside"'],
    ],
  },
  {
    name: 'secret keyword',
    input: ['NOZOMI'],
    output: [['NOZOMI']],
  },
  {
    name: 'mix between income and expense',
    input: [
      'ADD INCOME 2500 "Received money because I just sold my manga collection"',
      'ADD EXPENSE 1000 "Spent the money to purchase and ice cream at the nearest shop"',
    ],
    output: [
      [
        'ADD',
        'INCOME',
        '2500',
        '"Received money because I just sold my manga collection"',
      ],
      [
        'ADD',
        'EXPENSE',
        '1000',
        '"Spent the money to purchase and ice cream at the nearest shop"',
      ],
    ],
  },

  {
    name: 'mix between income, expense, and secret keyword',
    input: [
      'ADD INCOME 5500 "Just sold my anime figure collections at Akihabara"',
      'ADD EXPENSE 1000 "Spent some money to eat at a fancy Italian restaurant"',
      'NOZOMI',
    ],
    output: [
      [
        'ADD',
        'INCOME',
        '5500',
        '"Just sold my anime figure collections at Akihabara"',
      ],
      [
        'ADD',
        'EXPENSE',
        '1000',
        '"Spent some money to eat at a fancy Italian restaurant"',
      ],
      ['NOZOMI'],
    ],
  },
])('ensures it works and is successful for $name', ({ input, output }) => {
  const parsed = input.flatMap((input) => parseAndGetTokens(input));

  expect(parsed).toStrictEqual(output);
});

interface FailureTestParameters {
  name: string;
  input: string;
  errorLength: number;
  errorCodes: Set<string>;
}

test.each<FailureTestParameters>([
  {
    name: 'no failure',
    input:
      'ADD EXPENSE 5000 "Buy Coca-Cola at the nearest 7/11 convenience store"',
    errorLength: 0,
    errorCodes: new Set(),
  },
  {
    name: 'normal failure',
    input: 'ADD E',
    errorLength: 2,
    errorCodes: new Set(['token-recognition-error', 'unknown-error']),
  },
  {
    name: 'extraneous input',
    input: `
    ADD EXPENSE 5000 "Buy A"
    ""
    `,
    errorLength: 1,
    errorCodes: new Set(['extraneous-input']),
  },
  {
    name: 'missing string and token recognition failure',
    input: `ADD EXPENSE 5000 "Buy`,
    errorLength: 2,
    errorCodes: new Set(['missing-string', 'token-recognition-error']),
  },
  {
    name: 'mismatched input',
    input: 'ADD EXPENSE',
    errorLength: 1,
    errorCodes: new Set(['mismatched-input']),
  },
  {
    name: 'missing number',
    input: 'ADD EXPENSE "5000" "Buy A"',
    errorLength: 1,
    errorCodes: new Set(['missing-number']),
  },
  {
    name: 'whitespace errors',
    input: `
    
    ADD EXPENSE XLD "Buy A"
    `,
    errorLength: 4,
    errorCodes: new Set([
      'mismatched-input',
      'token-recognition-error',
      'missing-number',
    ]),
  },
])(
  'ensures it can fail gracefully for $name',
  ({ input, errorLength, errorCodes }) => {
    const parsed = parseAndGetSyntaxErrors(input);

    // Make sure it can read all of the errors.
    expect(parsed).toHaveLength(errorLength);

    // Make sure it contains all of the error codes.
    parsed.forEach((node) => {
      const nodeErrorCode = node.code?.toString() || '';
      expect(errorCodes.has(nodeErrorCode)).toBe(true);
    });
  }
);
