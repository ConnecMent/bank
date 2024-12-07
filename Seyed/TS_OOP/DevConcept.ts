import { Concept } from "./Concept";

class DevConcept extends Concept {
  constructor(b: "architecture" | "clean-code" | "languages") {
    super("devConcept");
    this.branch = b;
  }

  get getArea() {
    return this.branch;
  }
}
