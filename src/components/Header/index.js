import { NavLink } from "react-router-dom";
import Logo from "../../images/logo";

export default function Header() {
  return (
    <header className='w-full flex items-center justify-between py-3 px-8 sticky top-0 backdrop-blur-md text-[#333333]'>
      <Logo className='block pointer' />

      <ul className='flex justify-between items-center min-w-[400px] text- font-medium'>
        <li>
          <NavLink
            to='/'
            style={({ isActive }) => {
              return {
                padding: "2px",
                color: isActive ? "#393F93" : "",
                fontWeight: isActive ? "600" : "",
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
              };
            }}>
            Contact us
          </NavLink>
        </li>
      </ul>
      <button className='border-none px-4 py-3 bg-[#393F93] text-white/95 rounded-lg font-medium'>
        Apply For A Job
      </button>
    </header>
  );
}

// F4F5F9  686CAC  333333  393F93  FFB700
