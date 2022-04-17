import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./Firebase.init";
import { signOut } from "firebase/auth";

const Signout = () => {
  const [] = useAuthState(auth);
  return (
    <div>
      <button onClick={() => signOut(auth)} className="text-white mt-2">
        signOut
      </button>
    </div>
  );
};

export default Signout;
