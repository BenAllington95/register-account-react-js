import React, { useState } from 'react';
import RegisterConfirmed from './RegisterConfirmed';

export default function Register(props) {
    
    const [form, setForm] = useState({})
    const [registered, setRegistered] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setRegistered(true)
    }
  
    function handleChange(e) {
        const {name, value, type, checked} = e.target
        setForm({ ...form, 
            [name]: type === "checkbox" ? checked : value})
    }

        const registerHtml = (
        <div>
            <h1>Register an account</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                />
                </div>
                
                <div className="input-box">
                <label htmlFor="username">Username</label>
                <input
                type="text"
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
                />
                </div>
                
                <div className="input-box">
                <label htmlFor="firstName">First Name</label>
                <input
                type="text"
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                />
                </div>
                
                <div className="input-box">
                <label htmlFor="lastName">Last Name</label>
                <input
                type="text"
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
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
                value={form.password}
                onChange={handleChange}
                required
                />
                </div>
                
                <div className="input-box">
                <label htmlFor="checkbox">Sign up for promotions</label>
                <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value={form.checkbox}
                onChange={handleChange}
                />
                </div>
                
                <button className="submit-btn" type="submit">
                    Register
                </button>
            </form>
        </div>
        )

        return (
            <div>
                {!registered ? 
                    registerHtml : 
                    <RegisterConfirmed
                        form={form} 
                    />}
            </div>
  )}