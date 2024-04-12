import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page Test Case", () => {

  // beforeAll(() => {
  //   console.log("Before All")
  // })

  // beforeEach(() => {
  //   console.log("Before Each")
  // })
  
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load Button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input Boxs in the Contact Component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length);
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });

});
