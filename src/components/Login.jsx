import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm = () =>{
      setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
          alt="Movie Banner"
        />
      </div>
      <form
        className="w-3/12 -top-10 my-36 mx-auto right-0 left-0 
      absolute p-12 bg-black text-white rounded-lg "
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter First Name"
            className="p-4 my-4 w-full border bg-gray-700"
          />
        )}
        <input
          type="email"
          placeholder="Enter Email Address"
          className="p-4 my-4 w-full border bg-gray-700"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-4 my-4 w-full border border-white bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full ">
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix?Sign Up Now"
            : "Already registered? Sign In Now.."}
        </p>
      </form>
    </div>
  );
};

export default Login;
