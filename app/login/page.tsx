"use client";
import React, { useState } from "react";
import Login from "./Login";
import Signupform from "./Signupform";

interface LoginProps {
  onlogin: () => void;
}

function Signin({ onlogin }: LoginProps): JSX.Element {
  const [showLogin, setShowLogin] = useState<boolean>(true);

  return (
    <>
      {showLogin ? (
        <Login onlogin={onlogin} setShowLogin={setShowLogin} />
      ) : (
        <Signupform onlogin={onlogin} setShowLogin={setShowLogin} />
      )}
    </>
  );
}

export default Signin;
