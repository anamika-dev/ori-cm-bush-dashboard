import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AlarmSettings from "./AlarmSettings";

describe("AlarmSettings", () => {
  const settings = { high: 90, hotspot: 100 };
  const setSettings = jest.fn();

  test("renders alarm settings form", () => {
    render(<AlarmSettings settings={settings} setSettings={setSettings} />);
    expect(screen.getByLabelText(/High Threshold/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Hotspot Threshold/i)).toBeInTheDocument();
  });

  test("calls setSettings on input change", () => {
    render(<AlarmSettings settings={settings} setSettings={setSettings} />);
    fireEvent.change(screen.getByLabelText(/High Threshold/i), {
      target: { value: 95 },
    });
    fireEvent.change(screen.getByLabelText(/Hotspot Threshold/i), {
      target: { value: 105 },
    });
    expect(setSettings).toHaveBeenCalledWith({ high: 90, hotspot: 100 }); // Initial call
    expect(setSettings).toHaveBeenCalledWith(
      expect.objectContaining({ high: 95 })
    ); // Updated high
    expect(setSettings).toHaveBeenCalledWith(
      expect.objectContaining({ hotspot: 105 })
    ); // Updated hotspot
  });
});
