import { render, screen } from "@testing-library/react";
import CounterDisplay from "../components/CounterDisplay";

describe("CounterDisplay", () => {
  it("should render the component", () => {
    const { container } = render(<CounterDisplay />);

    expect(container.getElementsByClassName("counterDisplay").length).toBe(1);
  });

  it("should render the total", async () => {
    render(<CounterDisplay total={2} />);

    expect(await screen.findByText("2")).toBeVisible();
  });
});
