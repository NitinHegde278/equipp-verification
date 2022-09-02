import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { UserDataContext } from "../../../contexts/user-data.context";
import OtpCard from "../otp-card.component";

describe("OTP Card component", () => {
  const spy = jest.fn();

  beforeEach(() => {
    render(
      <UserDataContext.Provider
        value={{
          changeInput: jest.fn(),
          fullName: "Nitin Hegde",
          mobileNumber: "1234567891",
          emailId: "test123@gmail.com",
          otp: "123456",
        }}
      >
        <OtpCard handleTitle={spy} />
      </UserDataContext.Provider>,
      { wrapper: BrowserRouter }
    );
    expect(spy).toHaveBeenCalled();
  });

  test("Render OTP card component", () => {
    const textNode = screen.getByText(/Please enter the OTP sent to/i);
    expect(textNode).toBeInTheDocument();
  });

  test("Handle the input change event for otp", () => {
    const inputNode = screen.getAllByRole("textbox", { name: "" });
    fireEvent.change(inputNode[0], {
      target: { value: "2" },
    });
    expect(inputNode[0].value).toBe("2");
  });

  test("Handle the correct OTP submit event for user to redirect to orders page", () => {
    const inputNode = screen.getAllByRole("textbox", { name: "" });
    inputNode.forEach((input, index) => {
      fireEvent.change(inputNode[index], {
        target: { value: index + 1 },
      });
    });
    const buttonNode = screen.getByText(/CONTINUE/i);
    fireEvent.submit(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });

  test("Handle the incorrect OTP submit event ", () => {
    const buttonNode = screen.getByText(/CONTINUE/i);
    fireEvent.submit(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });

  test("Event listener on keyup for OTP fields", () => {
    const callback = jest.fn();
    const inputNode = screen.getAllByRole("textbox", { name: "" });
    inputNode.forEach((input, index) => {
      input.addEventListener("keyup", callback);
      fireEvent.change(input, { target: { value: index + 1 } });
      act(() => {
        input.dispatchEvent(new Event("keyup"));
      });
      expect(callback).toHaveBeenCalled();
    });
  });
});
