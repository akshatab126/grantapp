import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const res = await axios.post("http://localhost:3001/signup", {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            if (res.data.message === "User registered successfully") {
                navigate("/explore", { state: { id: formData.email } });
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            alert("Failed to register");
            console.error(error);
        }
    };

    return (
        <div className="signup">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Name" 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    placeholder="Password" 
                    required 
                />
                <input 
                    type="password" 
                    name="confirmPassword" 
                    value={formData.confirmPassword} 
                    onChange={handleChange} 
                    placeholder="Confirm Password" 
                    required 
                />
                <button type="submit">Submit</button>
            </form>
            <br />
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
}

export default Signup;
