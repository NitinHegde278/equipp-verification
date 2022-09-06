import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CheckoutSummary from "../checkout-summary.component";

describe("Checkout Summary component", () => {
  const spy = jest.fn();
  test("Render Checkout Summary Orders component", () => {
    render(<CheckoutSummary handleTitle={spy} />, { wrapper: BrowserRouter });
    const textNode = screen.getByText(
      /Documents for KYC and Verification will be asked/i
    );
    expect(textNode).toBeInTheDocument();
  });

  test("Handle Continue to Checkout Address event", () => {
    render(<CheckoutSummary handleTitle={spy} />, { wrapper: BrowserRouter });
    const buttonNode = screen.getByText(/CONTINUE/i);
    fireEvent.click(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });
});
