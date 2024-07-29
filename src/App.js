import React from "react";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App" data-testid="app-container">
      <Dashboard />
    </div>
  );
}

export default App;
