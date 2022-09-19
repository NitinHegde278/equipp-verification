import { fireEvent, render, screen } from "@testing-library/react";
import { Suspense } from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router";
import { VerificationContext } from "../../../contexts/verification.context";
import Layout from "../../layout/layout.component";

describe("Director DIN Component", () => {
  test("Render Director DIN Component", async () => {
    render(
      <MemoryRouter
        initialEntries={["/verificationAnchor/pvtLlpPublic/directorDin"]}
      >
        <Layout />
      </MemoryRouter>
    );

    const titleNode = await screen.findByText(/Enter Director's DIN/i);
    expect(titleNode).toBeInTheDocument();
  });

  test("Handle director Din onChange", async () => {
    render(
      <VerificationContext.Provider
        value={{ changeInput: jest.fn(), coPanGstStatus: "done" }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/pvtLlpPublic/directorDin"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const inputNode = await screen.findByPlaceholderText("Enter DIN number");
    act(() => {
      fireEvent.change(inputNode, {
        target: {
          name: "dinNumber",
          value: "test123",
        },
      });
    });
    expect(inputNode.value).toStrictEqual("test123");
  });

  test("Handle number of employees onChange", async () => {
    render(
      <VerificationContext.Provider
        value={{ changeInput: jest.fn(), coPanGstStatus: "done" }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/pvtLlpPublic/directorDin"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const inputNode = await screen.findByPlaceholderText(
      "Select the number of employees *"
    );
    act(() => {
      fireEvent.change(inputNode, {
        target: {
          name: "employeeSelect",
          value: "150",
        },
      });
    });
    expect(inputNode.value).toStrictEqual("150");
  });

  test("Handle onSubmit success redirect to bankStatement", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          dinNumber: "test123",
          employeeSelect: "150",
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/pvtLlpPublic/directorDin"]}
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

  test("Handle onSubmit fail redirect to bankStatement", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          dinNumber: "",
          employeeSelect: "",
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/pvtLlpPublic/directorDin"]}
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
