import React, { useState } from 'react';

export default function SignIn() {
    return (
        <div>
            <h1>Sign In</h1>
            <form>
                <div className="input-box">
                <label htmlFor="username">Username</label>
                <input
                type="text"
                id="username"
                name="username"
                required
                />
                </div>
                
                <div className="input-box">
                <label htmlFor="password">Password (8 characters minimum)</label>
                <input
                type="password"
                id="password"
                name="password"
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