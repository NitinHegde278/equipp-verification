import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { OrdersContext } from "../../../contexts/orders.context";
import { ORDERS } from "../../../utils/constants";
import Orders from "../orders.component";

describe("Orders component", () => {
  const spy = jest.fn();
  test("Render Orders component", async () => {
    render(
      <OrdersContext.Provider value={ORDERS}>
        <Orders handleTitle={spy} />
      </OrdersContext.Provider>,
      { wrapper: BrowserRouter }
    );
    const textNode = await screen.findByText(/Your Orders/i);
    expect(textNode).toBeInTheDocument();
  });

  test("Render No orders page", () => {
    render(<Orders handleTitle={spy} />, { wrapper: BrowserRouter });
    const textNode = screen.getByText(
      /You have not placed any order with us./i
    );
    expect(textNode).toBeInTheDocument();
  });
});
