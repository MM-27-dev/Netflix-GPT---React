import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utilis/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";
import { USER_AVATAR } from "../utilis/constant";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    //Validate the form data

    console.log(email.current.value);
    // console.log(name.current.value);
    const message = checkValidData(
      isSignInForm ? "" : name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    console.log(message);

    if (message) return;

    if (!isSignInForm) {
      //Sign up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(async (userCredential) => {
          try {
            const user = userCredential.user;

            await updateProfile(user, {
              displayName: name.current.value,
              photoURL: USER_AVATAR,
            });

            const {
              uid,
              email: userEmail,
              displayName,
              photoURL,
            } = auth.currentUser;

            dispatch(
              addUser({
                uid: uid,
                email: userEmail,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          } catch (error) {
            setErrorMessage(error.message);
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
      
    } else {
      //Sign in form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
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
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 -top-10 my-36 mx-auto right-0 left-0 
      absolute p-12 bg-black text-white rounded-lg "
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter First Name"
            className="p-4 my-4 w-full border bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Enter Email Address"
          className="p-4 my-4 w-full border bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-4 my-4 w-full border border-white bg-gray-700"
        />
        <p className="font-bold text-lg p-2 text-red-700">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full "
          onClick={handleButtonClick}
        >
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
