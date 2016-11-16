import Constraint from './constraint';

export class ForbidConstraint {
  constructor(name) {
    super();
    this.name = name;
  }

  apply(name) {
    return name === this.name;
  }
}
