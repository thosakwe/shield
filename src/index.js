import parse from './grammar';
import SchemaCompiler from './compiler';
import Validator from './validator';

const compiler = new SchemaCompiler();

export function compile(text) {
  const ast = parse(text);
  const validator = new Validator();
  compiler.compile(ast, validator);
  return validator;
}

export default Validator;
