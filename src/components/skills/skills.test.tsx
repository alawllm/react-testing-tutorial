import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  //ensure the component renders correctly
  const skills = ["HTML", "CSS", "JavaScript"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("start learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });
  //find by role - async needed as findBy will be awaited
  //default timeOut 1000mls
  test("Start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const startLearning = await screen.findByRole("button", {
      name: "Start learning",
    });
    expect(startLearning).toBeInTheDocument();
  });
});
