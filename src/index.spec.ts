import { range, getnth } from "./index";

describe("Test iterator", () => {
  it("should handle intervals", () => {
    expect([...range(0, 10)]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("should handle intervals", () => {
    const items = [...range(-100, 100)];
    expect(items.length).toEqual(200);
  });
});

describe("Test getnth", () => {
  it("should generate the first 4 items", () => {
    const items = [...range(0, 5)];
    expect(items.length).toEqual(5);
    const sols = items.map(getnth);
    expect(sols.length).toEqual(5);
    expect(sols).toEqual([
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
    const sols = items.map(getnth);
    expect(sols.length).toEqual(81);
    expect(sols).toEqual([
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
    const sols = items.map(getnth);
    expect(sols.length).toEqual(1);
    expect(sols).toEqual([[1, 1, 1, 1]]);
  });
  it("should generate just the 81st and 82nd", () => {
    const items = [...range(80, 82)];
    expect(items.length).toEqual(2);
    const sols = items.map(getnth);
    expect(sols.length).toEqual(2);
    expect(sols).toEqual([
      [1, 1, 1, 1],
      [-2, -2, -2, -2],
    ]);
  });
  it("should generate the 81st through 90th", () => {
    const items = [...range(80, 90)];
    expect(items.length).toEqual(10);
    const sols = items.map(getnth);
    expect(sols.length).toEqual(10);
    expect(sols).toEqual([
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
    const sols = items.map(getnth);
    expect(sols).toEqual([
      [0, 0, 0, 0],
      [-1, -1, -1, -1],
      [-2, -2, -2, -2],
      [-3, -3, -3, -3],
    ]);
  });
});
