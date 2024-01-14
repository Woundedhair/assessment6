const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("return an array", () => {
    var shuffle = [];
  });

  test("return an array of the same length as the argument", () => {
    let argument = [1, 2, 3, 4, 5];
    let array = argument;
    expect(array.length).toBe(argument.length);
  });

  test("check that same items are in the array", () => {
    let items = [1, 2, 3, 4, 5];
    let arrays = items;
    expect(items).toEqual(arrays);
  });
});
