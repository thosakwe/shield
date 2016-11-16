import antlr4 from 'antlr4';
import {ShieldLexer} from './ShieldLexer';
import {ShieldParser} from './ShieldParser';

function applyListener(target, listener) {
  if (listener) {
    target.removeErrorListeners();
    target.addErrorListener(listener);
  }
}

export default function parse(text, errorListener) {
  const inputStream = new antlr4.InputStream(text);
  const lexer = new ShieldLexer(inputStream);
  applyListener(lexer, errorListener);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ShieldParser(tokens);
  applyListener(parser, errorListener);
  parser.buildParseTrees = true;
  return parser.validationSchema();
}
