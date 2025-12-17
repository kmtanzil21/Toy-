import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const linkClass = ({ isActive }) => isActive ? "active font-bold text-blue-800" : "";

  const handleLogOut = () => {
    console.log(' user is trying to logout');
    logOut()
    .then(() => {
      toast("You have successfully logged out!!")
    }).catch((error) => {
      toast.error("LogOut failed. Try again")
    });
  }

  // Helper for menu items to avoid duplication
  const navLinks = (
      <>
        <li><NavLink className={linkClass} to="/topproducts">Top Products</NavLink></li>
        <li><NavLink className={linkClass} to="/allproducts">All Products</NavLink></li>
        
        {/* ADDED CONDITIONAL MY PROFILE LINK */}
        { user && <li><NavLink className={linkClass} to="/myprofile">My Profile</NavLink></li> }
        
        <li><NavLink className={linkClass} to="/authentication">Authentication</NavLink></li>
      </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Toy Store</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {
          user ? (
            <>
              {/* Optional: Show User Avatar next to logout */}
              <div className="avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                  <div className="w-10 rounded-full border border-base-300">
                        <img src={user.photoURL || "https://i.ibb.co/5GzXkwq/user.png"} alt="user" />
                  </div>
              </div>
              <a onClick={handleLogOut} className="btn btn-primary">Log Out</a>
            </>
          ) : (
            <Link to="/authentication/login" className='btn btn-primary'>Log In</Link>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;