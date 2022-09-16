import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ORDERS } from "../../../../utils/constants";
import OrderCard from "../order-card.component";

describe("Order Card component", () => {
  test("Render order Card component", () => {
    render(<OrderCard order={ORDERS[0]} />, {
      wrapper: BrowserRouter,
    });
    const textNode = screen.getByText(/Payment Cycle/i);
    expect(textNode).toBeInTheDocument();
  });

  test("Handle show more/less button", () => {
    render(<OrderCard order={ORDERS[0]} />, {
      wrapper: BrowserRouter,
    });
    const buttonNode = screen.getByText(/Show More/i);
    fireEvent.click(buttonNode);
    expect(buttonNode).toHaveTextContent(/Show Less/i);
  });

  test("Handle Pay now button", () => {
    render(<OrderCard order={ORDERS[2]} />, {
      wrapper: BrowserRouter,
    });
    const buttonNode = screen.getByText(/PAY NOW/i);
    fireEvent.click(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });
});
