const basicOperations = require("../../src/basicOperations");

describe("addition operation test", () => {
  test("add a matrix 2x2 to another matrix 2x2 with just 1s", () => {
    expect(
      basicOperations.addition(
        [
          [1, 1],
          [1, 1],
        ],
        [
          [1, 1],
          [1, 1],
        ]
      )
    ).toBe([
      [2, 2],
      [2, 2],
    ]);
  });
});

/* test('add a matrix 2x2 to another matrix 2x2 with just 1s', () => {
  expect(
    basicOperations.addition(
      [[1, 1], [1, 1]],
      [[1, 1], [1, 1]]
    )
  ).toBe([[2, 2], [2, 2]])
}) */
