import { render, screen, fireEvent } from "@testing-library/react";
import Layout from "../layout.component";

test("renders learn react link", () => {
  render(<Layout />);
  const titleElement = screen.getByTestId("title");
  //   jest.spyOn(Layout, "handleTitle");
  expect(titleElement).toHaveBeenCalled("CHECKOUT");
});
