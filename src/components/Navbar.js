
import avatar from "../assets/images/avatar.jpeg"
import "../assets/css/Navbar.css"


const Navbar = ({sidebarOpen, openSidebar}) =>{
    return (
        <nav className="navbar">
         <div className="nav-icon" onClick={() => openSidebar()}>
            <i className="fa fa-bars"></i>
         </div>
         <div className="navbar__left">
             <a href="/">Suscriptores</a>
             <a href="/">Video Managment</a>
             <a className="active_link" href="/">Admin</a>
         </div>
         <div className="navbar__right">
            <a href="/">
                <i className="fa fa-search"></i>
            </a>
            <a href="/">
                <i className="fa fa-clock-o"></i>
            </a>
            <a href="/">
                <img className="avatar" width="30" src={avatar} alt="avatar"></img>
            </a>
         </div>

        </nav>
    );
}


export default Navbar;