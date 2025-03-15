"use client";
// Componente para cerrar sesión - ButtonLogOut con O mayúscula
import { signOut } from "next-auth/react";
const ButtonLogOut = () => {
  return (
    <button className="btn-btn-ghost" onClick={() => signOut()}>
      Logout
    </button>
  );
};
export default ButtonLogOut;
