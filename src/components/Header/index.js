import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo";
import MenuIcon from '../../images/menu-icon.svg';
import CloseIcon from "../../images/close-icon.svg";

export default function Header() {
  const [menu, setMenu] = useState(false)
  const handleMenuClick =()=>{
  return  setMenu(!menu)
  }
  return (
    <header className='w-full flex items-center justify-between py-3 px-4 sm:px-10 md:px-8 sticky top-0 backdrop-blur-xl bg-white text-[#333333]'>
      <Logo className='block pointer h-12 md:h-fit cursor-pointer' />

      <ul className='md:flex hidden justify-between items-center min-w-[400px] text- font-medium'>
        <li>
          <NavLink
            to='/'
            style={({ isActive }) => {
              return {
                padding: "2px",
                color: isActive ? "#393F93" : "",
                fontWeight: isActive ? "600" : "",
                
                border: isActive ? '2px solid #393f93': '',
                borderRadius: '100% 50%'
              };
            }}>
            Tech Talents
          </NavLink>
        </li>
        <li>
          <NavLink
            to='employer'
            style={({ isActive }) => {
              return {
                padding: "2px",
                color: isActive ? "#393F93" : "",
                fontWeight: isActive ? "600" : "",
                border: isActive ? '2px solid #393f93': '',
                borderRadius: '100% 50%'
              };
            }}>
            Employer
          </NavLink>
        </li>
        <li>
          <NavLink
            to='about'
            style={({ isActive }) => {
              return {
                padding: "2px",
                color: isActive ? "#393F93" : "",
                fontWeight: isActive ? "600" : "",
                border: isActive ? '2px solid #393f93': '',
                borderRadius: '100% 50%'
              };
            }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='contact-us'
            style={({ isActive }) => {
              return {
                padding: "2px",
                color: isActive ? "#393F93" : "",
                fontWeight: isActive ? "600" : "",
                border: isActive ? '2px solid #393f93': '',
                borderRadius: '100% 50%'
              };
            }}>
            Contact us
          </NavLink>
        </li>
      </ul>
      <button className='md:block hidden border-none px-4 py-3 bg-[#393F93] text-white/95 rounded-lg font-medium'>
        Apply For A Job
      </button>
      <div className="md:hidden block w-7 h-7" onClick={handleMenuClick}>
        <img src={menu? CloseIcon: MenuIcon} alt='open hamburger menu' className="block w-full h-full" />
      </div>

      {/* Mobile Menu */}
    {
      menu && (

      <div className="fixed py-8 top-full w-full left-0 bg-white h-fit  flex flex-col items-center justify-center gap-4">
      <ul className='md:hidden flex flex-col justify-between items-center gap-4 text- font-medium'>
        <li>
          <NavLink
            to='/'
            style={({ isActive }) => {
              return {
                padding: "2px",
                color: isActive ? "#393F93" : "",
                fontWeight: isActive ? "600" : "",
                border: isActive ? '2px solid #393f93': '',
                borderRadius: '100% 50%'
              };
            }}>
            Tech Talents
          </NavLink>
        </li>
        <li>
          <NavLink
            to='employer'
            style={({ isActive }) => {
              return {
                padding: "2px",
                color: isActive ? "#393F93" : "",
                fontWeight: isActive ? "600" : "",
                border: isActive ? '2px solid #393f93': '',
                borderRadius: '100% 50%'
              };
            }}>
            Employer
          </NavLink>
        </li>
        <li>
          <NavLink
            to='about'
            style={({ isActive }) => {
              return {
                padding: "2px",
                color: isActive ? "#393F93" : "",
                fontWeight: isActive ? "600" : "",
                border: isActive ? '2px solid #393f93': '',
                borderRadius: '100% 50%'
              };
            }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='contact-us'
            style={({ isActive }) => {
              return {
                padding: "2px",
                color: isActive ? "#393F93" : "",
                fontWeight: isActive ? "600" : "",
                border: isActive ? '2px solid #393f93': '',
                borderRadius: '100% 50%'
              };
            }}>
            Contact us
          </NavLink>
        </li>
      </ul>
      <button className='md:hidden block border-none px-4 py-3 bg-[#393F93] text-white/95 rounded-lg font-medium'>
        Apply For A Job
      </button>
      </div>
      )
    }
    </header>
  );
}

// F4F5F9  686CAC  333333  393F93  FFB700
