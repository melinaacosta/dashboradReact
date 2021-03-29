import React from 'react';
import "../assets/css/Sidebar.css"
import logo from "../assets/images/logo.svg"

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-resposive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>Full Design</h1>
                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
            </div>
            <h2 className="h2" >MNG</h2>
            <div className="sidebar__link">
                <i className="fa fa-user-secret"></i>
                <a href="#">Admin Managment</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-building-o"></i>
                <a href="#">Company Managment</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-wrench"></i>
                <a href="#">Employee Managment</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-archive"></i>
                <a href="#">Warehouse</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-handshake-o"></i>
                <a href="#">Contacts</a>
            </div>
            <h2 className="h2">LEAVE</h2>
            <div className="sidebar__link">
                <i className="fa fa-question"></i>
                <a href="#">Requests</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-sign-out"></i>
                <a href="#">Leave Policy</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-calendar-check-o"></i>
                <a href="#">Especials Days</a>
            </div>
            <div className="sidebar__logout">
                <i className="fa fa-calendar-power-off"></i>
                <a href="#">Log out</a>
            </div>

        </div>
    );
}

export default Sidebar;