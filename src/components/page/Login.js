import React, { useEffect, useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin";
import Contact from "../Contact";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef("");

  const from = location.state?.from?.pathname || "/";
  console.log(location);
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const resetPssword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Please Cheack Your Email");
    } else {
      toast("Enter your Email");
    }
  };
  let errorElement;

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <>
      <Contact />
      <div className="container my-16">
        <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleLogin}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <Link
                to={""}
                onClick={resetPssword}
                className=" decoration-none text-sm text-blue-700 dark:text-blue-500"
              >
                Lost Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-75% text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <SocialLogin />
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Registered?{" "}
              <Link
                to={"/signup"}
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </Link>
            </div>
          </form>
          <ToastContainer />
          <p className="text-red-600">{errorElement}</p>
        </div>
      </div>
    </>
  );
};

export default Login;
