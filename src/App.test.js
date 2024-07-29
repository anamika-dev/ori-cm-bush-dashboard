import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByTestId } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId("app-container")).toBeInTheDocument();
});
