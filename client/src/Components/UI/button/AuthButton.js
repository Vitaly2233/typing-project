import React from "react"
import cl from "./AuthButton.module.css"

export default function AuthButton({ value }) {
    return <button className={cl.authButton}>{value}</button>
}
