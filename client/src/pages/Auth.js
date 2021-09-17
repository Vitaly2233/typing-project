import React, { useContext, useState } from "react";
import AuthButton from "../Components/UI/button/AuthButton";
import AuthCaption from "../Components/UI/caption/AuthCaption";
import MyInput from "../Components/UI/input/MyInput";
import { AuthContext } from "../Context/Auth";
import AuthService from "../API/AuthService.js";
import "../styles/Auth.css";

export default function Auth() {
  const { setIsAuth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onClick(e) {
    e.preventDefault();
    const rawResponse = await AuthService.login({ username, password });
    const response = await rawResponse.json();

    if (response?.token) setIsAuth(true);
  }
  return (
    <form className={"auth-container"}>
      <AuthCaption value={"Login"} />
      <MyInput
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        type={"text"}
      />
      <MyInput
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type={"password"}
      />
      <AuthButton value={"Subbmit"} onClick={onClick} />
    </form>
  );
}
