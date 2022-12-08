import { render, screen } from "@testing-library/react";
import App from "./App";
// ARRANGE
xdescribe("app component", () => {
  //TEST CASE
  it("should check welocme to unit testing text", () => {
    //ACT
    render(<App />);
    const successEl = screen.getByText(/welcome to unit testing !/i);
    //ASSERT
    expect(successEl).toBeInTheDocument();
  });
  //TEST CASE
  it("should be available with in app", () => {
    expect(App).toBeTruthy();
  });
});
