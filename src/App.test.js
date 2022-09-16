import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders App with default route Onboard", async () => {
  render(<App />, { wrapper: BrowserRouter });
  const textNode = await screen.findByText(
    /Get tech when you want, As long as you want/i
  );
  expect(textNode).toBeInTheDocument();
});

test("renders App component with navigation to layout", async () => {
  render(
    <MemoryRouter initialEntries={["/layout/mobile"]}>
      <App />
    </MemoryRouter>
  );
  const textNode = await screen.findByText(/Enter Mobile Number to login/i);
  expect(textNode).toBeInTheDocument();
});

test("landing on a bad page", async () => {
  const badRoute = "/some/bad/route";

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );
  const textNode = await screen.findByText(/Error 404, page not found./i);
  // verify navigation to "no match" route
  expect(textNode).toBeInTheDocument();
});
