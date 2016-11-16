// Generated from Shield.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ShieldParser.
function ShieldListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ShieldListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ShieldListener.prototype.constructor = ShieldListener;

// Enter a parse tree produced by ShieldParser#validationSchema.
ShieldListener.prototype.enterValidationSchema = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#validationSchema.
ShieldListener.prototype.exitValidationSchema = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#importDecl.
ShieldListener.prototype.enterImportDecl = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#importDecl.
ShieldListener.prototype.exitImportDecl = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#SingleQuotedString.
ShieldListener.prototype.enterSingleQuotedString = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#SingleQuotedString.
ShieldListener.prototype.exitSingleQuotedString = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#DoubleQuotedString.
ShieldListener.prototype.enterDoubleQuotedString = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#DoubleQuotedString.
ShieldListener.prototype.exitDoubleQuotedString = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#TemplateString.
ShieldListener.prototype.enterTemplateString = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#TemplateString.
ShieldListener.prototype.exitTemplateString = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#schemaDecl.
ShieldListener.prototype.enterSchemaDecl = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#schemaDecl.
ShieldListener.prototype.exitSchemaDecl = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#deviationDecl.
ShieldListener.prototype.enterDeviationDecl = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#deviationDecl.
ShieldListener.prototype.exitDeviationDecl = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#AllowStmt.
ShieldListener.prototype.enterAllowStmt = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#AllowStmt.
ShieldListener.prototype.exitAllowStmt = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#DeleteStmt.
ShieldListener.prototype.enterDeleteStmt = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#DeleteStmt.
ShieldListener.prototype.exitDeleteStmt = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#ForbidStmt.
ShieldListener.prototype.enterForbidStmt = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#ForbidStmt.
ShieldListener.prototype.exitForbidStmt = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#FieldDeclStmt.
ShieldListener.prototype.enterFieldDeclStmt = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#FieldDeclStmt.
ShieldListener.prototype.exitFieldDeclStmt = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#orClause.
ShieldListener.prototype.enterOrClause = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#orClause.
ShieldListener.prototype.exitOrClause = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#AlternateConstraints.
ShieldListener.prototype.enterAlternateConstraints = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#AlternateConstraints.
ShieldListener.prototype.exitAlternateConstraints = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#TypeConstraint.
ShieldListener.prototype.enterTypeConstraint = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#TypeConstraint.
ShieldListener.prototype.exitTypeConstraint = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#RegexConstraint.
ShieldListener.prototype.enterRegexConstraint = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#RegexConstraint.
ShieldListener.prototype.exitRegexConstraint = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#FunctionConstraint.
ShieldListener.prototype.enterFunctionConstraint = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#FunctionConstraint.
ShieldListener.prototype.exitFunctionConstraint = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#NumberExpr.
ShieldListener.prototype.enterNumberExpr = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#NumberExpr.
ShieldListener.prototype.exitNumberExpr = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#StringExpr.
ShieldListener.prototype.enterStringExpr = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#StringExpr.
ShieldListener.prototype.exitStringExpr = function(ctx) {
};


// Enter a parse tree produced by ShieldParser#ParenthesizedExpr.
ShieldListener.prototype.enterParenthesizedExpr = function(ctx) {
};

// Exit a parse tree produced by ShieldParser#ParenthesizedExpr.
ShieldListener.prototype.exitParenthesizedExpr = function(ctx) {
};



exports.ShieldListener = ShieldListener;