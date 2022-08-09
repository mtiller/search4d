export function range(start: number, end: number) {
  return new RangeIterator(start, end);
}

export function layers(outer: number, inner?: number) {
  return range(
    inner === undefined ? 0 : (2 * inner + 1) ** 4,
    (2 * outer + 1) ** 4
  );
}

class RangeIterator {
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
