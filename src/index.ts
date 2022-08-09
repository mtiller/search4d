export type Solution = [number, number, number, number];

export function getnth(n: number) {
  if (n === 0) return [0, 0, 0, 0];
}

export class NumIterator {
  constructor(protected _cur: number, protected _end: number) {}
  next() {
    return new NumIterator(this._cur + 1, this._end);
  }
  done() {
    return this._cur >= this._end;
  }
  value() {
    return this._cur;
  }
}

export function range(start: number, end: number) {
  return new SomeClass(start, end);
}

class SomeClass {
  protected _cur: number;
  constructor(start: number, protected end: number) {
    this._cur = start;
  }

  [Symbol.iterator]() {
    return {
      next: () => ({ value: this._cur++, done: this._cur > this.end }),
    };
  }
}
