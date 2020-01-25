const add = require ('./add');

describe("Add", () => {
    it("adds two numbers", () => {
        let result = add(2, 3);
        expect(result).toBe(5);
    });
  });