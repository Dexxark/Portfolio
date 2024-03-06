import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: "Description", section: "description" },
    { text: "Compétences", section: "skills" },
    { text: "Projets", section: "projects" },
  ];

  return (
    <nav
      className={`fixed left-0 top-0 z-[100] w-screen bg-off-white shadow-2xl`}
    >
      <div className=" lg:mx-20 lg:flex lg:items-center lg:justify-between lg:px-9 lg:py-6  ">
        <a href="#home" className={`my-4 ml-4 inline-block font-kaushan text-[2rem] font-semibold lg:my-0 lg:ml-0 text-gray-dark`}>
          Portfolio
        </a>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-6 top-7 cursor-pointer text-2xl text-gray-dark lg:hidden "
        >
          {open ? (
            <AiOutlineClose className="text-gray-dark"/>
          ) : (
            <RiMenu3Fill className="text-gray-dark"/>
          )}
        </div>

        <ul
          className={`absolute right-0 -z-10 w-full bg-off-white pt-8 text-[0.938rem] font-medium uppercase leading-[0.938rem] tracking-widest text-gray-dark transition-all duration-500 ease-in lg:static lg:z-auto lg:flex lg:w-auto lg:items-center lg:gap-10 lg:bg-transparent lg:pt-0 lg:text-[0.8rem] lg:text-gray-light lg:transition-none
          ${
            open
              ? "translate-x-0 text-center opacity-100 shadow-2xl"
              : "translate-x-full text-center lg:translate-x-0 "
          }`}
        >
          {menuItems.map((menuItem) => (
            <li key={menuItem.section} className="mb-8 mx-8 lg:mb-0 lg:mx-0">
              <a href={`#${menuItem.section}`} >
                {menuItem.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
