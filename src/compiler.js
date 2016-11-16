import {readFileSync} from 'fs';
import parse from './grammar';
import {ShieldParser} from './grammar/ShieldParser';
import Validator from './validator';

const single = /(^')|('$)/g;
const double = /(^")|("$)/g;
const template = /(^`)|(`$)/g;

function getStringText(ctx) {
  const text = ctx.getText();

  if (ctx instanceof ShieldParser.SingleQuotedStringContext) {
    return text.replace(single, '');
  } else if (ctx instanceof ShieldParser.DoubleQuotedStringContext) {
    return text.replace(double, '');
  } else if (ctx instanceof ShieldParser.TemplateStringContext) {
    return text.replace(template, '');
  }

  return text;
}

export default class SchemaCompiler {
  compile(ast, out) {
    const data = [];

    for (const importDecl of ast.importDecl()) {
      const filename = this.getStringText(importDecl.source);
      const text = readFileSync(filename, 'utf8');
      const importedAst = parse(text);
      data.push(this.compileSchema(importedAst.schemaDecl(), out));
    }

    for (const set of data) {
      out.schemas[set[0]] = set[1];
    }

    const compiled = this.compileSchema(ast.schemaDecl(), out);
    out.schemas[compiled[0]] = compiled[1];
  }

  addTo(arr, ctx) {
    ctx.names.map(tok => {
      return tok.getText();
    }).forEach(text => {
      arr.push(text);
    });
  }

  compileSchema(schema, out) {
    const name = schema.name.getText();
    const validator = new Validator();

    for (const stmt of schema.stmt) {
      if (stmt instanceof ShieldParser.AllowStmtContext) {
        this.addTo(validator.allow, stmt);
      } else if (stmt instanceof ShieldParser.DeleteStmtContext) {
        this.addTo(validator.delete, stmt);
      } else if (stmt instanceof ShieldParser.ForbidStmtContext) {
        this.addTo(validator.forbid, stmt);
      } else if (stmt instanceof ShieldParser.FieldDeclStmtContext) {
        const name = stmt.name.getText();
      }
    }

    for (const deviations of schema.deviations) {

    }

    return [name, validator];
  }
}
