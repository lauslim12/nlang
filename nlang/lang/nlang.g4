// Declaration file of the grammar
grammar nlang;

// Rules for the grammar
ADD : 'ADD';
INCOME : 'INCOME';
EXPENSE : 'EXPENSE';
SECRET : 'NOZOMI';
NUMBER : [0-9]+;
STRING : '"' ~ [\n]* '"';
EOL : [\n\r]+ -> skip;
WS : [ \t] -> skip;
COMMENT : '//' ~[\n]+  -> skip;
MULTILINE_COMMENT : '/*' .*? '*/' -> skip;

// Valid expressions
incomeExpression : ADD INCOME NUMBER STRING;
expenseExpression : ADD EXPENSE NUMBER STRING;
secretExpression : SECRET;

// Runner for our expressions
nlangExpression : (incomeExpression | expenseExpression | secretExpression)+ EOF;