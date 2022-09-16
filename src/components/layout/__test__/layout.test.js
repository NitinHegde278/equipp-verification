import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { OrdersContext } from "../../../contexts/orders.context";
import { ORDERS } from "../../../utils/constants";
import Layout from "../layout.component";

describe("Layout Component", () => {
  test("Render Mobile Component", async () => {
    render(
      <MemoryRouter initialEntries={["/mobile"]}>
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(
      /Enter Mobile Number to login/i
    );

    expect(titleElement).toBeInTheDocument();
  });

  test("Render Name-Email Component", async () => {
    render(
      <MemoryRouter initialEntries={["/nameEmail"]}>
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(/STUDENT/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("Render checkout-summary component", async () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: "/checkoutSummary", state: ORDERS[0] }]}
      >
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(/CHECKOUT/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("Render otp component", async () => {
    render(
      <MemoryRouter initialEntries={["/otp"]}>
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(/Hello!/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("Render orders component", async () => {
    render(
      <OrdersContext.Provider value={ORDERS}>
        <MemoryRouter initialEntries={["/orders"]}>
          <Layout />
        </MemoryRouter>
      </OrdersContext.Provider>
    );

    const titleElement = await screen.findByText(/Your Orders/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("Render checkout-address component", async () => {
    render(
      <MemoryRouter initialEntries={["/checkoutAddress"]}>
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(/Choose Address/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("Render verification-anchor component", async () => {
    render(
      <MemoryRouter initialEntries={["/verificationAnchor/student"]}>
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findAllByText(/Verification/i);
    expect(titleElement[0]).toBeInTheDocument();
  });

  test("Render choose-type component", async () => {
    render(
      <MemoryRouter initialEntries={["/chooseType"]}>
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(/Lets get you verified/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("Render no-page component", async () => {
    render(
      <MemoryRouter initialEntries={["/badUrl"]}>
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(/Error 404, page not found./i);
    expect(titleElement).toBeInTheDocument();
  });

  test("Logo navigation to home screen", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Layout />
      </MemoryRouter>
    );

    const imgNode = screen.getByAltText("Group logo");
    fireEvent.click(imgNode);
    expect(imgNode).toBeInTheDocument();
  });
});
