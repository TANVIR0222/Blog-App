import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useLogOutMutation } from "../redux/features/auth/authApi";
import { logOut } from "../redux/features/auth/authSlice";

const navItem = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Contact us", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = () => setisMenuOpen(!isMenuOpen);

  const { user } = useSelector((state) => state.auth);

  const [logoutUser] = useLogOutMutation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logOut());
    } catch (error) {}
  };

  return (
    <header className=" bg-white py-6 border">
      <nav className="container px-5 mx-auto flex justify-between">
        <a href="/">
          <img src="/logo.png" alt="logo" className="h-12" />
        </a>
        <ul className="sm:flex hidden items-center gap-6">
          {navItem.map((item, index) => (
            <li key={index + 1}>
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

          {/* render btn based on user role */}
          {user && user.role === "user" ? (
            <li className=" flex items-center justify-center gap-4">
              <button
                onClick={handleLogout}
                className=" px-2 py-2 bg-[#1E73BE] text-blue-50 rounded"
              >
                Logout
              </button>
              <img className=" size-7" src="/commentor.png" alt="" />
            </li>
          ) : (
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            
          )}

          {/* render btn based on user role Admin */}
          {user && user.role === "admin" && (
            <li className=" flex items-center justify-center gap-4">
              <img className=" size-7" src="/commentor.png" alt="" />

              <Link to={"dashboard"}>
                {" "}
                <button className=" px-2 py-2 bg-[#1E73BE] text-blue-50 rounded">
                  Dashboard
                </button>{" "}
              </Link>
            </li>
          )}
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
              <li className="mt-5 px-4">
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
            {/* <li className="mt-5 px-4">
              <NavLink to={"/login"}>Login</NavLink>
            </li> */}
            {/* render btn based on user role */}
            {user && user.role === "user" ? (
              <li className=" ml-5 my-3 flex flex-col items-start justify-center gap-4">
                <img className=" size-7" src="/commentor.png" alt="" />
                <button
                  onClick={handleLogout}
                  className=" px-2 py-2 bg-[#1E73BE] text-blue-50 rounded"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            )}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
