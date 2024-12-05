export abstract class concept {
  protected name: string;
  protected branch: string;

  constructor(n: string) {
    this.name = n;
  }

  abstract get get_name(): string;

  abstract get get_branch(): string;
}
