import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UserDataContext } from "../../../contexts/user-data.context";
import NameEmailCard from "../name-email-card.component";

describe("Name Email Card component", () => {
  const spy = jest.fn();

  beforeEach(() => {
    render(
      <UserDataContext.Provider
        value={{
          changeInput: jest.fn(),
          mobileNumber: "1234567899",
          newUser: true,
        }}
      >
        <NameEmailCard handleTitle={spy} />
      </UserDataContext.Provider>,
      { wrapper: BrowserRouter }
    );
    expect(spy).toHaveBeenCalled();
  });

  test("Render Name Email card component", () => {
    const textNode = screen.getByText(/Enter Name & Email Id/i);
    expect(textNode).toBeInTheDocument();
  });

  test("Handle the input change event for fullName", () => {
    const inputNode = screen.getByPlaceholderText("Enter full name");
    fireEvent.change(inputNode, {
      target: { name: "fullName", value: "Nitin" },
    });
    expect(inputNode.value).toBe("Nitin");
  });

  test("Handle the input change event for emailId", () => {
    const inputNode = screen.getByPlaceholderText("Enter Email ID");
    fireEvent.change(inputNode, {
      target: { name: "emailId", value: "test@gmail.com" },
    });
    expect(inputNode.value).toBe("test@gmail.com");
  });

  test("Handle the submit event for user to redirect to OTP page", () => {
    const buttonNode = screen.getByText(/CONTINUE/i);
    fireEvent.submit(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });
});
