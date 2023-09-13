// TDD approach
import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });

  // test("renders a name", () => {
  //   render(<Greet name="Ala" />);
  //   const textElement = screen.getByText("Hello Ala");
  //   expect(textElement).toBeInTheDocument();
  // });
});
