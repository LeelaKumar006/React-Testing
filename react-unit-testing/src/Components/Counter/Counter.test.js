import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

//ARRANGE

//Group of related tests- test suite
describe("counter component", () => {
  //TEST CASE #1
  it("has value with initial state 0", () => {
    //ACT
    render(<Counter />);
    const valueEl = screen.getByTestId("valueTxt");
    //ASSERT
    expect(valueEl.textContent).toBe("0");
  });
  //TEST CASE #2
  it("has proper inc and dec feature", () => {
    //ACT
    render(<Counter />);
    const valueEl = screen.getByTestId("valueTxt");
    //find inc and dec btn elements
    const incrBtn = screen.getByTestId("incrmntBtn");
    const decrBtn = screen.getByTestId("decrmntBtn");

    // let mock fire event onclick using fireevent

    //ACT
    fireEvent.click(incrBtn);

    expect(valueEl.textContent).toBe("1");
    //ACT
    fireEvent.click(decrBtn);
    //ASSERTION
    expect(valueEl.textContent).toBe("0");
  });
});
