import React, { useState } from 'react';

export default function RegisterConfirmed(props) {

    const [showPassword, setShowPassword] = useState(false)

    function flipShowPassword() {
        setShowPassword(!showPassword)
    }
    

    return (
    <div>
        <h1>Thanks for registering {props.form.firstName}!</h1>
        <p>Please check your email to confirm the registration.</p>
        <p>Email: {props.form.email}</p>
        <p>Full Name: {`${props.form.firstName} ${props.form.lastName}`}</p>
        <p>Username: {props.form.username}</p>
        <p className="bold" onClick={flipShowPassword}>{showPassword ? props.form.password : "Show Password"}</p>
        <p>{props.form.checkbox ? "Registered to promotions" : ""}</p>
    </div>
    )
}