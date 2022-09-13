import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NoPage from "../no-page.component";

describe("No Page Component", () => {
  test("Render no page component", () => {
    render(<NoPage />, { wrapper: BrowserRouter });
    const textNode = screen.getByText(/Error 404, page not found./i);
    expect(textNode).toBeInTheDocument();
  });
});
