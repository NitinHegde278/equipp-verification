import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { VerificationContext } from "../../../contexts/verification.context";
import Layout from "../../layout/layout.component";

describe("Bank Statement component", () => {
  test("Render bank statement component", async () => {
    render(
      <MemoryRouter
        initialEntries={["/verificationAnchor/student/bankStatement"]}
      >
        <Layout />
      </MemoryRouter>
    );

    const titleNode = await screen.findByText(/Upload your Bank Statement/i);
    expect(titleNode).toBeInTheDocument();
  });

  test("Render bank statement component type partnershipFirm", async () => {
    render(
      <MemoryRouter
        initialEntries={["/verificationAnchor/partnershipFirm/bankStatement"]}
      >
        <Layout />
      </MemoryRouter>
    );

    const titleNode = await screen.findByText(/Upload your Bank Statement/i);
    expect(titleNode).toBeInTheDocument();
  });

  test("Handle Bank file onClick", async () => {
    render(
      <VerificationContext.Provider
        value={{ changeInput: jest.fn(), bankFile: new File([], "") }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/student/bankStatement"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByTestId("bankUpload");
    act(() => {
      fireEvent.click(buttonNode);
    });
    expect(buttonNode).toBeInTheDocument();
  });

  test("Handle Bank file onChange", async () => {
    render(
      <VerificationContext.Provider
        value={{ changeInput: jest.fn(), bankFile: new File([], "") }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/student/bankStatement"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const inputNode = await screen.findByTestId("bankFile");
    await act(async () => {
      await waitFor(() => {
        userEvent.upload(
          inputNode,
          new File(["hello"], "hello.pdf", { type: "application/pdf" })
        );
      });
    });

    expect(inputNode.files[0].name).toStrictEqual("hello.pdf");
  });

  test("Handle Pwd selection onClick", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          bankFile: new File(["hello"], "hello.pdf", {
            type: "application/pdf",
          }),
          bankStatementPwd: 2,
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/student/bankStatement"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const noButtonNode = await screen.findByTestId("noPwd");
    act(() => {
      fireEvent.click(noButtonNode);
    });
    expect(noButtonNode).toBeInTheDocument();

    const yesButtonNode = await screen.findByTestId("yesPwd");
    act(() => {
      fireEvent.click(yesButtonNode);
    });
    expect(yesButtonNode).toBeInTheDocument();
  });

  test("Handle terms check box onChange", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          bankFile: new File([], ""),
          bankStatementTerms: false,
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/student/bankStatement"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const checkNode = await screen.findByTestId("bankStatementTerms");
    act(() => {
      fireEvent.click(checkNode, {
        target: {
          name: "bankStatementTerms",
          value: true,
          checked: true,
        },
      });
    });
    expect(Boolean(checkNode.value)).toBe(true);
  });

  test("Handle onSubmit redirect to verify bank", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          bankFile: new File(["hello"], "hello.pdf"),
          bankStatementPwd: 1,
          bankStatementTerms: true,
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/student/bankStatement"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByText(/CONTINUE/i);
    act(() => {
      fireEvent.submit(buttonNode);
      expect(buttonNode).toBeInTheDocument();
    });
  });

  test("Handle onSubmit redirect to verification Anchor (!workingProfessional)", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          bankFile: new File(["hello"], "hello.pdf"),
          bankStatementTerms: true,
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/student/bankStatement"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByText(/CONTINUE/i);
    act(() => {
      fireEvent.submit(buttonNode);
      expect(buttonNode).toBeInTheDocument();
    });
  });

  test("Handle onSubmit redirect to profession (workingProfessional)", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          bankFile: new File(["hello"], "hello.pdf"),
          bankStatementTerms: true,
        }}
      >
        <MemoryRouter
          initialEntries={[
            "/verificationAnchor/workingProfessional/bankStatement",
          ]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByText(/CONTINUE/i);
    act(() => {
      fireEvent.submit(buttonNode);
      expect(buttonNode).toBeInTheDocument();
    });
  });

  test("Handle onSubmit fail redirect to verification Anchor (!workingProfessional)", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          bankFile: new File([], "hello.pdf"),
          bankStatementTerms: false,
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/student/bankStatement"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByText(/CONTINUE/i);
    act(() => {
      fireEvent.submit(buttonNode);
      expect(buttonNode).toBeInTheDocument();
    });
  });

  test("Handle onSubmit fail redirect to profession (workingProfessional)", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          bankFile: new File([], "hello.pdf"),
          bankStatementTerms: false,
        }}
      >
        <MemoryRouter
          initialEntries={[
            "/verificationAnchor/workingProfessional/bankStatement",
          ]}
        >
          <Layout />
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
