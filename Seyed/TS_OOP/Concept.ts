export abstract class Concept {
  protected name: string;
  protected branch: string;

  constructor(n: string) {
    this.name = n;
  }

  getName(): string {
    return this.name;
  }

  getBranch(): string {
    return this.branch;
  }
}
