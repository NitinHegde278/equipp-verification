import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { VerificationContext } from "../../../contexts/verification.context";
import Layout from "../../layout/layout.component";

describe("Selfie component", () => {
  beforeEach(() => {
    const mockGetUserMediaSuccess = jest.fn(async () => {
      return new Promise((resolve) => {
        resolve();
      });
    });
    Object.defineProperty(global.navigator, "mediaDevices", {
      value: {
        getUserMedia: mockGetUserMediaSuccess,
      },
      configurable: true,
    });
  });

  test("Render selfie component", async () => {
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          selfieImage: "",
        }}
      >
        <MemoryRouter initialEntries={["/verificationAnchor/student/selfie"]}>
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const textNode = await screen.findByText(/Take a Selfie/i);
    expect(textNode).toBeInTheDocument();
  });

  test("Handle web cam error", async () => {
    const mockGetUserMediaError = jest.fn(async () => {
      return new Promise((resolve, reject) => {
        reject(new Error("ERROR!"));
      });
    });
    Object.defineProperty(global.navigator, "mediaDevices", {
      value: {
        getUserMedia: mockGetUserMediaError,
      },
      configurable: true,
    });
    render(
      <VerificationContext.Provider
        value={{
          changeInput: jest.fn(),
          selfieImage: "",
        }}
      >
        <MemoryRouter initialEntries={["/verificationAnchor/student/selfie"]}>
          <Layout />
        </MemoryRouter>
      </VerificationContext.Provider>
    );

    const textNode = await screen.findByText(/Take a Selfie/i);
    expect(textNode).toBeInTheDocument();
  });

  //   test("Handle capture event", async () => {
  //     render(
  //       <VerificationContext.Provider
  //         value={{
  //           changeInput: jest.fn(),
  //           selfieImage: "",
  //         }}
  //       >
  //         <MemoryRouter initialEntries={["/verificationAnchor/student/selfie"]}>
  //           <Layout />
  //         </MemoryRouter>
  //       </VerificationContext.Provider>
  //     );

  //     const buttonNode = await screen.findByText(/CAPTURE/i);
  //     fireEvent.click(buttonNode);
  //     expect(buttonNode).toBeInTheDocument();
  //   });
});
