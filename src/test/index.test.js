const findSubsequence = require("../index.js");

test("Test Case 01 - 6 1 5 9 2", () => {
  let input = "6 1 5 9 2";
  expect(findSubsequence(input)).toContain("1 5 9");
});
