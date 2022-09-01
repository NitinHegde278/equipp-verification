import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Onboard from "../onboard.component";
describe("Onboard component", () => {
  const spy = jest.fn();

  beforeAll(() => {
    window.addEventListener("resize", spy);
  });

  test("Renders Onboard component completely", () => {
    render(<Onboard />, { wrapper: BrowserRouter });
    const textNode = screen.getByText(
      /Get tech when you want, As long as you want/i
    );
    expect(textNode).toBeInTheDocument();
  });

  test("Navigate to mobile screen", async () => {
    render(<Onboard />, { wrapper: BrowserRouter });
    const buttonNode = await screen.findByText(/CONTINUE/i);
    fireEvent.click(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });

  test("Window resize event is triggered less than 576px", () => {
    render(<Onboard />, { wrapper: BrowserRouter });
    window.innerWidth = 420;
    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
    expect(spy).toHaveBeenCalled();
    expect(window.innerWidth).toBe(420);
  });

  test("Window resize event is triggered between 576px and 860px", () => {
    render(<Onboard />, { wrapper: BrowserRouter });
    window.innerWidth = 700;
    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
    expect(spy).toHaveBeenCalled();
    expect(window.innerWidth).toBe(700);
  });
});
