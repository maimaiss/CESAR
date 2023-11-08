import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should render the component", () => {
    const { container } = render(<App />);

    expect(container.getElementsByClassName("counterDisplay").length).toBe(1);
  });

  it("should render the total", async () => {
    render(<App />);

    expect(await screen.findByText("0")).toBeVisible();
  });
});
