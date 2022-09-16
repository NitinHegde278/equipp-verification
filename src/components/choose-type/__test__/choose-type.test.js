import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { VerificationContext } from "../../../contexts/verification.context";
import ChooseType from "../choose-type.component";

describe("Choose Type component", () => {
  const spy = jest.fn();
  test("Render Choose Type component", () => {
    render(<ChooseType handleTitle={spy} />, { wrapper: BrowserRouter });
    const textNode = screen.getByText(/Lets get you verified/i);
    expect(textNode).toBeInTheDocument();
  });

  test("Handle onClick type STUDENT", () => {
    render(<ChooseType handleTitle={spy} />, { wrapper: BrowserRouter });
    const buttonNode = screen.getByText(/STUDENT/i);
    fireEvent.click(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });

  test("Handle onClick type INDIVIDUAL PROFESSIONAL", () => {
    render(
      <BrowserRouter>
        <VerificationContext.Provider
          value={{ typeSelect: 2, changeInput: jest.fn() }}
        >
          <ChooseType handleTitle={spy} />
        </VerificationContext.Provider>
      </BrowserRouter>
    );
    const buttonNode = screen.getByText(/INDIVIDUAL PROFESSIONAL/i);
    fireEvent.click(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });

  test("Handle onClick type PARTNERSHIP FIRM", () => {
    render(
      <BrowserRouter>
        <VerificationContext.Provider
          value={{ typeSelect: 3, changeInput: jest.fn() }}
        >
          <ChooseType handleTitle={spy} />
        </VerificationContext.Provider>
      </BrowserRouter>
    );
    const buttonNode = screen.getByText(/PARTNERSHIP FIRM/i);
    fireEvent.click(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });

  test("Handle onClick type PVT LTD / PUBLIC / LLP", () => {
    render(
      <BrowserRouter>
        <VerificationContext.Provider
          value={{ typeSelect: 4, changeInput: jest.fn() }}
        >
          <ChooseType handleTitle={spy} />
        </VerificationContext.Provider>
      </BrowserRouter>
    );
    const buttonNode = screen.getByText(/PVT LTD \/ PUBLIC \/ LLP/i);
    fireEvent.click(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });

  test("Handle navigation to verification anchor screen", () => {
    render(<ChooseType handleTitle={spy} />, { wrapper: BrowserRouter });
    const buttonNode = screen.getByText(/CONTINUE/i);
    fireEvent.click(buttonNode);
    expect(buttonNode).toBeInTheDocument();
  });
});
