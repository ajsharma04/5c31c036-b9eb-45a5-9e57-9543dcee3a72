const findSubsequence = require("../index.js");
const fs = require("fs");

test("Test Case 01", () => {
  let input = "6 1 5 9 2";
  expect(findSubsequence(input)).toContain("1 5 9");
});

test("Test Case 02", () => {  
  let input = fs.readFileSync("test-case-2.txt");
  expect(findSubsequence(input)).toContain("1710 2461 9288 10195 10431 12485");
});

test("Test Case 03", () => {  
  let input = fs.readFileSync("test-case-3.txt");
  expect(findSubsequence(input)).toContain("10298 10897 12291 15037 18446 23435 25333 27266");
});

test("Test Case 04", () => {  
  let input = fs.readFileSync("test-case-4.txt");
  expect(findSubsequence(input)).toContain("3862 16353 22813 28735");
});

test("Test Case 05", () => {  
  let input = fs.readFileSync("test-case-5.txt");
  expect(findSubsequence(input)).toContain("11084 11970 24975 30922");
});

test("Test Case 06", () => {  
  let input = fs.readFileSync("test-case-6.txt");
  expect(findSubsequence(input)).toContain("3808 3908 10386 19306");
});

test("Test Case 07", () => {  
  let input = fs.readFileSync("test-case-7.txt");
  expect(findSubsequence(input)).toContain("125 1841 5882 18464 28317 31497");
});

test("Test Case 08", () => {  
  let input = fs.readFileSync("test-case-8.txt");
  expect(findSubsequence(input)).toContain("9139 17687 25106 26202 27592 30937");
});

test("Test Case 09", () => {  
  let input = fs.readFileSync("test-case-9.txt");
  expect(findSubsequence(input)).toContain("918 1089 5133 7725 18035 24605 26716 27095");
});

test("Test Case 10", () => {  
  let input = "6 2 4 6 1 5 9 2";
  expect(findSubsequence(input)).toContain("2 4 6");
});

test("Test Case 11", () => {  
  let input = "6 2 4 3 1 5 9";
  expect(findSubsequence(input)).toContain("1 5 9");
});

test("Test Case 12", () => {  
  let input = "1 2 3 4 5 6 7 8 9";
  expect(findSubsequence(input)).toContain("1 2 3 4 5 6 7 8 9");
});

test("Test Case 13", () => {  
  let input = "9 8 7 6 5 4 3 2 1";
  expect(findSubsequence(input)).toContain("1");
});

test("Test Case 14", () => {  
  let input = "1 1 1 1 1";
  expect(findSubsequence(input)).toContain("1");
});

test("Test Case 15", () => {  
  let input = "14 3 53 11 19";
  expect(findSubsequence(input)).toContain("11 19");
});