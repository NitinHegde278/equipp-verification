import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Button from "../button.component";

describe("Button component", () => {
  test("Render button component", () => {
    render(<Button clickEvent={jest.fn()}>CONTINUE</Button>, {
      wrapper: BrowserRouter,
    });
    const buttonNode = screen.getByText(/CONTINUE/i);
    expect(buttonNode).toBeInTheDocument();
  });
});
