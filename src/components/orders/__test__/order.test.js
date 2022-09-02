import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ORDERS } from "../../../utils/constants";
import Orders from "../orders.component";

describe("Orders component", () => {
  const spy = jest.fn();
  test("Render Orders component", () => {
    render(<Orders handleTitle={spy} />, { wrapper: BrowserRouter });
    const textNode = screen.getByText(/Your Orders/i);
    expect(textNode).toBeInTheDocument();
  });

  test("Render No orders page", () => {
    ORDERS.length = 0;
    render(<Orders handleTitle={spy} />, { wrapper: BrowserRouter });
    const textNode = screen.getByText(
      /You have not placed any order with us./i
    );
    expect(textNode).toBeInTheDocument();
  });
});
