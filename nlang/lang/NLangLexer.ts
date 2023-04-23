// @ts-nocheck
// Generated from ./nlang/lang/nlang.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
  ATN,
  ATNDeserializer,
  CharStream,
  DecisionState,
  DFA,
  Lexer,
  LexerATNSimulator,
  PredictionContextCache,
  Token,
} from 'antlr4';
export default class nlangLexer extends Lexer {
  public static readonly ADD = 1;
  public static readonly INCOME = 2;
  public static readonly EXPENSE = 3;
  public static readonly SECRET = 4;
  public static readonly NUMBER = 5;
  public static readonly STRING = 6;
  public static readonly EOL = 7;
  public static readonly WS = 8;
  public static readonly COMMENT = 9;
  public static readonly MULTILINE_COMMENT = 10;
  public static readonly EOF = Token.EOF;

  public static readonly channelNames: string[] = [
    'DEFAULT_TOKEN_CHANNEL',
    'HIDDEN',
  ];
  public static readonly literalNames: string[] = [
    null,
    "'ADD'",
    "'INCOME'",
    "'EXPENSE'",
    "'NOZOMI'",
  ];
  public static readonly symbolicNames: string[] = [
    null,
    'ADD',
    'INCOME',
    'EXPENSE',
    'SECRET',
    'NUMBER',
    'STRING',
    'EOL',
    'WS',
    'COMMENT',
    'MULTILINE_COMMENT',
  ];
  public static readonly modeNames: string[] = ['DEFAULT_MODE'];

  public static readonly ruleNames: string[] = [
    'ADD',
    'INCOME',
    'EXPENSE',
    'SECRET',
    'NUMBER',
    'STRING',
    'EOL',
    'WS',
    'COMMENT',
    'MULTILINE_COMMENT',
  ];

  constructor(input: CharStream) {
    super(input);
    this._interp = new LexerATNSimulator(
      this,
      nlangLexer._ATN,
      nlangLexer.DecisionsToDFA,
      new PredictionContextCache()
    );
  }

  public get grammarFileName(): string {
    return 'nlang.g4';
  }

  public get literalNames(): (string | null)[] {
    return nlangLexer.literalNames;
  }
  public get symbolicNames(): (string | null)[] {
    return nlangLexer.symbolicNames;
  }
  public get ruleNames(): string[] {
    return nlangLexer.ruleNames;
  }

  public get serializedATN(): number[] {
    return nlangLexer._serializedATN;
  }

  public get channelNames(): string[] {
    return nlangLexer.channelNames;
  }

  public get modeNames(): string[] {
    return nlangLexer.modeNames;
  }

  public static readonly _serializedATN: number[] = [
    4, 0, 10, 96, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4,
    7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 1, 0, 1,
    0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2,
    1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
    4, 4, 4, 49, 8, 4, 11, 4, 12, 4, 50, 1, 5, 1, 5, 5, 5, 55, 8, 5, 10, 5, 12,
    5, 58, 9, 5, 1, 5, 1, 5, 1, 6, 4, 6, 63, 8, 6, 11, 6, 12, 6, 64, 1, 6, 1, 6,
    1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 4, 8, 77, 8, 8, 11, 8, 12,
    8, 78, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 5, 9, 87, 8, 9, 10, 9, 12, 9, 90,
    9, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 88, 0, 10, 1, 1, 3, 2, 5, 3, 7, 4, 9,
    5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 1, 0, 4, 1, 0, 48, 57, 1, 0, 10, 10,
    2, 0, 10, 10, 13, 13, 2, 0, 9, 9, 32, 32, 100, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0,
    0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0,
    0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0,
    0, 1, 21, 1, 0, 0, 0, 3, 25, 1, 0, 0, 0, 5, 32, 1, 0, 0, 0, 7, 40, 1, 0, 0,
    0, 9, 48, 1, 0, 0, 0, 11, 52, 1, 0, 0, 0, 13, 62, 1, 0, 0, 0, 15, 68, 1, 0,
    0, 0, 17, 72, 1, 0, 0, 0, 19, 82, 1, 0, 0, 0, 21, 22, 5, 65, 0, 0, 22, 23,
    5, 68, 0, 0, 23, 24, 5, 68, 0, 0, 24, 2, 1, 0, 0, 0, 25, 26, 5, 73, 0, 0,
    26, 27, 5, 78, 0, 0, 27, 28, 5, 67, 0, 0, 28, 29, 5, 79, 0, 0, 29, 30, 5,
    77, 0, 0, 30, 31, 5, 69, 0, 0, 31, 4, 1, 0, 0, 0, 32, 33, 5, 69, 0, 0, 33,
    34, 5, 88, 0, 0, 34, 35, 5, 80, 0, 0, 35, 36, 5, 69, 0, 0, 36, 37, 5, 78, 0,
    0, 37, 38, 5, 83, 0, 0, 38, 39, 5, 69, 0, 0, 39, 6, 1, 0, 0, 0, 40, 41, 5,
    78, 0, 0, 41, 42, 5, 79, 0, 0, 42, 43, 5, 90, 0, 0, 43, 44, 5, 79, 0, 0, 44,
    45, 5, 77, 0, 0, 45, 46, 5, 73, 0, 0, 46, 8, 1, 0, 0, 0, 47, 49, 7, 0, 0, 0,
    48, 47, 1, 0, 0, 0, 49, 50, 1, 0, 0, 0, 50, 48, 1, 0, 0, 0, 50, 51, 1, 0, 0,
    0, 51, 10, 1, 0, 0, 0, 52, 56, 5, 34, 0, 0, 53, 55, 8, 1, 0, 0, 54, 53, 1,
    0, 0, 0, 55, 58, 1, 0, 0, 0, 56, 54, 1, 0, 0, 0, 56, 57, 1, 0, 0, 0, 57, 59,
    1, 0, 0, 0, 58, 56, 1, 0, 0, 0, 59, 60, 5, 34, 0, 0, 60, 12, 1, 0, 0, 0, 61,
    63, 7, 2, 0, 0, 62, 61, 1, 0, 0, 0, 63, 64, 1, 0, 0, 0, 64, 62, 1, 0, 0, 0,
    64, 65, 1, 0, 0, 0, 65, 66, 1, 0, 0, 0, 66, 67, 6, 6, 0, 0, 67, 14, 1, 0, 0,
    0, 68, 69, 7, 3, 0, 0, 69, 70, 1, 0, 0, 0, 70, 71, 6, 7, 0, 0, 71, 16, 1, 0,
    0, 0, 72, 73, 5, 47, 0, 0, 73, 74, 5, 47, 0, 0, 74, 76, 1, 0, 0, 0, 75, 77,
    8, 1, 0, 0, 76, 75, 1, 0, 0, 0, 77, 78, 1, 0, 0, 0, 78, 76, 1, 0, 0, 0, 78,
    79, 1, 0, 0, 0, 79, 80, 1, 0, 0, 0, 80, 81, 6, 8, 0, 0, 81, 18, 1, 0, 0, 0,
    82, 83, 5, 47, 0, 0, 83, 84, 5, 42, 0, 0, 84, 88, 1, 0, 0, 0, 85, 87, 9, 0,
    0, 0, 86, 85, 1, 0, 0, 0, 87, 90, 1, 0, 0, 0, 88, 89, 1, 0, 0, 0, 88, 86, 1,
    0, 0, 0, 89, 91, 1, 0, 0, 0, 90, 88, 1, 0, 0, 0, 91, 92, 5, 42, 0, 0, 92,
    93, 5, 47, 0, 0, 93, 94, 1, 0, 0, 0, 94, 95, 6, 9, 0, 0, 95, 20, 1, 0, 0, 0,
    6, 0, 50, 56, 64, 78, 88, 1, 6, 0, 0,
  ];

  private static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!nlangLexer.__ATN) {
      nlangLexer.__ATN = new ATNDeserializer().deserialize(
        nlangLexer._serializedATN
      );
    }

    return nlangLexer.__ATN;
  }

  static DecisionsToDFA = nlangLexer._ATN.decisionToState.map(
    (ds: DecisionState, index: number) => new DFA(ds, index)
  );
}
