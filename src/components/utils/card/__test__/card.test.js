import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "../card.component";

describe("Card component", () => {
  test("Render Card component", () => {
    render(<Card title="Your Orders" />, {
      wrapper: BrowserRouter,
    });
    const textNode = screen.getByText(/Your Orders/i);
    expect(textNode).toBeInTheDocument();
  });
});
