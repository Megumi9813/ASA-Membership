import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AsaLogo from '../assets/AsaLogo.png'
import { Link } from 'react-router-dom'
// import Avatar from '@mui/material/Avatar';
// import { useUserContext } from "../contexts/userContext";

// function openSidebar() {
//     document.body.classList += " sideBar-open";
// }
// export const closeSidebar = () =>  {
//     document.body.classList.remove("sideBar-open");
// }

function Nav() {
    // const { user, logoutUser } = useUserContext();

    const [open, setOpen] = useState(false)

  return (
    <nav className='dashboard_nav'>
         <div className="dashboard_nav-content">
            <div className='flex align-center'>
                <button className='btn btn-burger'>
                    {/* <FontAwesomeIcon icon="fa-bars" className='logo-burger burger-open' onClick={openSidebar}/>
                    <FontAwesomeIcon icon="fa-bars-staggered" className='logo-burger burger-close' onClick={closeSidebar}/> */}
                </button>
                <Link to="/">
                    <figure className='logo'>
                        <img src={AsaLogo} alt="" />
                    </figure>
                </Link>
            </div>
            <div className="nav_links">
                            <button className='btn btn_secondary'>
                                <Link to='/account' >
                                    Login
                                </Link>
                            </button>
                            <button className='btn btn_primary'>
                                <Link to="/account">
                                    Register
                                </Link>
                            </button>
            </div>
         </div>
    </nav>
  )
}

export default Nav

