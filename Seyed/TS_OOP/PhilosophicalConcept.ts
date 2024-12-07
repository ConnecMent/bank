import { Concept } from "./Concept";

class PhilosophicalConcept extends Concept {
  private reasoning: string[];

  constructor(n: string, b: string) {
    super(n);
    this.branch = b;
  }

  set addReasoning(r: string[]): void {
    this.reasoning.push(r);
  }

  isPersuading(): boolean {
    return this.reasoning.length > 10;
  }
}
