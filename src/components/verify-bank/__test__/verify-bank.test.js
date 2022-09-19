import { fireEvent, render, screen } from "@testing-library/react";
import { Suspense } from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router";
import { VerificationContext } from "../../../contexts/verification.context";
import Layout from "../../layout/layout.component";

describe("Verify Bank Component", () => {
  test("Render Verify Bank Component", async () => {
    render(
      <MemoryRouter
        initialEntries={["/verificationAnchor/workingProfessional/verifyBank"]}
      >
        <Layout />
      </MemoryRouter>
    );

    const titleNode = await screen.findByText(/Verify document password/i);
    expect(titleNode).toBeInTheDocument();
  });

  test("Handle password onChange", async () => {
    render(
      <VerificationContext.Provider
        value={{ changeInput: jest.fn(), bankStatementTerms: true }}
      >
        <MemoryRouter
          initialEntries={[
            "/verificationAnchor/workingProfessional/verifyBank",
          ]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const inputNode = await screen.findByPlaceholderText("Enter password");
    act(() => {
      fireEvent.change(inputNode, {
        target: {
          name: "verifyPassword",
          value: "test@123",
        },
      });
    });
    expect(inputNode.value).toStrictEqual("test@123");
  });

  test("Handle onSubmit success redirect to verification anchor (!workingProfessional)", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          verifyPassword: "test@123",
          bankStatementTerms: true,
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/student/verifyBank"]}
        >
          <Suspense fallback="Loading...">
            <Layout />
          </Suspense>
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByText("VERIFY");

    act(() => {
      fireEvent.submit(buttonNode);
    });

    expect(buttonNode).toBeInTheDocument();
  });

  test("Handle onSubmit fail redirect to profession (workingProfessional)", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          verifyPassword: "",
          bankStatementTerms: true,
        }}
      >
        <MemoryRouter
          initialEntries={[
            "/verificationAnchor/workingProfessional/verifyBank",
          ]}
        >
          <Suspense fallback="Loading...">
            <Layout />
          </Suspense>
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByText("VERIFY");

    act(() => {
      fireEvent.submit(buttonNode);
      expect(buttonNode).toBeInTheDocument();
    });
  });
});
