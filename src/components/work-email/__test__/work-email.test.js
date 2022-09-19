import { fireEvent, render, screen } from "@testing-library/react";
import { Suspense } from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router";
import { VerificationContext } from "../../../contexts/verification.context";
import Layout from "../../layout/layout.component";

describe("Work Email Component", () => {
  test("Render Work Email Component", async () => {
    render(
      <VerificationContext.Provider
        value={{
          bankFile: new File(["hello"], "hello.pdf"),
          bankStatementTerms: true,
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/workingProfessional/workEmail"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const titleNode = await screen.findByText(/Work Email/i);
    expect(titleNode).toBeInTheDocument();
  });

  test("Handle work email onChange", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          bankFile: new File(["hello"], "hello.pdf", {
            type: "application/pdf",
          }),
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/workingProfessional/workEmail"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const inputNode = await screen.findByPlaceholderText("Enter email id");
    act(() => {
      fireEvent.change(inputNode, {
        target: {
          name: "workEmail",
          value: "test@gmail.com",
        },
      });
    });
    expect(inputNode.value).toStrictEqual("test@gmail.com");
  });

  test("Handle onSubmit success redirect to verification Anchor", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          bankFile: new File(["hello"], "hello.pdf", {
            type: "application/pdf",
          }),
          workEmail: "test@gmail.com",
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/workingProfessional/workEmail"]}
        >
          <Suspense fallback="Loading...">
            <Layout />
          </Suspense>
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByText(/VERIFY/i);

    act(() => {
      fireEvent.submit(buttonNode);
    });

    expect(buttonNode).toBeInTheDocument();
  });

  test("Handle onSubmit fail redirect to verification Anchor", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          bankFile: new File(["hello"], "hello.pdf", {
            type: "application/pdf",
          }),
          workEmail: "",
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/workingProfessional/workEmail"]}
        >
          <Suspense fallback="Loading...">
            <Layout />
          </Suspense>
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByText(/VERIFY/i);

    act(() => {
      fireEvent.submit(buttonNode);
      expect(buttonNode).toBeInTheDocument();
    });
  });
});
