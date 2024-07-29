import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  test("renders Temperature Alarm Settings header", () => {
    render(<Dashboard />);
    const headerElement = screen.getByText(/Temperature Alarm Settings/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("renders the correct number of DeviceCards", () => {
    render(<Dashboard />);
    const deviceCards = screen.getAllByText(/Device ID/i);
    expect(deviceCards).toHaveLength(2);
  });

  test("updates device status based on alarm settings", () => {
    render(<Dashboard />);
    const deviceCards = screen.getAllByText(/Device ID/i);
    expect(deviceCards[0].parentElement.parentElement).toHaveStyle(
      "background-color: green"
    );
    expect(deviceCards[1].parentElement.parentElement).toHaveStyle(
      "background-color: green"
    );
  });
});
