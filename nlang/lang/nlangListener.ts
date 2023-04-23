// @ts-nocheck
// Generated from ./nlang/lang/nlang.g4 by ANTLR 4.12.0

import { ParseTreeListener } from 'antlr4';

import type { IncomeExpressionContext } from './nlangParser';
import type { ExpenseExpressionContext } from './nlangParser';
import type { SecretExpressionContext } from './nlangParser';
import type { NlangExpressionContext } from './nlangParser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `nlangParser`.
 */
export default class nlangListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `nlangParser.incomeExpression`.
   * @param ctx the parse tree
   */
  enterIncomeExpression?: (ctx: IncomeExpressionContext) => void;
  /**
   * Exit a parse tree produced by `nlangParser.incomeExpression`.
   * @param ctx the parse tree
   */
  exitIncomeExpression?: (ctx: IncomeExpressionContext) => void;
  /**
   * Enter a parse tree produced by `nlangParser.expenseExpression`.
   * @param ctx the parse tree
   */
  enterExpenseExpression?: (ctx: ExpenseExpressionContext) => void;
  /**
   * Exit a parse tree produced by `nlangParser.expenseExpression`.
   * @param ctx the parse tree
   */
  exitExpenseExpression?: (ctx: ExpenseExpressionContext) => void;
  /**
   * Enter a parse tree produced by `nlangParser.secretExpression`.
   * @param ctx the parse tree
   */
  enterSecretExpression?: (ctx: SecretExpressionContext) => void;
  /**
   * Exit a parse tree produced by `nlangParser.secretExpression`.
   * @param ctx the parse tree
   */
  exitSecretExpression?: (ctx: SecretExpressionContext) => void;
  /**
   * Enter a parse tree produced by `nlangParser.nlangExpression`.
   * @param ctx the parse tree
   */
  enterNlangExpression?: (ctx: NlangExpressionContext) => void;
  /**
   * Exit a parse tree produced by `nlangParser.nlangExpression`.
   * @param ctx the parse tree
   */
  exitNlangExpression?: (ctx: NlangExpressionContext) => void;
}
