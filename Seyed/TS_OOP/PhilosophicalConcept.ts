import { concept } from "./Concept";

class philosophicalConcept extends concept {
  private reasoning: string[];

  constructor(n: string, b: string) {
    super(n);
    this.branch = b;
  }

  get getBranch() {
    return this.branch;
  }

  set addReasoning(r: string[]): void {
    this.reasoning = r;
  }

  isPersuading(): boolean {
    return this.reasoning.length > 10;
  }
}
