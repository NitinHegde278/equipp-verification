import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ORDERS } from "../../../../utils/constants";
import CheckoutCard from "../checkout-card.component";

describe("Checkout Card component", () => {
  test("Render Checkout Card component 3rd payment cycle", () => {
    render(<CheckoutCard order={ORDERS[0]} />, {
      wrapper: BrowserRouter,
    });
    const buttonNode = screen.getByTestId("closeButton");
    fireEvent.click(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });

  test("Render Checkout Card component 2nd payment cycle", () => {
    render(<CheckoutCard order={ORDERS[2]} />, {
      wrapper: BrowserRouter,
    });
    const buttonNode = screen.getByTestId("closeButton");
    fireEvent.click(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });

  test("Render Checkout Card component 1st payment cycle", () => {
    render(<CheckoutCard order={ORDERS[3]} />, {
      wrapper: BrowserRouter,
    });
    const buttonNode = screen.getByTestId("closeButton");
    fireEvent.click(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });
});
