import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

const navItem = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Contact us", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = () => setisMenuOpen(!isMenuOpen);
  return (
    <header className=" bg-white py-6 border">
      <nav className="container px-5 mx-auto flex justify-between">
        <a href="/">
          <img src="/logo .png" alt="logo" className="h-12" />
        </a>
        <ul className="sm:flex hidden items-center gap-6">
          {navItem.map((item, index) => (
             <li key={index+1}>
             <NavLink
             to={`${item.path}`}
             className={({ isActive, isPending }) =>
               isActive ? "active" : ""
             }
           >
             {item.name}
           </NavLink>
           </li>
          ))}
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </ul>
        {/* toggle menu */}
        <div className="flex  items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className=" flex items-center  px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900"
          >
            {isMenuOpen ? (
              <GrClose className="text-xl" />
            ) : (
              <BiMenuAltLeft className="text-xl" />
            )}
          </button>
        </div>

        {/* mobile size */}

        {isMenuOpen && (
          <ul className=" fixed  top-[108px] left-0 w-full h-auto pb-8 bg-white shadow-sm z-50 ">
            {navItem.map((item, index) => (
              <li key={index+1} className="mt-5 px-4">
                <NavLink
                onClick={() => setisMenuOpen(false)}
                to={`${item.path}`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : ""
                }
              >
                {item.name}
              </NavLink>
              </li>
            ))}
            <li className="mt-5 px-4">
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
