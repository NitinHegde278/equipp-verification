import { fireEvent, render, screen } from "@testing-library/react";
import { Suspense } from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router";
import { VerificationContext } from "../../../contexts/verification.context";
import Layout from "../../layout/layout.component";

describe("Profession Component", () => {
  test("Render Profession Component", async () => {
    render(
      <VerificationContext.Provider
        value={{
          professionSelect: 2,
          bankFile: new File(["hello"], "hello.pdf"),
        }}
      >
        <MemoryRouter
          initialEntries={[
            "/verificationAnchor/workingProfessional/profession",
          ]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const titleNode = await screen.findByText(/Choose type/i);
    expect(titleNode).toBeInTheDocument();
  });

  test("Handle profession selection onClick", async () => {
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
          initialEntries={[
            "/verificationAnchor/workingProfessional/profession",
          ]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const freelanceButton = await screen.findByText("FREELANCER");
    act(() => {
      fireEvent.click(freelanceButton);
    });
    expect(freelanceButton).toBeInTheDocument();

    const salariedButton = await screen.findByText("SALARIED");
    act(() => {
      fireEvent.click(salariedButton);
    });
    expect(salariedButton).toBeInTheDocument();
  });

  test("Handle onSubmit success redirect to work Email", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          bankFile: new File(["hello"], "hello.pdf", {
            type: "application/pdf",
          }),
          professionSelect: 2,
        }}
      >
        <MemoryRouter
          initialEntries={[
            "/verificationAnchor/workingProfessional/profession",
          ]}
        >
          <Suspense fallback="Loading...">
            <Layout />
          </Suspense>
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByText(/CONTINUE/i);

    act(() => {
      fireEvent.click(buttonNode);
    });

    expect(buttonNode).toBeInTheDocument();
  });
  test("Handle onSubmit success redirect to verification Anchor", async () => {
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
          initialEntries={[
            "/verificationAnchor/workingProfessional/profession",
          ]}
        >
          <Suspense fallback="Loading...">
            <Layout />
          </Suspense>
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByText(/CONTINUE/i);

    act(() => {
      fireEvent.click(buttonNode);
      expect(buttonNode).toBeInTheDocument();
    });
  });
});
