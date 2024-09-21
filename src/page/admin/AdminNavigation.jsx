import { NavLink } from "react-router-dom";
import { useLogOutMutation } from "../../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/features/auth/authSlice";

const AdminNavigation = () => {
  const [logoutUser] = useLogOutMutation();
  const dispatch = useDispatch();
  const handleLogOut = async () =>{
    try {
      await  logoutUser().unwrap();
      dispatch(logOut());
    } catch (error) {
      console.error('faild logout');
      
    }
  }
     return (
    <div className=" space-y-5 bg-white p-8 md:h-[calc(100vh-98px)] shadow-xl shadow-red-400  flex flex-col ">
      {/* header part */}
      <div className="md-5">
        <img className=" size-14" src="/admin.png" alt="" />
        <p className=" font-semibold">Admin</p>
      </div>
      {/* navigation part */}
      <hr />
        <ul className=" space-y-5 ">
          <li>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive ? " text-blue-600 font-semibold" : " text-black"
              }
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/add-new-post"}
              className={({ isActive }) =>
                isActive ? " text-blue-600 font-semibold" : " text-black"
              }
            >
              Add New Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/manage-item"}
              className={({ isActive }) =>
                isActive ? " text-blue-600 font-semibold" : " text-black"
              }
            >
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/user"}
              className={({ isActive }) =>
                isActive ? " text-blue-600 font-semibold" : " text-black"
              }
            >
              User
            </NavLink>
          </li>
        </ul>

      {/* logout */}
      <div className=''>
        <button
        onClick={handleLogOut}
         className="mt-8 md:mt-72 text-white bg-red-600 font-medium px-5 py-1 rounded">Logout</button>
      </div>
    </div>
  );
};

export default AdminNavigation;
