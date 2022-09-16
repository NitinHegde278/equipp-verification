import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { VerificationContext } from "../../../contexts/verification.context";
import Layout from "../../layout/layout.component";
describe("Pan Details Component", () => {
  test("Render Pan Details Component", async () => {
    render(
      <MemoryRouter initialEntries={["/verificationAnchor/student/panDetails"]}>
        <Layout />
      </MemoryRouter>
    );

    const titleNode = await screen.findByText(/Enter PAN & Mobile Number/i);
    expect(titleNode).toBeInTheDocument();
  });

  test("Handle Pan file onClick", async () => {
    render(
      <VerificationContext.Provider
        value={{ changeInput: jest.fn(), panFile: new File([], "") }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/student/panDetails"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const buttonNode = await screen.findByTestId("panUpload");
    act(() => {
      fireEvent.click(buttonNode);
    });
    expect(buttonNode).toBeInTheDocument();
  });

  test("Handle Pan file onChange", async () => {
    render(
      <VerificationContext.Provider
        value={{ changeInput: jest.fn(), panFile: new File([], "") }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/student/panDetails"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const inputNode = await screen.findByTestId("panFile");
    await act(async () => {
      await waitFor(() => {
        userEvent.upload(
          inputNode,
          new File(["hello"], "hello.png", { type: "image/png" })
        );
      });
    });

    expect(inputNode.files[0].name).toStrictEqual("hello.png");

    await act(async () => {
      await waitFor(() => {
        userEvent.upload(
          inputNode,
          new File([], "hello.png", { type: "image/png" })
        );
      });
    });
    expect(inputNode.files[0].size).toStrictEqual(0);
  });

  test("Handle mobileNumber onChange", async () => {
    render(
      <VerificationContext.Provider
        value={{ changeInput: jest.fn(), panFile: new File([], "") }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/student/panDetails"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const inputNode = await screen.findByPlaceholderText(
      "Enter mobile number linked to PAN Card"
    );
    act(() => {
      fireEvent.change(inputNode, {
        target: { name: "panMobileNumber", value: "1234567899" },
      });
    });

    expect(inputNode.value).toStrictEqual("1234567899");
  });

  test("Handle redirect to coPanGst if refreshed", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          panFile: new File([], ""),
          coPanGstStatus: "pending",
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/partnershipFirm/panDetails"]}
        >
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const inputNode = await screen.findByPlaceholderText(
      "Enter mobile number linked to PAN Card"
    );
    expect(inputNode).toBeInTheDocument();
  });

  test("Handle onSubmit redirect success", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          panFile: new File(["hello"], "hello.png"),
          panMobileNumber: "1234567899",
          panFileError: false,
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/student/panDetails"]}
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

  test("Handle onSubmit redirect error", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          panFile: new File([], ""),
          panMobileNumber: "12345899",
          panFileError: true,
        }}
      >
        <MemoryRouter
          initialEntries={["/verificationAnchor/student/panDetails"]}
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
