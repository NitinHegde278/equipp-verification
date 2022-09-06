import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CheckoutAddress from "../checkout-address.component";

describe("Checkout Address component", () => {
  const spy = jest.fn();
  test("Render Checkout Address component", () => {
    render(<CheckoutAddress handleTitle={spy} />, { wrapper: BrowserRouter });
    const textNode = screen.getByText(/Choose Address/i);
    expect(textNode).toBeInTheDocument();
  });
});
