import {render, screen} from '@testing-library/react'
import Practice from '.'

describe("That header, subtitle and paragraph, are rendered correctly", () => {
  beforeEach(() => {
    render(<Practice />);
  });

  test("Test if heading is rendering", () => {
    const headerText = screen.getByTestId("increase-head");
    expect(headerText).toHaveTextContent("How to increase Clicking Speed!");
  });

  test("Test if practice heading and paragraph is rendering", () => {
    const practiceHeader = screen.getByTestId("practice-head");
    const paraText = screen.getByTestId("practice-p");

    expect(practiceHeader).toHaveTextContent("Practice!");
    expect(paraText).toHaveTextContent("Practice your clicking and use this program to see your progress.");
  });

  test("Test if master heading and paragraph is rendering", () => {
    const headerText = screen.getByTestId("master-head");
    const text = screen.getByTestId("learn-p");
    
    expect(headerText).toHaveTextContent("Master Clicking Techniques!");
    expect(text).toHaveTextContent("Learn new clicking techniques will improve your test score");
  });
});
