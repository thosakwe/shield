// Generated from Shield.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ShieldParser.

function ShieldVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ShieldVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ShieldVisitor.prototype.constructor = ShieldVisitor;

// Visit a parse tree produced by ShieldParser#validationSchema.
ShieldVisitor.prototype.visitValidationSchema = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#importDecl.
ShieldVisitor.prototype.visitImportDecl = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#SingleQuotedString.
ShieldVisitor.prototype.visitSingleQuotedString = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#DoubleQuotedString.
ShieldVisitor.prototype.visitDoubleQuotedString = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#TemplateString.
ShieldVisitor.prototype.visitTemplateString = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#schemaDecl.
ShieldVisitor.prototype.visitSchemaDecl = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#deviationDecl.
ShieldVisitor.prototype.visitDeviationDecl = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#AllowStmt.
ShieldVisitor.prototype.visitAllowStmt = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#DeleteStmt.
ShieldVisitor.prototype.visitDeleteStmt = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#ForbidStmt.
ShieldVisitor.prototype.visitForbidStmt = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#FieldDeclStmt.
ShieldVisitor.prototype.visitFieldDeclStmt = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#orClause.
ShieldVisitor.prototype.visitOrClause = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#AlternateConstraints.
ShieldVisitor.prototype.visitAlternateConstraints = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#TypeConstraint.
ShieldVisitor.prototype.visitTypeConstraint = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#RegexConstraint.
ShieldVisitor.prototype.visitRegexConstraint = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#FunctionConstraint.
ShieldVisitor.prototype.visitFunctionConstraint = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#NumberExpr.
ShieldVisitor.prototype.visitNumberExpr = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#StringExpr.
ShieldVisitor.prototype.visitStringExpr = function(ctx) {
};


// Visit a parse tree produced by ShieldParser#ParenthesizedExpr.
ShieldVisitor.prototype.visitParenthesizedExpr = function(ctx) {
};



exports.ShieldVisitor = ShieldVisitor;