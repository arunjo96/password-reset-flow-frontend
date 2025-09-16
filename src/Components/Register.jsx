import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("/api/auth/register", { name, email, password });
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Registration failed");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md bg-white backdrop-blur-lg rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-center text-3xl font-semibold text-black mb-6">
          Register
        </h2>
        <form className="w-full flex flex-col gap-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-lg text-black border border-gray-200 focus:outline-none w-full"
            required
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg text-black border border-gray-200 focus:outline-none w-full"
            required
                  />
          <select
            className="px-4 py-2 rounded-lg text-black border border-gray-200 focus:outline-none w-full"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 rounded-lg text-black border border-gray-200 focus:outline-none w-full pr-10"
              required
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button className="w-full py-2 rounded-lg cursor-pointer bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            Register
          </button>
        </form>
        <div className="flex flex-col items-center mt-6 gap-2 w-full">
          <Link to="/login" className="text-blue-400 hover:underline text-sm">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
