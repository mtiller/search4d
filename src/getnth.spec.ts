import { layers, range } from "./range";
import { getnth } from "./getnth";
import { Solution } from "./solution";
import iterate from "iterare";

describe("Test getnth", () => {
  it("should generate the first 4 items", () => {
    const items = [...range(0, 5)];
    expect(items.length).toEqual(5);
    const points = items.map(getnth);
    expect(points.length).toEqual(5);
    expect(points).toEqual([
      [0, 0, 0, 0],

      [-1, -1, -1, -1],
      [-1, -1, -1, 0],
      [-1, -1, -1, 1],
      [-1, -1, 0, -1],
    ]);
  });
  it("should generate the first 81 items", () => {
    const items = [...range(0, 81)];
    expect(items.length).toEqual(81);
    const points = items.map(getnth);
    expect(points.length).toEqual(81);
    expect(points).toEqual([
      [0, 0, 0, 0],

      [-1, -1, -1, -1],
      [-1, -1, -1, 0],
      [-1, -1, -1, 1],
      [-1, -1, 0, -1],
      [-1, -1, 0, 0],
      [-1, -1, 0, 1],
      [-1, -1, 1, -1],
      [-1, -1, 1, 0],
      [-1, -1, 1, 1],

      [-1, 0, -1, -1],
      [-1, 0, -1, 0],
      [-1, 0, -1, 1],
      [-1, 0, 0, -1],
      [-1, 0, 0, 0],
      [-1, 0, 0, 1],
      [-1, 0, 1, -1],
      [-1, 0, 1, 0],
      [-1, 0, 1, 1],

      [-1, 1, -1, -1],
      [-1, 1, -1, 0],
      [-1, 1, -1, 1],
      [-1, 1, 0, -1],
      [-1, 1, 0, 0],
      [-1, 1, 0, 1],
      [-1, 1, 1, -1],
      [-1, 1, 1, 0],
      [-1, 1, 1, 1],

      [0, -1, -1, -1],
      [0, -1, -1, 0],
      [0, -1, -1, 1],
      [0, -1, 0, -1],
      [0, -1, 0, 0],
      [0, -1, 0, 1],
      [0, -1, 1, -1],
      [0, -1, 1, 0],
      [0, -1, 1, 1],

      [0, 0, -1, -1],
      [0, 0, -1, 0],
      [0, 0, -1, 1],
      [0, 0, 0, -1],
      // [0, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, -1],
      [0, 0, 1, 0],
      [0, 0, 1, 1],

      [0, 1, -1, -1],
      [0, 1, -1, 0],
      [0, 1, -1, 1],
      [0, 1, 0, -1],
      [0, 1, 0, 0],
      [0, 1, 0, 1],
      [0, 1, 1, -1],
      [0, 1, 1, 0],
      [0, 1, 1, 1],

      [1, -1, -1, -1],
      [1, -1, -1, 0],
      [1, -1, -1, 1],
      [1, -1, 0, -1],
      [1, -1, 0, 0],
      [1, -1, 0, 1],
      [1, -1, 1, -1],
      [1, -1, 1, 0],
      [1, -1, 1, 1],

      [1, 0, -1, -1],
      [1, 0, -1, 0],
      [1, 0, -1, 1],
      [1, 0, 0, -1],
      [1, 0, 0, 0],
      [1, 0, 0, 1],
      [1, 0, 1, -1],
      [1, 0, 1, 0],
      [1, 0, 1, 1],

      [1, 1, -1, -1],
      [1, 1, -1, 0],
      [1, 1, -1, 1],
      [1, 1, 0, -1],
      [1, 1, 0, 0],
      [1, 1, 0, 1],
      [1, 1, 1, -1],
      [1, 1, 1, 0],
      [1, 1, 1, 1],
    ]);
  });
  it("should generate only the 81st", () => {
    const items = [...range(80, 81)];
    expect(items.length).toEqual(1);
    const points = items.map(getnth);
    expect(points.length).toEqual(1);
    expect(points).toEqual([[1, 1, 1, 1]]);
  });
  it("should generate just the 81st and 82nd", () => {
    const items = [...range(80, 82)];
    expect(items.length).toEqual(2);
    const points = items.map(getnth);
    expect(points.length).toEqual(2);
    expect(points).toEqual([
      [1, 1, 1, 1],
      [-2, -2, -2, -2],
    ]);
  });
  it("should generate the 81st through 90th", () => {
    const items = [...range(80, 90)];
    expect(items.length).toEqual(10);
    const points = items.map(getnth);
    expect(points.length).toEqual(10);
    expect(points).toEqual([
      [1, 1, 1, 1],
      [-2, -2, -2, -2],
      [-2, -2, -2, -1],
      [-2, -2, -2, 0],
      [-2, -2, -2, 1],
      [-2, -2, -2, 2],
      [-2, -2, -1, -2],
      [-2, -2, -1, -1],
      [-2, -2, -1, 0],
      [-2, -2, -1, 1],
    ]);
  });
  it("should generate the corners", () => {
    const items = [0, 1, 81, 625];
    const points = items.map(getnth);
    expect(points).toEqual([
      [0, 0, 0, 0],
      [-1, -1, -1, -1],
      [-2, -2, -2, -2],
      [-3, -3, -3, -3],
    ]);
  });

  it("should count solutions", () => {
    const gasketPredicate = (gasket: Solution) => {
      const [a, b, c, d] = gasket;
      return (
        2 * (a ** 2 + b ** 2 + c ** 2 + d ** 2) - (a + b + c + d) ** 2 == 1
      );
    };

    const sol100 = iterate(range(0, 100))
      .map(getnth)
      .filter(gasketPredicate)
      .toArray();
    expect(sol100).toHaveLength(10);
    const sol1000 = iterate(range(0, 1000))
      .map(getnth)
      .filter(gasketPredicate)
      .toArray();
    expect(sol1000).toHaveLength(44);
    const sol10000 = iterate(range(0, 10000))
      .map(getnth)
      .filter(gasketPredicate)
      .toArray();
    expect(sol10000).toHaveLength(130);

    const sol3 = iterate(layers(3))
      .map(getnth)
      .filter(gasketPredicate)
      .toArray();
    expect(sol3).toHaveLength(64);
    const sol6 = iterate(layers(6))
      .map(getnth)
      .filter(gasketPredicate)
      .toArray();
    expect(sol6).toHaveLength(256);
  });
});
