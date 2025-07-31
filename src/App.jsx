// App.jsx
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import CourseList from "./components/CourseList";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeSkillsSection from "./components/HomeSkillsSection";
import TrainingNotice from "./components/TrainingNotice";
import Contents from "./components/Contents";
import Blogs from "./components/Blogs";
import Plans from "./components/Plans";
import CourseDetails from "./components/CourseDetails";
import AboutUs from "./components/AboutUs";
import Shimmer from "./components/Shimmer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!JSON.parse(localStorage.getItem("loggedInUser"))
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!JSON.parse(localStorage.getItem("loggedInUser")));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);


  return (
    <div className="font-serif">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Routes>
          <Route
            path="/courses"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <CourseList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/:id"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <CourseDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Contents />
              </ProtectedRoute>
            }
          />
          <Route
            path="/plans"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Plans />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blogs"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Blogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>

        {isLoggedIn && <Footer />}
      </Router>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default App;


