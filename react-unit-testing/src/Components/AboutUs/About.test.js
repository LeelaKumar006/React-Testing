import About, { add } from "./About";

// ARRANGE

//Group of related tests- test suite
xdescribe("about component", () => {
  //TEST CASE
  it("should be available with in about", () => {
    //ASSERT
    expect(About).toBeDefined();
  });
  //TEST CASE
  it("should add two numbers properly", () => {
    //ASSERT
    expect(add(20, 30)).toEqual(50);
  });
  //TEST CASE
  it("should check weather given data type is number or not", () => {
    //ASSERT
    expect(add("xyz", ",,,")).toEqual("Wrong Input");
  });
  //TEST CASE
  it("should add properly and return number as datatype", () => {
    //ASSERT
    expect(add(10, 20)).not.toBeNaN();
  });
  //TEST CASE
  it("should check the return value if it is string or not", () => {
    //ASSERT
    expect(add("xyz", "abc")).toMatch("Wrong Input");
  });
});
