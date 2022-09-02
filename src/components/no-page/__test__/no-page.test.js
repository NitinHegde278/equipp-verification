import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NoPage from "../no-page.component";

describe("No Page Component", () => {
  test("Render no page component", () => {
    render(<NoPage />, { wrapper: BrowserRouter });
    const textNode = screen.getByText(/404/i);
    expect(textNode).toBeInTheDocument();
  });
});
