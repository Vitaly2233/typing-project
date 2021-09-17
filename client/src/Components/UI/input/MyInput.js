import React from "react";
import classes from "./MyInput.module.css";

export default function MyInput({ placeholder, type, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={classes.myInput}
    />
  );
}
