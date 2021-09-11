import React from "react"
import { Link } from "react-router-dom"
import AuthButton from "../Components/UI/button/AuthButton"
import AuthCaption from "../Components/UI/caption/AuthCaption"
import MyInput from "../Components/UI/input/MyInput"
import "../styles/Auth.css"

export default function Auth() {
    return (
        <form className={"auth-container"}>
            <AuthCaption value={"Login"} />
            <MyInput placeholder="username" type={"text"} />
            <MyInput placeholder="password" type={"password"} />
            <AuthButton value={"Subbmit"} />
        </form>
    )
}
