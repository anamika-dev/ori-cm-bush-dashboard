import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  margin: 10px 0;
  background-color: ${(props) => {
    switch (props.status) {
      case "red":
        return "red";
      case "yellow":
        return "yellow";
      default:
        return "green";
    }
  }};
  color: white;
`;

const DeviceCard = ({ device }) => {
  const { id, temp1, temp2, temp3, status, location } = device;

  return (
    <StyledCard status={status}>
      <Card.Body>
        <Card.Title>ORI-CM-BUSH ZONE 000</Card.Title>
        <Card.Text>Device ID: {id}</Card.Text>
        <Card.Text>Temp 1: {temp1}°C</Card.Text>
        <Card.Text>Temp 2: {temp2}°C</Card.Text>
        <Card.Text>Temp 3: {temp3}°C</Card.Text>
        <Card.Text>Location: {location}</Card.Text>
      </Card.Body>
    </StyledCard>
  );
};

export default DeviceCard;
