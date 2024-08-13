// import React from "react";
import '../../src/App'
const Navbar = () => {


  const navLinks = <>


    <li><a href="#home">
      Home
    </a></li>

    <li>
      <a href="#experience">
        Experience
      </a>
    </li>
    <li>
      <a href="#skills">
        Skills
      </a>
    </li>
    <li>
      <a href="#projects">
        Projects
      </a>
    </li>
    <li> <a href="#contact">
      Contact
    </a></li>
  </>

  return (
    <>
      <div className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000">

        <div className=" dark:bg-black navbar shadow-xl rounded-md mb-[50px] ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-600 text-white rounded-box w-52">
                {
                  navLinks
                }
              </ul>
            </div>
            <a className="btn btn-ghost text-xl uppercase"> <img className="h-8 w-8 hidden lg:flex" src="https://i.ibb.co/0FwdB67/profile-pic.png" alt="" />MD Jehad Hasan</a>
          </div>

          <div className="lg:navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal ">
              {
                navLinks
              }
            </ul>
          </div>
        </div>



      </div>
    </>
  );
};

export default Navbar;
