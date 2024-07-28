import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import DeviceCard from "./DeviceCard";
import AlarmSettings from "./AlarmSettings";

const DashboardContainer = styled(Container)`
  margin-top: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #525659;
  padding: 10px;
  color: white;
`;

const Dashboard = () => {
  const [devices, setDevices] = useState([
    {
      id: 1,
      temp1: 24,
      temp2: 25,
      temp3: 24,
      status: "green",
      location: "GURGAON",
    },
    {
      id: 2,
      temp1: 28,
      temp2: 29,
      temp3: 28,
      status: "green",
      location: "OKKVA DT",
    },
  ]);

  const [alarmSettings, setAlarmSettings] = useState({
    high: 90,
    hotspot: 100,
  });

  useEffect(() => {
    const updatedDevices = devices.map((device) => {
      const status = getStatus(device, alarmSettings);
      return { ...device, status };
    });
    setDevices(updatedDevices);
  }, [alarmSettings]);

  const getStatus = (device, settings) => {
    const { temp1, temp2, temp3 } = device;
    if (
      temp1 > settings.hotspot ||
      temp2 > settings.hotspot ||
      temp3 > settings.hotspot
    ) {
      return "red";
    }
    if (
      temp1 > settings.high ||
      temp2 > settings.high ||
      temp3 > settings.high
    ) {
      return "yellow";
    }
    return "green";
  };

  return (
    <DashboardContainer>
      <Header>
        <div>Temperature Alarm Settings (deg C)</div>
        <div>
          <Button variant="danger">Hotspot above 100 deg C</Button>
          <Button variant="warning">High above 90 deg C</Button>
          <Button variant="secondary">Change</Button>
        </div>
      </Header>
      <Row>
        {devices.map((device) => (
          <Col key={device.id} sm={6}>
            <DeviceCard device={device} />
          </Col>
        ))}
      </Row>
      <AlarmSettings settings={alarmSettings} setSettings={setAlarmSettings} />
    </DashboardContainer>
  );
};

export default Dashboard;
