import { Link, NavLink } from "react-router-dom";
import logo from '../../../../assets/icons/logo.svg'
import { useContext } from "react";
import { ContextProvider } from "../../../AuthContext/AuthContext";

const NavBar = () => {

    const navbar = <>
        <li><NavLink to='/' className={({ isActive }) => isActive && 'border-2 text-purple-400 mx-2 px-2 rounded-md border-purple-400'}>Home</NavLink></li>
        <li><NavLink to='/about' className={({ isActive }) => isActive && 'border-2 text-purple-400 mx-2 px-2 rounded-md border-purple-400'}>About</NavLink></li>
        <li><NavLink to='/services' className={({ isActive }) => isActive && 'border-2 text-purple-400 mx-2 px-2 rounded-md border-purple-400'}>Services</NavLink></li>
        <li><NavLink to='/blog' className={({ isActive }) => isActive && 'border-2 text-purple-400 mx-2 px-2 rounded-md border-purple-400'}>Blog</NavLink></li>
        <li><NavLink to='/contact' className={({ isActive }) => isActive && 'border-2 text-purple-400 mx-2 px-2 rounded-md border-purple-400'}>Contact</NavLink></li>
    </>

    const { LogOutUser, user } = useContext(ContextProvider);

    const handleLogOut = () => {
        LogOutUser()
    }


    return (
        <div className="navbar h-24 shadow-md mb-3 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl"><img className="w-3/4" src={logo} alt="" /></Link >
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>

                <button className="btn mr-2 btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <button className="btn btn-outline btn-error">Appointment</button>
                {
                    user && <button onClick={handleLogOut} className="btn  btn-warning">Log Out</button>
                }
            </div>
        </div>
    );
};

export default NavBar;