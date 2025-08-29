import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutComponents from "./components/Layout";
import Dashboard from "./pages/dashboard";
import SchedulePage from "./pages/schedule";
import RecordingsPage from "./pages/recordings";
import AssignmentsPage from "./pages/assignments";

function App() {
  return (
    <Router>
      <LayoutComponents>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/recordings" element={<RecordingsPage />} />
          <Route path="/assignments" element={<AssignmentsPage />} />
        </Routes>
      </LayoutComponents>
    </Router>
  );
}

export default App;
