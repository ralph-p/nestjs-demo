export class OddNumberError extends Error {
  constructor(public readonly input: number) {
    super(`${input} is odd`);
  }
}
