import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RxHamburgerMenu  } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`fixed left-0 top-0 z-[100] w-screen bg-off-white shadow-2xl`}>
      <div className=" lg:mx-20 lg:flex lg:items-center lg:justify-between lg:px-9 lg:py-6">
        <a className={`my-4 ml-4 inline-block text-[2rem] font-semibold lg:my-0 lg:ml-0 text-gray-dark`}>
          Mathieu Etcheverry
        </a>
        <div onClick={() => setOpen(!open)} className="absolute right-6 top-7 cursor-pointer text-2xl lg:hidden">
          {open ? (
            <GrClose/>
          ) : (
            <RxHamburgerMenu/>
          )}
        </div>
        <ul
          className={`absolute right-0 -z-10 w-full bg-off-white pt-8 font-medium uppercase tracking-widest text-gray-dark transition-all duration-500 ease-in lg:static lg:z-auto lg:flex lg:w-auto lg:items-center lg:gap-10 lg:bg-transparent lg:pt-0 lg:text-[0.9rem]
          ${
            open
              ? "translate-x-0 text-center opacity-100 shadow-2xl"
              : "translate-x-full text-center lg:translate-x-0 "
          }`}
        >
          <li className="mb-6 mx-8 lg:mb-0 lg:mx-0">
            <a href="#description" >
              Description
            </a>
          </li>
          <li className="mb-6 mx-8 lg:mb-0 lg:mx-0">
            <a href="#skills" >
              Compétences
            </a>
          </li>
          <li className="mb-6 mx-8 lg:mb-0 lg:mx-0">
            <a href="#projects" >
              Projets
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;