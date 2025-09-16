import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  setLoading(true);
    try {
      await axios.post("/api/auth/forgotPassword", { email });
      navigate("/reset-password");
    } catch (err) {
      setError("Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white backdrop-blur-lg rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-3xl font-medium text-black mb-6">
          Forgot Password
        </h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg  text-black border  border-gray-200 focus:outline-none "
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
       
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 cursor-pointer rounded-lg font-semibold text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        <Link
          to="/login"
          className="mt-6 text-blue-400 hover:underline text-sm"
        >
          Go Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;

