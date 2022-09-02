import { render, screen } from "@testing-library/react";
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
});
