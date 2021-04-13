
import React, { useState } from "react";
import './assets/css/App.css';

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import List from "./components/List";
// import Index from "./components/Index"
// import Bienvenida from "./components/Bienvenida"


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
     <Main nombre="Melina" />
     
     <List/>
    </div>
  );
}

export default App;
