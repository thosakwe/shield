export default class Schema {
    constructor() {
        this.constraints = {};
        this.allow = [];
        this.delete = [];
        this.forbid = [];
    }

    add(name, constraint) {
      if (this.constraints[name]) {
        this.constraints[name].push(constraint);
      } else {
        this.constraints[name] = [constraint];
      }
    }

    validate(data) {
        const errors = [];

        for (const key of Object.keys(data)) {
          if (this.forbid.indexOf(key) !== -1) {
            errors.push(`Field '${key}' is not allowed here.`);
            continue;
          }

            const value = data[key];
            const constraints = this.constraints[key];

            if (!constraints) {
                if (this.allow.indexOf(key) === -1) {
                    errors.push(`Unrecognized field '${key}'.`);
                }
            } else {
                for (const constraint of constraints) {
                    const result = constraint.apply(key, value);

                    if (result !== true) {
                        errors.push(String(result));
                    }
                }
            }
        }

        return errors;
    }
}
