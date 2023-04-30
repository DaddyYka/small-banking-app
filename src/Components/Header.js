import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { FiUploadCloud,FiDownloadCloud,FiLogOut } from 'react-icons/fi';
import { MdOutlinePrivateConnectivity } from 'react-icons/md';
import { TbFileSpreadsheet } from 'react-icons/tb';

const Header = (props) => {

  const navigate = useNavigate();

  const handleLogout=(event)=>{
    event.preventDefault();

    localStorage.removeItem("LoggedIn");
    navigate("/")
  }

  return (
    <>
    <div className="row head justify-content-center">
      <div className="sub-head mt-3 ">
         <h3 className='mb-3'>ABC BANK</h3>
      </div>
    </div>
      <div className="row head">
        <div className=''>
          <nav className="navbar navbar-expand-md">
            <div className="container">
              <button
                className="navbar-toggler mt-3 mb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
                <div>
                  <ul className="menu-list navbar-nav ">
                    <li className="nav-item ">
                      <NavLink to="/home" className="nav-link ">
                        <BiHomeAlt className='m-1'/>
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink to="/deposit" className="nav-link ">
                        <FiUploadCloud className='m-1'/>
                        Deposit
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink to="/withdraw" className="nav-link">
                        <FiDownloadCloud className='m-1'/>
                        Withdraw
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink to="/transfer" className="nav-link">
                        <MdOutlinePrivateConnectivity className='m-1'/>
                        Transfer
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink to="/statement" className="nav-link">
                        <TbFileSpreadsheet className='m-1'/>
                        Statement
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink to="/" className="nav-link" onClick={handleLogout}>
                        <FiLogOut className='m-1'/>
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
};

export default Header