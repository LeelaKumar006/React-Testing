import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeSwitcher from "./ThemeSwitcher";

//ARRANGE

//Group of related tests- test suite
describe("themeSwitcher component", () => {
  //TEST CASE #1
  it("has toggling theme button", () => {
    //ACT
    render(<ThemeSwitcher />);
    const btnEl = screen.getByText(/switch theme/i);
    const paraEl = screen.getByText(/Current Theme/i);
    userEvent.click(btnEl);
    expect(paraEl).toHaveTextContent(/dark/i);
  });
});
