// @ts-nocheck
// Generated from ./nlang/lang/nlang.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
  ATN,
  ATNDeserializer,
  DecisionState,
  DFA,
  FailedPredicateException,
  Parser,
  ParserATNSimulator,
  ParserRuleContext,
  PredictionContextCache,
  RecognitionException,
  TerminalNode,
  Token,
  TokenStream,
} from 'antlr4';

import type nlangListener from './nlangListener';
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class nlangParser extends Parser {
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
  public static readonly RULE_incomeExpression = 0;
  public static readonly RULE_expenseExpression = 1;
  public static readonly RULE_secretExpression = 2;
  public static readonly RULE_nlangExpression = 3;
  public static readonly literalNames: (string | null)[] = [
    null,
    "'ADD'",
    "'INCOME'",
    "'EXPENSE'",
    "'NOZOMI'",
  ];
  public static readonly symbolicNames: (string | null)[] = [
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
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'incomeExpression',
    'expenseExpression',
    'secretExpression',
    'nlangExpression',
  ];
  public get grammarFileName(): string {
    return 'nlang.g4';
  }
  public get literalNames(): (string | null)[] {
    return nlangParser.literalNames;
  }
  public get symbolicNames(): (string | null)[] {
    return nlangParser.symbolicNames;
  }
  public get ruleNames(): string[] {
    return nlangParser.ruleNames;
  }
  public get serializedATN(): number[] {
    return nlangParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(
      this,
      nlangParser._ATN,
      nlangParser.DecisionsToDFA,
      new PredictionContextCache()
    );
  }
  // @RuleVersion(0)
  public incomeExpression(): IncomeExpressionContext {
    let localctx: IncomeExpressionContext = new IncomeExpressionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 0, nlangParser.RULE_incomeExpression);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 8;
        this.match(nlangParser.ADD);
        this.state = 9;
        this.match(nlangParser.INCOME);
        this.state = 10;
        this.match(nlangParser.NUMBER);
        this.state = 11;
        this.match(nlangParser.STRING);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public expenseExpression(): ExpenseExpressionContext {
    let localctx: ExpenseExpressionContext = new ExpenseExpressionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 2, nlangParser.RULE_expenseExpression);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 13;
        this.match(nlangParser.ADD);
        this.state = 14;
        this.match(nlangParser.EXPENSE);
        this.state = 15;
        this.match(nlangParser.NUMBER);
        this.state = 16;
        this.match(nlangParser.STRING);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public secretExpression(): SecretExpressionContext {
    let localctx: SecretExpressionContext = new SecretExpressionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 4, nlangParser.RULE_secretExpression);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 18;
        this.match(nlangParser.SECRET);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public nlangExpression(): NlangExpressionContext {
    let localctx: NlangExpressionContext = new NlangExpressionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 6, nlangParser.RULE_nlangExpression);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            this.state = 23;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 0, this._ctx)) {
              case 1:
                {
                  this.state = 20;
                  this.incomeExpression();
                }
                break;
              case 2:
                {
                  this.state = 21;
                  this.expenseExpression();
                }
                break;
              case 3:
                {
                  this.state = 22;
                  this.secretExpression();
                }
                break;
            }
          }
          this.state = 25;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === 1 || _la === 4);
        this.state = 27;
        this.match(nlangParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  public static readonly _serializedATN: number[] = [
    4, 1, 10, 30, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 1, 0, 1, 0, 1,
    0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3,
    4, 3, 24, 8, 3, 11, 3, 12, 3, 25, 1, 3, 1, 3, 1, 3, 0, 0, 4, 0, 2, 4, 6, 0,
    0, 28, 0, 8, 1, 0, 0, 0, 2, 13, 1, 0, 0, 0, 4, 18, 1, 0, 0, 0, 6, 23, 1, 0,
    0, 0, 8, 9, 5, 1, 0, 0, 9, 10, 5, 2, 0, 0, 10, 11, 5, 5, 0, 0, 11, 12, 5, 6,
    0, 0, 12, 1, 1, 0, 0, 0, 13, 14, 5, 1, 0, 0, 14, 15, 5, 3, 0, 0, 15, 16, 5,
    5, 0, 0, 16, 17, 5, 6, 0, 0, 17, 3, 1, 0, 0, 0, 18, 19, 5, 4, 0, 0, 19, 5,
    1, 0, 0, 0, 20, 24, 3, 0, 0, 0, 21, 24, 3, 2, 1, 0, 22, 24, 3, 4, 2, 0, 23,
    20, 1, 0, 0, 0, 23, 21, 1, 0, 0, 0, 23, 22, 1, 0, 0, 0, 24, 25, 1, 0, 0, 0,
    25, 23, 1, 0, 0, 0, 25, 26, 1, 0, 0, 0, 26, 27, 1, 0, 0, 0, 27, 28, 5, 0, 0,
    1, 28, 7, 1, 0, 0, 0, 2, 23, 25,
  ];

  private static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!nlangParser.__ATN) {
      nlangParser.__ATN = new ATNDeserializer().deserialize(
        nlangParser._serializedATN
      );
    }

    return nlangParser.__ATN;
  }

  static DecisionsToDFA = nlangParser._ATN.decisionToState.map(
    (ds: DecisionState, index: number) => new DFA(ds, index)
  );
}

export class IncomeExpressionContext extends ParserRuleContext {
  constructor(
    parser?: nlangParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ADD(): TerminalNode {
    return this.getToken(nlangParser.ADD, 0);
  }
  public INCOME(): TerminalNode {
    return this.getToken(nlangParser.INCOME, 0);
  }
  public NUMBER(): TerminalNode {
    return this.getToken(nlangParser.NUMBER, 0);
  }
  public STRING(): TerminalNode {
    return this.getToken(nlangParser.STRING, 0);
  }
  public get ruleIndex(): number {
    return nlangParser.RULE_incomeExpression;
  }
  public enterRule(listener: nlangListener): void {
    if (listener.enterIncomeExpression) {
      listener.enterIncomeExpression(this);
    }
  }
  public exitRule(listener: nlangListener): void {
    if (listener.exitIncomeExpression) {
      listener.exitIncomeExpression(this);
    }
  }
}

export class ExpenseExpressionContext extends ParserRuleContext {
  constructor(
    parser?: nlangParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ADD(): TerminalNode {
    return this.getToken(nlangParser.ADD, 0);
  }
  public EXPENSE(): TerminalNode {
    return this.getToken(nlangParser.EXPENSE, 0);
  }
  public NUMBER(): TerminalNode {
    return this.getToken(nlangParser.NUMBER, 0);
  }
  public STRING(): TerminalNode {
    return this.getToken(nlangParser.STRING, 0);
  }
  public get ruleIndex(): number {
    return nlangParser.RULE_expenseExpression;
  }
  public enterRule(listener: nlangListener): void {
    if (listener.enterExpenseExpression) {
      listener.enterExpenseExpression(this);
    }
  }
  public exitRule(listener: nlangListener): void {
    if (listener.exitExpenseExpression) {
      listener.exitExpenseExpression(this);
    }
  }
}

export class SecretExpressionContext extends ParserRuleContext {
  constructor(
    parser?: nlangParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public SECRET(): TerminalNode {
    return this.getToken(nlangParser.SECRET, 0);
  }
  public get ruleIndex(): number {
    return nlangParser.RULE_secretExpression;
  }
  public enterRule(listener: nlangListener): void {
    if (listener.enterSecretExpression) {
      listener.enterSecretExpression(this);
    }
  }
  public exitRule(listener: nlangListener): void {
    if (listener.exitSecretExpression) {
      listener.exitSecretExpression(this);
    }
  }
}

export class NlangExpressionContext extends ParserRuleContext {
  constructor(
    parser?: nlangParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public EOF(): TerminalNode {
    return this.getToken(nlangParser.EOF, 0);
  }
  public incomeExpression_list(): IncomeExpressionContext[] {
    return this.getTypedRuleContexts(
      IncomeExpressionContext
    ) as IncomeExpressionContext[];
  }
  public incomeExpression(i: number): IncomeExpressionContext {
    return this.getTypedRuleContext(
      IncomeExpressionContext,
      i
    ) as IncomeExpressionContext;
  }
  public expenseExpression_list(): ExpenseExpressionContext[] {
    return this.getTypedRuleContexts(
      ExpenseExpressionContext
    ) as ExpenseExpressionContext[];
  }
  public expenseExpression(i: number): ExpenseExpressionContext {
    return this.getTypedRuleContext(
      ExpenseExpressionContext,
      i
    ) as ExpenseExpressionContext;
  }
  public secretExpression_list(): SecretExpressionContext[] {
    return this.getTypedRuleContexts(
      SecretExpressionContext
    ) as SecretExpressionContext[];
  }
  public secretExpression(i: number): SecretExpressionContext {
    return this.getTypedRuleContext(
      SecretExpressionContext,
      i
    ) as SecretExpressionContext;
  }
  public get ruleIndex(): number {
    return nlangParser.RULE_nlangExpression;
  }
  public enterRule(listener: nlangListener): void {
    if (listener.enterNlangExpression) {
      listener.enterNlangExpression(this);
    }
  }
  public exitRule(listener: nlangListener): void {
    if (listener.exitNlangExpression) {
      listener.exitNlangExpression(this);
    }
  }
}
