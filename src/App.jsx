import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import TaskBoard from "./components/TaskBoard";
import { Suspense } from "react";
import { useState } from "react";

const fetchTickets = async () => {
  const res = await fetch("/ticketsData.json");
  return res.json();
};

const ticketData = fetchTickets();
const App = () => {
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);
  return (
    <div>
      <div className="mx-auto sm:max-w-xl md:max-w-full md:px-16 px-2">
        <Navbar />
        <Banner inProgress={inProgress} resolved={resolved} />
        <Suspense fallback={<div>Loading...</div>}>
          <TaskBoard setInProgress={setInProgress} setResolved={setResolved} ticketData={ticketData} />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default App;
