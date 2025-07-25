import React, { useState, useEffect } from "react";
import { FiMenu, FiSearch, FiX, FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
        setUser(storedUser || null);
    }, [isLoggedIn]); // 🔁 runs whenever login state changes

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        setIsLoggedIn(false);
        navigate("/login");
    };


    return (
        <nav className="bg-white shadow-2xl px-4 py-3 font-serif">
            <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
                {/* Logo */}
                <div className="text-3xl font-bold text-black">LMS</div>

                {/* Search Bar */}
                <div className="flex-1 mx-2 max-w-md w-full relative">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 text-lg" />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="w-full px-10 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                </div>

                {/* Cart and Hamburger (mobile) */}
                <div className="flex items-center space-x-4 md:hidden">
                    <button className="text-gray-700 hover:text-blue-600 text-xl">
                        <FiShoppingCart />
                    </button>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-700 hover:text-blue-600 text-xl"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-5 ml-4">
                    <Link to="/plans" className="text-gray-700 hover:text-blue-600 cursor-pointer">Plans & Pricing</Link>
                    <Link to="/courses" className="text-gray-700 hover:text-blue-600 cursor-pointer">Explore Courses</Link>
                    <Link to="/blogs" className="text-gray-700 hover:text-blue-600 cursor-pointer">Explore Blogs</Link>

                    <Link to="/favorites" className="text-gray-700 hover:text-blue-600 text-xl"><GrFavorite /> </Link>

                    <Link to="/cart" className="text-gray-700 hover:text-blue-600 text-xl"><FiShoppingCart /></Link>

                    {user ? (
                        <>
                            <div className="text-sm text-gray-700">👋 Hello, {user.fullname}</div>
                            <button
                                onClick={handleLogout}
                                className="text-sm text-gray-700 bg-white border border-black px-4 py-2 rounded-full "
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="text-white bg-black hover:bg-gray-900 font-medium rounded-full text-md px-5 py-2.5"
                            >
                                Log in
                            </Link>
                            <Link
                                to="/signup"
                                className="text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-full text-md px-5 py-2.5"
                            >
                                Sign up
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-3 space-y-3 px-4">
                    <Link to="/plans" className="block text-gray-700 hover:text-blue-600 cursor-pointer">Pricing & Plans</Link>
                    <Link to="/courses" className="block text-gray-700 hover:text-blue-600 cursor-pointer">Explore Courses</Link>
                    <Link to="/blogs" className="block text-gray-700 hover:text-blue-600 cursor-pointer">Explore Blogs</Link>

                    {user ? (
                        <>
                            <div className="text-sm text-gray-700">👋 Hello, {user.fullname}</div>
                            <button
                                onClick={handleLogout}
                                className="text-sm text-red-500"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="block text-gray-700 hover:text-blue-600">Log in</Link>
                            <Link to="/signup" className="block text-gray-700 hover:text-blue-600">Sign up</Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
