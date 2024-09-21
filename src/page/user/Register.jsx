import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterUserMutation } from "../../redux/features/auth/authApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [Error, setError] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [registerUser , {isLoading : RegisterLoading}] = useRegisterUserMutation();

  const onSubmit = async (data) => {
    try {
     const res = await registerUser(data).unwrap();
    if(res.message){
      reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/');
    }
    } catch (error) {
     setError(error)
    }
  }


  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
          {RegisterLoading ? (
            <span className="loading mx-auto text-blue-600 loading-infinity loading-lg"></span>
          ) : (
            <h2 className=" text-2xl text-center font-semibold pt-5">
              Please Register
            </h2>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter Your Name"
                className="h-12 bg-gray-50 p-2 border rounded focus:outline-none"
                {...register("username", { required: true })}
              />
              {errors.text && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
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
                  minLength: 6,
                  pattern: /^[^0-9][A-Za-z]+$/i,
                  maxLength: 20,
                })}
              />
              {errors.password?.type === "required" && (
                <p className=" text-red-700" role="alert">
                  Password is required
                </p>
              )}{" "}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600" role="alert">
                  Password must be 6 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600" role="alert">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600" role="alert">
                  Password must be less than 20 characters
                </p>
              )}
              <p className="text-sm mt-2">
                Already have an account ?{" "}
                <a className="text-blue-600 underline" href="/login">
                  Login
                </a>{" "}
                here
              </p>


            </div>
            {
              Error && <p className="text-red-600 text-sm  italic">{Error.data.message} valid email</p>
            }
            <div className="form-control mt-5">
              <button className="p-3 bg-black text-white rounded">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
