
import React, { useState } from "react";
import './assets/css/App.css';

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Charts from "./components/Charts";
import Main from "./components/Main";
// import Index from "./components/Index"
// import Bienvenida from "./components/Bienvenida"


const App = () => {
  const [sidebarOpen,setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
     <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
     {/* <h1>App Dashboard</h1> */}
     <Main/>
     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
     
    </div>
  );
}

export default App;
