import React from "react";
import { render, screen } from "@testing-library/react";
import DeviceCard from "./DeviceCard";

describe("DeviceCard", () => {
  const device = {
    id: 1,
    temp1: 24,
    temp2: 25,
    temp3: 24,
    status: "green",
    location: "GURGAON",
  };

  test("renders device information correctly", () => {
    render(<DeviceCard device={device} />);
    expect(screen.getByText(/Device ID: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Temp 1: 24/i)).toBeInTheDocument();
    expect(screen.getByText(/Temp 2: 25/i)).toBeInTheDocument();
    expect(screen.getByText(/Temp 3: 24/i)).toBeInTheDocument();
    expect(screen.getByText(/Location: GURGAON/i)).toBeInTheDocument();
  });

  test("applies the correct background color based on status", () => {
    render(<DeviceCard device={device} />);
    expect(
      screen.getByText(/Device ID: 1/i).parentElement.parentElement
    ).toHaveStyle("background-color: green");
  });
});
