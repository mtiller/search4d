import { layers, range } from "./range";

describe("Test iterator", () => {
  it("should handle intervals", () => {
    expect([...range(0, 10)]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("should handle intervals", () => {
    const items = [...range(-100, 100)];
    expect(items.length).toEqual(200);
  });
  it("should handle layers", () => {
    expect([...layers(1)]).toEqual([...range(0, 81)]);
    expect([...layers(1, 0)]).toEqual([...range(1, 81)]);
    expect([...layers(2, 0)]).toEqual([...range(1, 625)]);
  });
});
