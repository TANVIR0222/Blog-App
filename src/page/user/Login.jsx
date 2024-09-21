import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../redux/features/auth/authApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const [loginUser, { isLoading, error }] = useLoginUserMutation();

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data).unwrap();
      console.log(res);
      reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
      const { token, user } = res;
      dispatch(setUser({user}));

    } catch (error) {
      setLoginError(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
          {isLoading ? (
            <span className="loading mx-auto text-blue-600 loading-infinity loading-lg"></span>
          ) : (
            <h2 className=" text-2xl text-center font-semibold pt-5">
              Please Login
            </h2>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="h-12 bg-gray-50 p-2 border rounded focus:outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="h-12 bg-gray-50 p-2 border rounded focus:outline-none"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password?.type === "required" && (
                <p className=" text-red-700" role="alert">
                  Password is required
                </p>
              )}

              <p className="text-sm mt-2">
                Don't have an account ?{" "}
                <a className="text-blue-600 underline" href="/register">
                  register
                </a>{" "}
                here
              </p>
            </div>
            {loginError && (
              <p className="text-red-600 text-sm  italic">
                {loginError.data.message}{" "}
              </p>
            )}

            <div className="form-control mt-5">
              <button type="submit" className="p-3 bg-black text-white rounded">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
