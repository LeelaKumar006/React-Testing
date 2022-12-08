import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Movies from "./Movies";

//ARRANGE

//Group of related tests- test suite
describe("movies component", () => {
  //TEST CASE #1
  it("has welcome to movies url", () => {
    //ACT
    render(<Movies />);
    const headingEl = screen.getByTestId("heading");
    //ASSERT
    expect(headingEl).toHaveTextContent("welcome to movies url");
  });
  //TEST CASE #2
  it("has recieved props", () => {
    //ACT
    render(<Movies url={"http://www.imdb.com"} />);
    const linkEl = screen.getByTestId("link");

    //ASSERT
    expect(linkEl).toHaveTextContent("http://www.imdb.com");
  });
  //TEST CASE #3
  it("will call handlesubscribe", () => {
    //ACT
    render(<Movies />);
    const subscribeBtnEl = screen.getByTestId("subscribeBtn");
    fireEvent.click(subscribeBtnEl);
    expect(subscribeBtnEl.textContent).toBe("Unsubscribe");

    fireEvent.click(subscribeBtnEl);
    expect(subscribeBtnEl.textContent).toBe("Subscribe");
  });
  //TEST CASE #4
  // Snapshot Testing
  it("should have right movies snapshot", () => {
    // to take snapshot we need a tool 'react-test-renderer' -- npm i react-test-renderer
    const snapshotTree = renderer
      .create(<Movies url={"http://www.imdb.com"} />)
      .toJSON();
    //console.log(snapshotTree);
    expect(snapshotTree).toMatchSnapshot();
  });
});
