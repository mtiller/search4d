import { range } from "./index";

describe("Test iterator", () => {
  it("should handle intervals", () => {
    expect([...range(0, 10)]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("should handle intervals", () => {
    const items = [...range(-100, 100)];
    expect(items.length).toEqual(200);
  });
});
