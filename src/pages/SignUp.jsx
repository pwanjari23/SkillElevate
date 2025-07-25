import React, { useState } from "react";
import login from "../assets/login.jpg";
import mobileLogin from "../assets/mobile-login.jpg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const validateEmail = (email) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setErrors({ ...errors, [e.target.id]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.fullname.trim()) {
            newErrors.fullname = "Full name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Enter a valid email";
        }
        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

            const emailExists = existingUsers.find(
                (user) => user.email === formData.email
            );

            if (emailExists) {
                alert("Email already registered. Please login.");
            } else {
                const updatedUsers = [...existingUsers, formData];
                localStorage.setItem("users", JSON.stringify(updatedUsers));
                // alert("Signup successful! Please login.");
                window.location.href = "/login";
            }

        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 md:px-12 lg:px-24 font-serif ">
            <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-xl overflow-hidden">
                <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8">
                    <img src={logo} alt="LMS Illustration" className="w-full max-w-[550px] max-h-[650px] object-contain" />
                </div>

                <div className="block lg:hidden w-full flex items-center justify-center">
                    <img src={mobileLogin} alt="Mobile Illustration" className="w-3/4 max-h-64 object-contain" />
                </div>

                <div className="md:w-1/2 w-full flex items-center justify-center p-8 lg:p-12">
                    <div className="w-full max-w-md">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 leading-snug block md:hidden">
                            Get started
                        </h2>
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 leading-snug hidden md:block">
                            Sign up to start your learning journey
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name */}
                            <div className="relative w-full mb-2">
                                <input
                                    type="text"
                                    id="fullname"
                                    placeholder=" "
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    className="peer w-full border border-gray-300 text-gray-900 placeholder-transparent rounded-md px-4 pt-6 pb-2 focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800"
                                />
                                <label
                                    htmlFor="fullname"
                                    className="absolute left-4 top-1.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-800"
                                >
                                    Full Name
                                </label>
                                {errors.fullname && (
                                    <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="relative w-full mb-2">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder=" "
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="peer w-full border border-gray-300 text-gray-900 placeholder-transparent rounded-md px-4 pt-6 pb-2 focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-4 top-1.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-800"
                                >
                                    Email Address
                                </label>
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div className="relative w-full mb-2">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder=" "
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="peer w-full border border-gray-300 text-gray-900 placeholder-transparent rounded-md px-4 pt-6 pb-2 pr-10 focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800"
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-4 top-1.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-800"
                                >
                                    Password
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                                >
                                    {showPassword ? <FiEye /> : <FiEyeOff />}
                                </button>
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-900 transition"
                            >
                                Sign Up
                            </button>
                        </form>

                        <p className="mt-6 text-sm text-center text-gray-700">
                            Already have an account?
                            <Link to="/login" className="text-black hover:underline ml-1 text-md">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

