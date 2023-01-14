import  match  from "./index.js";

describe("tests for match function", () => {
    it("result true", () => expect(match("abc","ABc")).toBe(true));
    it("result false", () => expect(match("abc","bca")).toBe(false));
    it("введеные данные не строка", () => expect(match("abc",5)).toBe("введеные данные не строка"));

});
