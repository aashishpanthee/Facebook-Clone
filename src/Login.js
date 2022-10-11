import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [isSignUp, setIsSignUp] = useState(false);

  const signUp = () => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user);
        localStorage.setItem("LoggedIn", true);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        localStorage.setItem("LoggedIn", true);
        window.location.reload();
      })
      .catch((error) => alert(error));
  };
  return (
    <>
      <div className='login'>
        <div className='login__logo'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
            alt=''
          />
          <img
            src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
            alt=''
          />
        </div>
      </div>
      <div className='login_form flex col'>
        <div className='inp_holder flex col'>
          <label htmlFor=''>Email</label>
          <input
            type='text'
            className='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='inp_holder flex col'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            className='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type='submit'
          onClick={isSignUp ? signUp : signIn}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        <span>OR</span>
        <Button
          onClick={() => {
            setIsSignUp(!isSignUp);
          }}
        >
          {" "}
          {!isSignUp ? "Create an account" : "Log into account"}
        </Button>
      </div>
    </>
  );
}

export default Login;
