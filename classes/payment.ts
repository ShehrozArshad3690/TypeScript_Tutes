import { hasFormator } from "../interface/hasFormator";

class Payment implements hasFormator {
  readonly recipient: string;
  private details: string;
  public amount: number;
  constructor(r: string, d: string, a: number) {
    this.recipient = r;
    this.details = d;
    this.amount = a;
  }
  format(): string {
    return `${this.recipient} is owed ${this.amount} for ${this.details}`;
  }
}

export { Payment };
