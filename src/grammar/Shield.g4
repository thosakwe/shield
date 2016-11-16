grammar Shield;

NUM: '-'? [0-9]+ ('.' [0-9]+)?;
STRING_BACKTICK: '`' ('\\`' | ~('\n' | '`'))* '`';
STRING_DOUBLE: '"' ('\\"' | ~('\n' | '"'))* '"';
STRING_SINGLE: '\'' ('\\\'' | ~('\n' | '\''))* '\'';
REGEX_LITERAL: '/' ('\\/' | ~('\n' | '/'))+ '/';

ID: [A-Za-z] ([A-Za-z0-9_-] | '[' | ']')*;

validationSchema: importDecl* schemaDecl;
importDecl: 'import' source=string;

string:
  STRING_SINGLE #SingleQuotedString
  | STRING_DOUBLE #DoubleQuotedString
  | STRING_BACKTICK #TemplateString
;

schemaDecl: 'schema' name=ID '{' (stmt ';')* deviations=deviationDecl*'}';
deviationDecl: '.' name=ID '{' (stmt ';')* deviations=deviationDecl* '}';

stmt:
  'allow' (names+=ID ',') names+=ID #AllowStmt
  | 'delete' (names+=ID ',') names+=ID #DeleteStmt
  | 'forbid' (names+=ID ',') names+=ID #ForbidStmt
  | name=ID required='*'? (':' (constraint ',')* constraint orClause?)? #FieldDeclStmt
;

orClause: 'or' expr;

constraint:
  type=ID #TypeConstraint
  | callee=ID '(' ((args+=expr ',')* args+=expr)? ')' #FunctionConstraint
  | REGEX_LITERAL flags=('g'|'i'|'m'|'u'|'y')* #RegexConstraint
  | left=constraint right=constraint #AlternateConstraints
;

expr:
  NUM #NumberExpr
  | string #StringExpr
  | '(' expr ')' #ParenthesizedExpr
;
