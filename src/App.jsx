import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AddRoom from "./components/room/AddRoom";
import ExistingRooms from "./components/room/ExistingRooms";
import EditRoom from "./components/room/EditRoom";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import RoomListing from "./components/room/RoomListing";

function App() {
  return (
    <>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
            <Route path="/add-room" element={<AddRoom />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/browse-all-rooms" element={<RoomListing />} />
          </Routes>
        </Router>
        <Footer />
      </main>
    </>
  );
}

export default App;
