import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faAddressCard,
  faAddressBook,
  faHandsHelping,
  faQuestionCircle,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/dyi.png';
import { Link } from 'react-router-dom';
//import { Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark w-100">
      <Link className="navbar-link" to="/">
        <img src={logo} alt="logo..." style={{ width: '150px' }} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <FontAwesomeIcon icon={faHome} />
              &nbsp; Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              <FontAwesomeIcon icon={faAddressCard} />
              &nbsp; About
            </Link>
          </li>
          <li className='nav-item'>
						<Link className='nav-link' to='/Programs'>
							<FontAwesomeIcon icon={faHandsHelping} />
							&nbsp; Programs
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/Resources'>
							<FontAwesomeIcon icon={faQuestionCircle} />
							&nbsp; Resources
						</Link>
					</li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              <FontAwesomeIcon icon={faAddressBook} />
              &nbsp; Contact
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
                <FontAwesomeIcon icon={faNewspaper} />
                &nbsp; News
            </Link>
            <div
              className="dropdown-menu bg-dark"
              aria-labelledby="navbarDropdown">
              <Link className="dropdown-item text-white" href="#">
               Legal Updates
              </Link>
              <Link className="dropdown-item text-white" href="#">
               Blog
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item text-white" href="#">
                Videos
              </Link>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
          <Link className="nav-link" to="/login">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit">
              Login
            </button>
          </Link>
          <Link className="nav-link" to="/signup">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit">
            Sign Up
              </button> 
            </Link>
          </form>
      </div>
    </nav>
  );
};

export default Navbar;
