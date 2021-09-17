import React from "react";
import cl from "./AuthButton.module.css";

export default function AuthButton({ value, onClick }) {
  return (
    <button className={cl.authButton} onClick={onClick}>
      {value}
    </button>
  );
}
