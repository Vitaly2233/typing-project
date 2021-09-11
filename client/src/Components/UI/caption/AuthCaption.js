import React from "react"
import cl from "./AuthCaption.module.css"

export default function AuthCaption({ value }) {
    return <h1 className={cl.authCaption}>{value}</h1>
}
