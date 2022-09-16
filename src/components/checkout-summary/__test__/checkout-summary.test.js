import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { UserDataContext } from "../../../contexts/user-data.context";
import { ORDERS } from "../../../utils/constants";
import CheckoutSummary from "../checkout-summary.component";

describe("Checkout Summary component", () => {
  const spy = jest.fn();
  test("Render Checkout Summary Orders component", async () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: "/checkoutSummary", state: ORDERS[0] }]}
      >
        <CheckoutSummary handleTitle={spy} />
      </MemoryRouter>
    );
    const textNode = await screen.findByText(
      /Documents for KYC and Verification will be asked/i
    );
    expect(textNode).toBeInTheDocument();
  });

  test("Handle Continue to Checkout Address event", async () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: "/checkoutSummary", state: ORDERS[0] }]}
      >
        <CheckoutSummary handleTitle={spy} />
      </MemoryRouter>
    );
    const buttonNode = await screen.findByText(/CONTINUE/i);
    // fireEvent.click(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });
});
