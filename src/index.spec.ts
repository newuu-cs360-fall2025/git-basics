import { describe, it, expect } from "@jest/globals";

describe("Sample Test Suite", () => {
  it("should pass a sample test", () => {
    expect(true).toBe(true);
  });

  it("should pass another sample test", () => {
    expect(1 + 1).toBe(2);
  });
});
