import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserProfile() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        gender: '',
        role: '',
        membership_id: '',
        organization: {
            orgName: '',
            missionStatement: '',
            website: '',
            overview: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const [field, subfield] = name.split('.');
        
        if (subfield) {
            setFormData({
                ...formData,
                [field]: {
                    ...formData[field],
                    [subfield]: value
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3001/profile", formData);

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
        <div className="profile">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" />
                <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Role" />
                <input type="text" name="membership_id" value={formData.membership_id} onChange={handleChange} placeholder="Membership ID" />
                <input type="text" name="organization.orgName" value={formData.organization.orgName} onChange={handleChange} placeholder="Organization Name" required />
                <input type="text" name="organization.missionStatement" value={formData.organization.missionStatement} onChange={handleChange} placeholder="Mission Statement" required />
                <input type="text" name="organization.website" value={formData.organization.website} onChange={handleChange} placeholder="Website" />
                <input type="text" name="organization.overview" value={formData.organization.overview} onChange={handleChange} placeholder="Overview" />
                <button type="submit">DONE</button>
            </form>
            <br />
        </div>
    );
}

export default UserProfile;
