import Company from "./Company";
import { fireEvent, render, screen } from "@testing-library/react";

//ARRANGE

//Group of related tests- test suite
describe("about component", () => {
  //TEST CASE #1
  it("should be available with in app", () => {
    //ASSERT
    expect(Company).toBeDefined();
  });
  //TEST CASE #2
  it("receives props and delivers them properly", () => {
    //ACT
    render(<Company name="Cognizant Technologies" />);
    const el = screen.getByTestId("cognizantEl");
    //ASSERT
    expect(el).toHaveTextContent("Cognizant Technologies");
  });
  //TEST CASE #3
  it("has welcome to my company's official website", () => {
    //ACT
    render(<Company />);
    const officialTextEl = screen.getByText(
      "Welcome to my Company's Official Website"
    );
    //ASSERT
    expect(officialTextEl).toBeInTheDocument();
  });
  //TEST CASE #4
  it("has css style with color green", () => {
    //ACT
    render(<Company />);
    const employeeNoEl = screen.getByTestId("employeesCountEl");
    //ASSERT
    expect(employeeNoEl).toHaveStyle("color:green");
  });
  //TEST CASE #5
  it("has a button with css class btn", () => {
    //ACT
    render(<Company />);
    const buttonClsEl = screen.getByRole("button");
    //ASSERT
    expect(buttonClsEl).toHaveClass("btn");
  });
  //TEST CASE #6
  it(`has an element with placeholder 'enter country'`, () => {
    //ACT
    render(<Company />);
    const countryInput = screen.getByPlaceholderText("Enter Country");
    //ASSERT
    expect(countryInput).toBeTruthy();
  });
  //TEST CASE #7
  it("should update country on onchange event", () => {
    //ACT
    render(<Company />);
    const countryInput = screen.getByPlaceholderText("Enter Country");
    //ASSERT
    fireEvent.change(countryInput, { target: { value: "canada" } });
    expect(countryInput.value).toBe("canada");
  });
});
