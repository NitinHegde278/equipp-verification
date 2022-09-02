import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UserDataContext } from "../../../contexts/user-data.context";
import MobileCard from "../mobile-card.component";

describe("Mobile Card component", () => {
  const spy = jest.fn();

  beforeEach(() => {
    render(
      <UserDataContext.Provider value={{ changeInput: jest.fn() }}>
        <MobileCard handleTitle={spy} />
      </UserDataContext.Provider>,
      { wrapper: BrowserRouter }
    );
    expect(spy).toHaveBeenCalled();
  });

  test("Render Mobile card component", () => {
    const textNode = screen.getByText(/Enter Mobile Number to login/i);
    expect(textNode).toBeInTheDocument();
  });

  test("Handle the input change event", () => {
    const inputNode = screen.getByPlaceholderText("Enter mobile number");
    fireEvent.change(inputNode, {
      target: { name: "mobileNumber", value: "1234567891" },
    });
    expect(inputNode.value).toBe("1234567891");
  });

  test("Handle the submit event for old user to redirect to OTP page", () => {
    cleanup();
    render(
      <UserDataContext.Provider
        value={{ changeInput: jest.fn(), mobileNumber: "1234567891" }}
      >
        <MobileCard handleTitle={spy} />
      </UserDataContext.Provider>,
      { wrapper: BrowserRouter }
    );
    expect(spy).toHaveBeenCalled();
    const buttonNode = screen.getByText(/CONTINUE/i);
    fireEvent.submit(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });

  test("Handle the submit event for new user to redirect to NameEmail page", () => {
    cleanup();
    render(
      <UserDataContext.Provider
        value={{ changeInput: jest.fn(), mobileNumber: "9898989898" }}
      >
        <MobileCard handleTitle={spy} />
      </UserDataContext.Provider>,
      { wrapper: BrowserRouter }
    );
    expect(spy).toHaveBeenCalled();
    const buttonNode = screen.getByText(/CONTINUE/i);
    fireEvent.submit(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });
});
