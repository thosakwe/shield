// Generated from Shield.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ShieldListener = require('./ShieldListener').ShieldListener;
var ShieldVisitor = require('./ShieldVisitor').ShieldVisitor;

var grammarFileName = "Shield.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u001c\u009a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0007\u0002\u0016\n",
    "\u0002\f\u0002\u000e\u0002\u0019\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004#\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0007\u0005+\n\u0005\f\u0005\u000e\u0005.\u000b",
    "\u0005\u0003\u0005\u0007\u00051\n\u0005\f\u0005\u000e\u00054\u000b\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0007\u0006>\n\u0006\f\u0006\u000e\u0006A\u000b",
    "\u0006\u0003\u0006\u0007\u0006D\n\u0006\f\u0006\u000e\u0006G\u000b\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007\\\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0007\u0007b\n\u0007\f\u0007\u000e\u0007e\u000b\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007i\n\u0007\u0005\u0007k\n\u0007\u0005\u0007",
    "m\n\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0007\ty\n\t\f\t\u000e\t|\u000b\t\u0003\t\u0005\t",
    "\u007f\n\t\u0003\t\u0003\t\u0003\t\u0007\t\u0084\n\t\f\t\u000e\t\u0087",
    "\u000b\t\u0005\t\u0089\n\t\u0003\t\u0003\t\u0007\t\u008d\n\t\f\t\u000e",
    "\t\u0090\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005",
    "\n\u0098\n\n\u0003\n\u0002\u0003\u0010\u000b\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0002\u0003\u0003\u0002\u0012\u0016\u00a6\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0004\u001c\u0003\u0002\u0002\u0002\u0006\"",
    "\u0003\u0002\u0002\u0002\b$\u0003\u0002\u0002\u0002\n7\u0003\u0002\u0002",
    "\u0002\fl\u0003\u0002\u0002\u0002\u000en\u0003\u0002\u0002\u0002\u0010",
    "\u0088\u0003\u0002\u0002\u0002\u0012\u0097\u0003\u0002\u0002\u0002\u0014",
    "\u0016\u0005\u0004\u0003\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0016",
    "\u0019\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017",
    "\u0018\u0003\u0002\u0002\u0002\u0018\u001a\u0003\u0002\u0002\u0002\u0019",
    "\u0017\u0003\u0002\u0002\u0002\u001a\u001b\u0005\b\u0005\u0002\u001b",
    "\u0003\u0003\u0002\u0002\u0002\u001c\u001d\u0007\u0003\u0002\u0002\u001d",
    "\u001e\u0005\u0006\u0004\u0002\u001e\u0005\u0003\u0002\u0002\u0002\u001f",
    "#\u0007\u001a\u0002\u0002 #\u0007\u0019\u0002\u0002!#\u0007\u0018\u0002",
    "\u0002\"\u001f\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"",
    "!\u0003\u0002\u0002\u0002#\u0007\u0003\u0002\u0002\u0002$%\u0007\u0004",
    "\u0002\u0002%&\u0007\u001c\u0002\u0002&,\u0007\u0005\u0002\u0002\'(",
    "\u0005\f\u0007\u0002()\u0007\u0006\u0002\u0002)+\u0003\u0002\u0002\u0002",
    "*\'\u0003\u0002\u0002\u0002+.\u0003\u0002\u0002\u0002,*\u0003\u0002",
    "\u0002\u0002,-\u0003\u0002\u0002\u0002-2\u0003\u0002\u0002\u0002.,\u0003",
    "\u0002\u0002\u0002/1\u0005\n\u0006\u00020/\u0003\u0002\u0002\u00021",
    "4\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002\u0002",
    "\u000235\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u000256\u0007\u0007",
    "\u0002\u00026\t\u0003\u0002\u0002\u000278\u0007\b\u0002\u000289\u0007",
    "\u001c\u0002\u00029?\u0007\u0005\u0002\u0002:;\u0005\f\u0007\u0002;",
    "<\u0007\u0006\u0002\u0002<>\u0003\u0002\u0002\u0002=:\u0003\u0002\u0002",
    "\u0002>A\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002?@\u0003\u0002",
    "\u0002\u0002@E\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002BD\u0005",
    "\n\u0006\u0002CB\u0003\u0002\u0002\u0002DG\u0003\u0002\u0002\u0002E",
    "C\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FH\u0003\u0002\u0002",
    "\u0002GE\u0003\u0002\u0002\u0002HI\u0007\u0007\u0002\u0002I\u000b\u0003",
    "\u0002\u0002\u0002JK\u0007\t\u0002\u0002KL\u0007\u001c\u0002\u0002L",
    "M\u0007\n\u0002\u0002MN\u0003\u0002\u0002\u0002Nm\u0007\u001c\u0002",
    "\u0002OP\u0007\u000b\u0002\u0002PQ\u0007\u001c\u0002\u0002QR\u0007\n",
    "\u0002\u0002RS\u0003\u0002\u0002\u0002Sm\u0007\u001c\u0002\u0002TU\u0007",
    "\f\u0002\u0002UV\u0007\u001c\u0002\u0002VW\u0007\n\u0002\u0002WX\u0003",
    "\u0002\u0002\u0002Xm\u0007\u001c\u0002\u0002Y[\u0007\u001c\u0002\u0002",
    "Z\\\u0007\r\u0002\u0002[Z\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002",
    "\u0002\\j\u0003\u0002\u0002\u0002]c\u0007\u000e\u0002\u0002^_\u0005",
    "\u0010\t\u0002_`\u0007\n\u0002\u0002`b\u0003\u0002\u0002\u0002a^\u0003",
    "\u0002\u0002\u0002be\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002",
    "cd\u0003\u0002\u0002\u0002df\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002",
    "\u0002fh\u0005\u0010\t\u0002gi\u0005\u000e\b\u0002hg\u0003\u0002\u0002",
    "\u0002hi\u0003\u0002\u0002\u0002ik\u0003\u0002\u0002\u0002j]\u0003\u0002",
    "\u0002\u0002jk\u0003\u0002\u0002\u0002km\u0003\u0002\u0002\u0002lJ\u0003",
    "\u0002\u0002\u0002lO\u0003\u0002\u0002\u0002lT\u0003\u0002\u0002\u0002",
    "lY\u0003\u0002\u0002\u0002m\r\u0003\u0002\u0002\u0002no\u0007\u000f",
    "\u0002\u0002op\u0005\u0012\n\u0002p\u000f\u0003\u0002\u0002\u0002qr",
    "\b\t\u0001\u0002r\u0089\u0007\u001c\u0002\u0002st\u0007\u001c\u0002",
    "\u0002t~\u0007\u0010\u0002\u0002uv\u0005\u0012\n\u0002vw\u0007\n\u0002",
    "\u0002wy\u0003\u0002\u0002\u0002xu\u0003\u0002\u0002\u0002y|\u0003\u0002",
    "\u0002\u0002zx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{}\u0003",
    "\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002}\u007f\u0005\u0012\n\u0002",
    "~z\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0080",
    "\u0003\u0002\u0002\u0002\u0080\u0089\u0007\u0011\u0002\u0002\u0081\u0085",
    "\u0007\u001b\u0002\u0002\u0082\u0084\t\u0002\u0002\u0002\u0083\u0082",
    "\u0003\u0002\u0002\u0002\u0084\u0087\u0003\u0002\u0002\u0002\u0085\u0083",
    "\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0089",
    "\u0003\u0002\u0002\u0002\u0087\u0085\u0003\u0002\u0002\u0002\u0088q",
    "\u0003\u0002\u0002\u0002\u0088s\u0003\u0002\u0002\u0002\u0088\u0081",
    "\u0003\u0002\u0002\u0002\u0089\u008e\u0003\u0002\u0002\u0002\u008a\u008b",
    "\f\u0003\u0002\u0002\u008b\u008d\u0005\u0010\t\u0004\u008c\u008a\u0003",
    "\u0002\u0002\u0002\u008d\u0090\u0003\u0002\u0002\u0002\u008e\u008c\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0011\u0003",
    "\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0091\u0098\u0007",
    "\u0017\u0002\u0002\u0092\u0098\u0005\u0006\u0004\u0002\u0093\u0094\u0007",
    "\u0010\u0002\u0002\u0094\u0095\u0005\u0012\n\u0002\u0095\u0096\u0007",
    "\u0011\u0002\u0002\u0096\u0098\u0003\u0002\u0002\u0002\u0097\u0091\u0003",
    "\u0002\u0002\u0002\u0097\u0092\u0003\u0002\u0002\u0002\u0097\u0093\u0003",
    "\u0002\u0002\u0002\u0098\u0013\u0003\u0002\u0002\u0002\u0013\u0017\"",
    ",2?E[chjlz~\u0085\u0088\u008e\u0097"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'import'", "'schema'", "'{'", "';'", "'}'", 
                     "'.'", "'allow'", "','", "'delete'", "'forbid'", "'*'", 
                     "':'", "'or'", "'('", "')'", "'g'", "'i'", "'m'", "'u'", 
                     "'y'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, "NUM", "STRING_BACKTICK", "STRING_DOUBLE", 
                      "STRING_SINGLE", "REGEX_LITERAL", "ID" ];

var ruleNames =  [ "validationSchema", "importDecl", "string", "schemaDecl", 
                   "deviationDecl", "stmt", "orClause", "constraint", "expr" ];

function ShieldParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ShieldParser.prototype = Object.create(antlr4.Parser.prototype);
ShieldParser.prototype.constructor = ShieldParser;

Object.defineProperty(ShieldParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ShieldParser.EOF = antlr4.Token.EOF;
ShieldParser.T__0 = 1;
ShieldParser.T__1 = 2;
ShieldParser.T__2 = 3;
ShieldParser.T__3 = 4;
ShieldParser.T__4 = 5;
ShieldParser.T__5 = 6;
ShieldParser.T__6 = 7;
ShieldParser.T__7 = 8;
ShieldParser.T__8 = 9;
ShieldParser.T__9 = 10;
ShieldParser.T__10 = 11;
ShieldParser.T__11 = 12;
ShieldParser.T__12 = 13;
ShieldParser.T__13 = 14;
ShieldParser.T__14 = 15;
ShieldParser.T__15 = 16;
ShieldParser.T__16 = 17;
ShieldParser.T__17 = 18;
ShieldParser.T__18 = 19;
ShieldParser.T__19 = 20;
ShieldParser.NUM = 21;
ShieldParser.STRING_BACKTICK = 22;
ShieldParser.STRING_DOUBLE = 23;
ShieldParser.STRING_SINGLE = 24;
ShieldParser.REGEX_LITERAL = 25;
ShieldParser.ID = 26;

ShieldParser.RULE_validationSchema = 0;
ShieldParser.RULE_importDecl = 1;
ShieldParser.RULE_string = 2;
ShieldParser.RULE_schemaDecl = 3;
ShieldParser.RULE_deviationDecl = 4;
ShieldParser.RULE_stmt = 5;
ShieldParser.RULE_orClause = 6;
ShieldParser.RULE_constraint = 7;
ShieldParser.RULE_expr = 8;

function ValidationSchemaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ShieldParser.RULE_validationSchema;
    return this;
}

ValidationSchemaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValidationSchemaContext.prototype.constructor = ValidationSchemaContext;

ValidationSchemaContext.prototype.schemaDecl = function() {
    return this.getTypedRuleContext(SchemaDeclContext,0);
};

ValidationSchemaContext.prototype.importDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ImportDeclContext);
    } else {
        return this.getTypedRuleContext(ImportDeclContext,i);
    }
};

ValidationSchemaContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterValidationSchema(this);
	}
};

ValidationSchemaContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitValidationSchema(this);
	}
};

ValidationSchemaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitValidationSchema(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ShieldParser.ValidationSchemaContext = ValidationSchemaContext;

ShieldParser.prototype.validationSchema = function() {

    var localctx = new ValidationSchemaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ShieldParser.RULE_validationSchema);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ShieldParser.T__0) {
            this.state = 18;
            this.importDecl();
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 24;
        this.schemaDecl();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
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
};

function ImportDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ShieldParser.RULE_importDecl;
    this.source = null; // StringContext
    return this;
}

ImportDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportDeclContext.prototype.constructor = ImportDeclContext;

ImportDeclContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ImportDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterImportDecl(this);
	}
};

ImportDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitImportDecl(this);
	}
};

ImportDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitImportDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ShieldParser.ImportDeclContext = ImportDeclContext;

ShieldParser.prototype.importDecl = function() {

    var localctx = new ImportDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ShieldParser.RULE_importDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.match(ShieldParser.T__0);
        this.state = 27;
        localctx.source = this.string();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
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
};

function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ShieldParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;


 
StringContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function TemplateStringContext(parser, ctx) {
	StringContext.call(this, parser);
    StringContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TemplateStringContext.prototype = Object.create(StringContext.prototype);
TemplateStringContext.prototype.constructor = TemplateStringContext;

ShieldParser.TemplateStringContext = TemplateStringContext;

TemplateStringContext.prototype.STRING_BACKTICK = function() {
    return this.getToken(ShieldParser.STRING_BACKTICK, 0);
};
TemplateStringContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterTemplateString(this);
	}
};

TemplateStringContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitTemplateString(this);
	}
};

TemplateStringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitTemplateString(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DoubleQuotedStringContext(parser, ctx) {
	StringContext.call(this, parser);
    StringContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DoubleQuotedStringContext.prototype = Object.create(StringContext.prototype);
DoubleQuotedStringContext.prototype.constructor = DoubleQuotedStringContext;

ShieldParser.DoubleQuotedStringContext = DoubleQuotedStringContext;

DoubleQuotedStringContext.prototype.STRING_DOUBLE = function() {
    return this.getToken(ShieldParser.STRING_DOUBLE, 0);
};
DoubleQuotedStringContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterDoubleQuotedString(this);
	}
};

DoubleQuotedStringContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitDoubleQuotedString(this);
	}
};

DoubleQuotedStringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitDoubleQuotedString(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SingleQuotedStringContext(parser, ctx) {
	StringContext.call(this, parser);
    StringContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SingleQuotedStringContext.prototype = Object.create(StringContext.prototype);
SingleQuotedStringContext.prototype.constructor = SingleQuotedStringContext;

ShieldParser.SingleQuotedStringContext = SingleQuotedStringContext;

SingleQuotedStringContext.prototype.STRING_SINGLE = function() {
    return this.getToken(ShieldParser.STRING_SINGLE, 0);
};
SingleQuotedStringContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterSingleQuotedString(this);
	}
};

SingleQuotedStringContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitSingleQuotedString(this);
	}
};

SingleQuotedStringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitSingleQuotedString(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ShieldParser.StringContext = StringContext;

ShieldParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ShieldParser.RULE_string);
    try {
        this.state = 32;
        switch(this._input.LA(1)) {
        case ShieldParser.STRING_SINGLE:
            localctx = new SingleQuotedStringContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 29;
            this.match(ShieldParser.STRING_SINGLE);
            break;
        case ShieldParser.STRING_DOUBLE:
            localctx = new DoubleQuotedStringContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 30;
            this.match(ShieldParser.STRING_DOUBLE);
            break;
        case ShieldParser.STRING_BACKTICK:
            localctx = new TemplateStringContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 31;
            this.match(ShieldParser.STRING_BACKTICK);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
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
};

function SchemaDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ShieldParser.RULE_schemaDecl;
    this.name = null; // Token
    this.deviations = null; // DeviationDeclContext
    return this;
}

SchemaDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SchemaDeclContext.prototype.constructor = SchemaDeclContext;

SchemaDeclContext.prototype.ID = function() {
    return this.getToken(ShieldParser.ID, 0);
};

SchemaDeclContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

SchemaDeclContext.prototype.deviationDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeviationDeclContext);
    } else {
        return this.getTypedRuleContext(DeviationDeclContext,i);
    }
};

SchemaDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterSchemaDecl(this);
	}
};

SchemaDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitSchemaDecl(this);
	}
};

SchemaDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitSchemaDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ShieldParser.SchemaDeclContext = SchemaDeclContext;

ShieldParser.prototype.schemaDecl = function() {

    var localctx = new SchemaDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ShieldParser.RULE_schemaDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.match(ShieldParser.T__1);
        this.state = 35;
        localctx.name = this.match(ShieldParser.ID);
        this.state = 36;
        this.match(ShieldParser.T__2);
        this.state = 42;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ShieldParser.T__6) | (1 << ShieldParser.T__8) | (1 << ShieldParser.T__9) | (1 << ShieldParser.ID))) !== 0)) {
            this.state = 37;
            this.stmt();
            this.state = 38;
            this.match(ShieldParser.T__3);
            this.state = 44;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 48;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ShieldParser.T__5) {
            this.state = 45;
            localctx.deviations = this.deviationDecl();
            this.state = 50;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 51;
        this.match(ShieldParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
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
};

function DeviationDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ShieldParser.RULE_deviationDecl;
    this.name = null; // Token
    this.deviations = null; // DeviationDeclContext
    return this;
}

DeviationDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeviationDeclContext.prototype.constructor = DeviationDeclContext;

DeviationDeclContext.prototype.ID = function() {
    return this.getToken(ShieldParser.ID, 0);
};

DeviationDeclContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

DeviationDeclContext.prototype.deviationDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeviationDeclContext);
    } else {
        return this.getTypedRuleContext(DeviationDeclContext,i);
    }
};

DeviationDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterDeviationDecl(this);
	}
};

DeviationDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitDeviationDecl(this);
	}
};

DeviationDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitDeviationDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ShieldParser.DeviationDeclContext = DeviationDeclContext;

ShieldParser.prototype.deviationDecl = function() {

    var localctx = new DeviationDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ShieldParser.RULE_deviationDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(ShieldParser.T__5);
        this.state = 54;
        localctx.name = this.match(ShieldParser.ID);
        this.state = 55;
        this.match(ShieldParser.T__2);
        this.state = 61;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ShieldParser.T__6) | (1 << ShieldParser.T__8) | (1 << ShieldParser.T__9) | (1 << ShieldParser.ID))) !== 0)) {
            this.state = 56;
            this.stmt();
            this.state = 57;
            this.match(ShieldParser.T__3);
            this.state = 63;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 67;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ShieldParser.T__5) {
            this.state = 64;
            localctx.deviations = this.deviationDecl();
            this.state = 69;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 70;
        this.match(ShieldParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
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
};

function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ShieldParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;


 
StmtContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ForbidStmtContext(parser, ctx) {
	StmtContext.call(this, parser);
    this._ID = null; // Token;
    this.names = []; // of Tokens;
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForbidStmtContext.prototype = Object.create(StmtContext.prototype);
ForbidStmtContext.prototype.constructor = ForbidStmtContext;

ShieldParser.ForbidStmtContext = ForbidStmtContext;

ForbidStmtContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ShieldParser.ID);
    } else {
        return this.getToken(ShieldParser.ID, i);
    }
};

ForbidStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterForbidStmt(this);
	}
};

ForbidStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitForbidStmt(this);
	}
};

ForbidStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitForbidStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DeleteStmtContext(parser, ctx) {
	StmtContext.call(this, parser);
    this._ID = null; // Token;
    this.names = []; // of Tokens;
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeleteStmtContext.prototype = Object.create(StmtContext.prototype);
DeleteStmtContext.prototype.constructor = DeleteStmtContext;

ShieldParser.DeleteStmtContext = DeleteStmtContext;

DeleteStmtContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ShieldParser.ID);
    } else {
        return this.getToken(ShieldParser.ID, i);
    }
};

DeleteStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterDeleteStmt(this);
	}
};

DeleteStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitDeleteStmt(this);
	}
};

DeleteStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitDeleteStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FieldDeclStmtContext(parser, ctx) {
	StmtContext.call(this, parser);
    this.name = null; // Token;
    this.required = null; // Token;
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FieldDeclStmtContext.prototype = Object.create(StmtContext.prototype);
FieldDeclStmtContext.prototype.constructor = FieldDeclStmtContext;

ShieldParser.FieldDeclStmtContext = FieldDeclStmtContext;

FieldDeclStmtContext.prototype.ID = function() {
    return this.getToken(ShieldParser.ID, 0);
};

FieldDeclStmtContext.prototype.constraint = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstraintContext);
    } else {
        return this.getTypedRuleContext(ConstraintContext,i);
    }
};

FieldDeclStmtContext.prototype.orClause = function() {
    return this.getTypedRuleContext(OrClauseContext,0);
};
FieldDeclStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterFieldDeclStmt(this);
	}
};

FieldDeclStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitFieldDeclStmt(this);
	}
};

FieldDeclStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitFieldDeclStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AllowStmtContext(parser, ctx) {
	StmtContext.call(this, parser);
    this._ID = null; // Token;
    this.names = []; // of Tokens;
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AllowStmtContext.prototype = Object.create(StmtContext.prototype);
AllowStmtContext.prototype.constructor = AllowStmtContext;

ShieldParser.AllowStmtContext = AllowStmtContext;

AllowStmtContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ShieldParser.ID);
    } else {
        return this.getToken(ShieldParser.ID, i);
    }
};

AllowStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterAllowStmt(this);
	}
};

AllowStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitAllowStmt(this);
	}
};

AllowStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitAllowStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ShieldParser.StmtContext = StmtContext;

ShieldParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ShieldParser.RULE_stmt);
    var _la = 0; // Token type
    try {
        this.state = 106;
        switch(this._input.LA(1)) {
        case ShieldParser.T__6:
            localctx = new AllowStmtContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 72;
            this.match(ShieldParser.T__6);

            this.state = 73;
            localctx._ID = this.match(ShieldParser.ID);
            localctx.names.push(localctx._ID);
            this.state = 74;
            this.match(ShieldParser.T__7);
            this.state = 76;
            localctx._ID = this.match(ShieldParser.ID);
            localctx.names.push(localctx._ID);
            break;
        case ShieldParser.T__8:
            localctx = new DeleteStmtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 77;
            this.match(ShieldParser.T__8);

            this.state = 78;
            localctx._ID = this.match(ShieldParser.ID);
            localctx.names.push(localctx._ID);
            this.state = 79;
            this.match(ShieldParser.T__7);
            this.state = 81;
            localctx._ID = this.match(ShieldParser.ID);
            localctx.names.push(localctx._ID);
            break;
        case ShieldParser.T__9:
            localctx = new ForbidStmtContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 82;
            this.match(ShieldParser.T__9);

            this.state = 83;
            localctx._ID = this.match(ShieldParser.ID);
            localctx.names.push(localctx._ID);
            this.state = 84;
            this.match(ShieldParser.T__7);
            this.state = 86;
            localctx._ID = this.match(ShieldParser.ID);
            localctx.names.push(localctx._ID);
            break;
        case ShieldParser.ID:
            localctx = new FieldDeclStmtContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 87;
            localctx.name = this.match(ShieldParser.ID);
            this.state = 89;
            _la = this._input.LA(1);
            if(_la===ShieldParser.T__10) {
                this.state = 88;
                localctx.required = this.match(ShieldParser.T__10);
            }

            this.state = 104;
            _la = this._input.LA(1);
            if(_la===ShieldParser.T__11) {
                this.state = 91;
                this.match(ShieldParser.T__11);
                this.state = 97;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 92;
                        this.constraint(0);
                        this.state = 93;
                        this.match(ShieldParser.T__7); 
                    }
                    this.state = 99;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
                }

                this.state = 100;
                this.constraint(0);
                this.state = 102;
                _la = this._input.LA(1);
                if(_la===ShieldParser.T__12) {
                    this.state = 101;
                    this.orClause();
                }

            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
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
};

function OrClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ShieldParser.RULE_orClause;
    return this;
}

OrClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrClauseContext.prototype.constructor = OrClauseContext;

OrClauseContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

OrClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterOrClause(this);
	}
};

OrClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitOrClause(this);
	}
};

OrClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitOrClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ShieldParser.OrClauseContext = OrClauseContext;

ShieldParser.prototype.orClause = function() {

    var localctx = new OrClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ShieldParser.RULE_orClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.match(ShieldParser.T__12);
        this.state = 109;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
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
};

function ConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ShieldParser.RULE_constraint;
    return this;
}

ConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstraintContext.prototype.constructor = ConstraintContext;


 
ConstraintContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function AlternateConstraintsContext(parser, ctx) {
	ConstraintContext.call(this, parser);
    this.left = null; // ConstraintContext;
    this.right = null; // ConstraintContext;
    ConstraintContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AlternateConstraintsContext.prototype = Object.create(ConstraintContext.prototype);
AlternateConstraintsContext.prototype.constructor = AlternateConstraintsContext;

ShieldParser.AlternateConstraintsContext = AlternateConstraintsContext;

AlternateConstraintsContext.prototype.constraint = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstraintContext);
    } else {
        return this.getTypedRuleContext(ConstraintContext,i);
    }
};
AlternateConstraintsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterAlternateConstraints(this);
	}
};

AlternateConstraintsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitAlternateConstraints(this);
	}
};

AlternateConstraintsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitAlternateConstraints(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TypeConstraintContext(parser, ctx) {
	ConstraintContext.call(this, parser);
    this.type = null; // Token;
    ConstraintContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeConstraintContext.prototype = Object.create(ConstraintContext.prototype);
TypeConstraintContext.prototype.constructor = TypeConstraintContext;

ShieldParser.TypeConstraintContext = TypeConstraintContext;

TypeConstraintContext.prototype.ID = function() {
    return this.getToken(ShieldParser.ID, 0);
};
TypeConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterTypeConstraint(this);
	}
};

TypeConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitTypeConstraint(this);
	}
};

TypeConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitTypeConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RegexConstraintContext(parser, ctx) {
	ConstraintContext.call(this, parser);
    this.flags = null; // Token;
    ConstraintContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RegexConstraintContext.prototype = Object.create(ConstraintContext.prototype);
RegexConstraintContext.prototype.constructor = RegexConstraintContext;

ShieldParser.RegexConstraintContext = RegexConstraintContext;

RegexConstraintContext.prototype.REGEX_LITERAL = function() {
    return this.getToken(ShieldParser.REGEX_LITERAL, 0);
};
RegexConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterRegexConstraint(this);
	}
};

RegexConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitRegexConstraint(this);
	}
};

RegexConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitRegexConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionConstraintContext(parser, ctx) {
	ConstraintContext.call(this, parser);
    this.callee = null; // Token;
    this._expr = null; // ExprContext;
    this.args = []; // of ExprContexts;
    ConstraintContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionConstraintContext.prototype = Object.create(ConstraintContext.prototype);
FunctionConstraintContext.prototype.constructor = FunctionConstraintContext;

ShieldParser.FunctionConstraintContext = FunctionConstraintContext;

FunctionConstraintContext.prototype.ID = function() {
    return this.getToken(ShieldParser.ID, 0);
};

FunctionConstraintContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
FunctionConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterFunctionConstraint(this);
	}
};

FunctionConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitFunctionConstraint(this);
	}
};

FunctionConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitFunctionConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ShieldParser.prototype.constraint = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ConstraintContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, ShieldParser.RULE_constraint, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            localctx = new TypeConstraintContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 112;
            localctx.type = this.match(ShieldParser.ID);
            break;

        case 2:
            localctx = new FunctionConstraintContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 113;
            localctx.callee = this.match(ShieldParser.ID);
            this.state = 114;
            this.match(ShieldParser.T__13);
            this.state = 124;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ShieldParser.T__13) | (1 << ShieldParser.NUM) | (1 << ShieldParser.STRING_BACKTICK) | (1 << ShieldParser.STRING_DOUBLE) | (1 << ShieldParser.STRING_SINGLE))) !== 0)) {
                this.state = 120;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 115;
                        localctx._expr = this.expr();
                        localctx.args.push(localctx._expr);
                        this.state = 116;
                        this.match(ShieldParser.T__7); 
                    }
                    this.state = 122;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
                }

                this.state = 123;
                localctx._expr = this.expr();
                localctx.args.push(localctx._expr);
            }

            this.state = 126;
            this.match(ShieldParser.T__14);
            break;

        case 3:
            localctx = new RegexConstraintContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 127;
            this.match(ShieldParser.REGEX_LITERAL);
            this.state = 131;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 128;
                    localctx.flags = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ShieldParser.T__15) | (1 << ShieldParser.T__16) | (1 << ShieldParser.T__17) | (1 << ShieldParser.T__18) | (1 << ShieldParser.T__19))) !== 0))) {
                        localctx.flags = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    } 
                }
                this.state = 133;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
            }

            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 140;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AlternateConstraintsContext(this, new ConstraintContext(this, _parentctx, _parentState));
                localctx.left = _prevctx;
                this.pushNewRecursionContext(localctx, _startState, ShieldParser.RULE_constraint);
                this.state = 136;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 137;
                localctx.right = this.constraint(2); 
            }
            this.state = 142;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ShieldParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StringExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringExprContext.prototype = Object.create(ExprContext.prototype);
StringExprContext.prototype.constructor = StringExprContext;

ShieldParser.StringExprContext = StringExprContext;

StringExprContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};
StringExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterStringExpr(this);
	}
};

StringExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitStringExpr(this);
	}
};

StringExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitStringExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumberExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberExprContext.prototype = Object.create(ExprContext.prototype);
NumberExprContext.prototype.constructor = NumberExprContext;

ShieldParser.NumberExprContext = NumberExprContext;

NumberExprContext.prototype.NUM = function() {
    return this.getToken(ShieldParser.NUM, 0);
};
NumberExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterNumberExpr(this);
	}
};

NumberExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitNumberExpr(this);
	}
};

NumberExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitNumberExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenthesizedExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesizedExprContext.prototype = Object.create(ExprContext.prototype);
ParenthesizedExprContext.prototype.constructor = ParenthesizedExprContext;

ShieldParser.ParenthesizedExprContext = ParenthesizedExprContext;

ParenthesizedExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParenthesizedExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.enterParenthesizedExpr(this);
	}
};

ParenthesizedExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ShieldListener ) {
        listener.exitParenthesizedExpr(this);
	}
};

ParenthesizedExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ShieldVisitor ) {
        return visitor.visitParenthesizedExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ShieldParser.ExprContext = ExprContext;

ShieldParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ShieldParser.RULE_expr);
    try {
        this.state = 149;
        switch(this._input.LA(1)) {
        case ShieldParser.NUM:
            localctx = new NumberExprContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 143;
            this.match(ShieldParser.NUM);
            break;
        case ShieldParser.STRING_BACKTICK:
        case ShieldParser.STRING_DOUBLE:
        case ShieldParser.STRING_SINGLE:
            localctx = new StringExprContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 144;
            this.string();
            break;
        case ShieldParser.T__13:
            localctx = new ParenthesizedExprContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 145;
            this.match(ShieldParser.T__13);
            this.state = 146;
            this.expr();
            this.state = 147;
            this.match(ShieldParser.T__14);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
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
};


ShieldParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 7:
			return this.constraint_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ShieldParser.prototype.constraint_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ShieldParser = ShieldParser;
