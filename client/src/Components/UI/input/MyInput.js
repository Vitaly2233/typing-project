import React from "react"
import classes from "./MyInput.module.css"

export default function MyInput({ placeholder, type }) {
    return <input type={type} placeholder={placeholder} className={classes.myInput} />
}
