import React from "react";
import { Form, Button } from "react-bootstrap";

const AlarmSettings = ({ settings, setSettings }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle settings update logic here if needed
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="highThreshold">
        <Form.Label>High Threshold</Form.Label>
        <Form.Control
          type="number"
          name="high"
          value={settings.high}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="hotspotThreshold">
        <Form.Label>Hotspot Threshold</Form.Label>
        <Form.Control
          type="number"
          name="hotspot"
          value={settings.hotspot}
          onChange={handleInputChange}
        />
      </Form.Group>
    </Form>
  );
};

export default AlarmSettings;
