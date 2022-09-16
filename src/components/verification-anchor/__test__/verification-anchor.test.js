import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { Suspense } from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter, Route, Routes } from "react-router";
import Layout from "../../layout/layout.component";

describe("Verification Anchor Component", () => {
  test("Render Verification Card Component", async () => {
    render(
      <MemoryRouter initialEntries={["/verificationAnchor/partnershipFirm"]}>
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findAllByText(/Verification/i);

    expect(titleElement[0]).toBeInTheDocument();
  });

  test("Render Pan details Component", async () => {
    render(
      <MemoryRouter
        initialEntries={["/verificationAnchor/workingProfessional/panDetails"]}
      >
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(/Enter PAN & Mobile Number/i);

    expect(titleElement).toBeInTheDocument();
  });

  test("Render Selfie Component", async () => {
    const mockGetUserMedia = jest.fn(async () => {
      return new Promise((resolve) => {
        resolve();
      });
    });

    Object.defineProperty(global.navigator, "mediaDevices", {
      value: {
        getUserMedia: mockGetUserMedia,
      },
    });
    render(
      <MemoryRouter
        initialEntries={["/verificationAnchor/workingProfessional/selfie"]}
      >
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(/Take a Selfie/i);

    expect(titleElement).toBeInTheDocument();
  });

  test("Render Bank Statement Component", async () => {
    render(
      <MemoryRouter
        initialEntries={["/verificationAnchor/pvtLlpPublic/bankStatement"]}
      >
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(/Upload your Bank Statement/i);

    expect(titleElement).toBeInTheDocument();
  });

  test("Render Verify Bank Component", async () => {
    render(
      <MemoryRouter
        initialEntries={["/verificationAnchor/pvtLlpPublic/verifyBank"]}
      >
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(/Verify document password/i);

    expect(titleElement).toBeInTheDocument();
  });

  test("Render Profession Component", async () => {
    render(
      <MemoryRouter
        initialEntries={["/verificationAnchor/workingProfessional/profession"]}
      >
        <Suspense fallback="loading...">
          <Layout />
        </Suspense>
      </MemoryRouter>
    );
    const titleElement = await screen.findByText(/Error 404, page not found./i);

    expect(titleElement).toBeInTheDocument();
  });

  test("Render Work email Component", async () => {
    render(
      <MemoryRouter
        initialEntries={["/verificationAnchor/workingProfessional/workEmail"]}
      >
        <Suspense fallback="loading...">
          <Layout />
        </Suspense>
      </MemoryRouter>
    );
    const titleElement = await screen.findByText(/Work Email/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("Render Co PAN GST Component", async () => {
    render(
      <MemoryRouter
        initialEntries={["/verificationAnchor/partnershipFirm/coPanGst"]}
      >
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(/Enter Company PAN & GST/i);

    expect(titleElement).toBeInTheDocument();
  });

  test("Render Director DIN Component", async () => {
    render(
      <MemoryRouter
        initialEntries={["/verificationAnchor/pvtLlpPublic/directorDin"]}
      >
        <Suspense fallback="loading...">
          <Layout />
        </Suspense>
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(/Error 404, page not found./i);

    expect(titleElement).toBeInTheDocument();
  });

  test("Render No Page Component", async () => {
    render(
      <MemoryRouter initialEntries={["/verificationAnchor/working/badRoute"]}>
        <Layout />
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(/Error 404, page not found./i);

    expect(titleElement).toBeInTheDocument();
  });
});
