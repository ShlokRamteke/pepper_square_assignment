import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout";
import EventsGallery from "./components/EventsGallery";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<EventsGallery />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
