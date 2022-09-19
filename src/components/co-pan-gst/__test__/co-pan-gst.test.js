import { fireEvent, render, screen } from "@testing-library/react";
import { Suspense } from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router";
import { VerificationContext } from "../../../contexts/verification.context";
import Layout from "../../layout/layout.component";

describe("Co PAN GST Component", () => {
  test("Render Co PAN GST Component", async () => {
    render(
      <MemoryRouter
        initialEntries={["/verificationAnchor/partnershipFirm/coPanGst"]}
      >
        <Layout />
      </MemoryRouter>
    );

    const titleNode = await screen.findByText(/Enter Company PAN & GST/i);
    expect(titleNode).toBeInTheDocument();
  });

  test("Handle coPan onChange", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/partnershipFirm/coPanGst"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const inputNode = await screen.findByPlaceholderText(
      "Enter company PAN card number"
    );
    act(() => {
      fireEvent.change(inputNode, {
        target: {
          name: "coPan",
          value: "abcde12345",
        },
      });
    });
    expect(inputNode.value).toStrictEqual("abcde12345");
  });

  test("Handle coPan onChange", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/partnershipFirm/coPanGst"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const inputNode = await screen.findByPlaceholderText(
      "Enter company GST number"
    );
    act(() => {
      fireEvent.change(inputNode, {
        target: {
          name: "coGst",
          value: "abcde12345",
        },
      });
    });
    expect(inputNode.value).toStrictEqual("abcde12345");
  });

  test("Handle onSubmit success redirect to Pan details", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          coPan: "abcde12345",
          coGst: "abcde12345",
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/partnershipFirm/coPanGst"]}
        >
          <Suspense fallback="Loading...">
            <Layout />
          </Suspense>
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByText(/CONTINUE/i);

    act(() => {
      fireEvent.submit(buttonNode);
    });

    expect(buttonNode).toBeInTheDocument();
  });

  test("Handle onSubmit success redirect to Director DIN (pvtLlpPublic) ", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          coPan: "abcde12345",
          coGst: "abcde12345",
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/pvtLlpPublic/coPanGst"]}
        >
          <Suspense fallback="Loading...">
            <Layout />
          </Suspense>
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByText(/CONTINUE/i);

    act(() => {
      fireEvent.submit(buttonNode);
      expect(buttonNode).toBeInTheDocument();
    });
  });

  test("Handle onSubmit fail redirect to Director DIN (pvtLlpPublic) ", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          coPan: "",
          coGst: "",
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/partnershipFirm/coPanGst"]}
        >
          <Suspense fallback="Loading...">
            <Layout />
          </Suspense>
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByText(/CONTINUE/i);

    act(() => {
      fireEvent.submit(buttonNode);
      expect(buttonNode).toBeInTheDocument();
    });
  });

  test("Handle onSubmit fail redirect to Director DIN (pvtLlpPublic) ", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          coPan: "",
          coGst: "",
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/pvtLlpPublic/coPanGst"]}
        >
          <Suspense fallback="Loading...">
            <Layout />
          </Suspense>
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByText(/CONTINUE/i);

    act(() => {
      fireEvent.submit(buttonNode);
      expect(buttonNode).toBeInTheDocument();
    });
  });
});
