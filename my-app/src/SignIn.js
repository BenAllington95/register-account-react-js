import React, { useState } from 'react';

export default function SignIn(props) {
    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={props.handleSubmit}>
                <div className="input-box">
                <label htmlFor="signInUsername">Username</label>
                <input
                type="text"
                id="signInUsername"
                name="username"
                value={props.form.username}
                onChange={props.handleChange}
                required
                />
                </div>
                
                <div className="input-box">
                <label htmlFor="signInPassword">Password (8 characters minimum)</label>
                <input
                type="password"
                id="signInPassword"
                name="password"
                value={props.form.password}
                onChange={props.handleChange}
                minLength="8"
                required
                />
                </div>

                <button className="submit-btn" type="submit">
                Sign In
                </button>
            </form>
        </div>

    )
}