export default class Validator {
  constructor() {
    this.schemas = {};
  }

  resolve(name) {
    const split = name.split('.');
    let resolved = null;

    for (const str of split) {
      if (resolved) {
        const deviation = resolved.deviations[str];

        if (!deviation) {
          break;
        }
      } else {
        const schema = this.schemas[str];

        if (!schema) {
          break;
        }
      }
    }

    if (!resolved) {
      throw new Error(`Could not resolve validator '${name}'.`);
    } else {
      return resolved;
    }
  }

  validate(name, data) {
    const schema = this.resolve(name);
    const errors = schema.validate(data);

    if (errors.length) {
      throw new Error(`Validation of ${name} failed with ${errors.length} error(s).`);
    } else {
      const result = data;

      for (const key of schema.delete) {
        delete result[key];
      }

      return result;
    }
  }
}
