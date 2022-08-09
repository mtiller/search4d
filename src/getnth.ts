import { Solution } from "./solution";

export function getnth(n: number): Solution {
  if (n === 0) return [0, 0, 0, 0];
  for (let i = 1; true; i++) {
    const side = 2 * i + 1;
    const size = side ** 4;
    if (n < size) {
      let count = (side - 2) ** 4;
      for (let x1 = -i; x1 <= i; x1++) {
        for (let x2 = -i; x2 <= i; x2++) {
          for (let x3 = -i; x3 <= i; x3++) {
            for (let x4 = -i; x4 <= i; x4++) {
              const cur: Solution = [x1, x2, x3, x4];
              if (cur.every((x) => x !== i && x !== -i)) continue;
              if (count === n) return cur;
              count++;
            }
          }
        }
      }
    }
  }
}
