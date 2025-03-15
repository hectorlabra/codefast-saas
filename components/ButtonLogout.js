"use client";
import { signOut } from "next-auth/react";
const ButtonLogOut = () => {
  return (
    <button className="btn-btn-ghost" onClick={() => signOut()}>
      Logout
    </button>
  );
};
export default ButtonLogOut;
