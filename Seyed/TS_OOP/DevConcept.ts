import { concept } from "./Concept";

class devConcept extends concept {
  constructor(n: string, b: "architecture" | "clean-code" | "languages") {
    super(n);
    this.branch = b;
  }

  get getArea() {
    return this.branch;
  }
}
