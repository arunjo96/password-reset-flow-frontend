import  { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { token } = useParams();



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      await axios.post(`/api/auth/resetPassword/${token}`, { newPassword });
      navigate("/forgot-password");
    } catch (err) {
      setError("Failed to reset password");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-3xl font-medium text-black mb-6">Reset Password</h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

          <div className="relative w-full">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="px-4 py-2 rounded-lg text-black border border-gray-200 focus:outline-none w-full"
              required
            />
            <span
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="relative w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="px-4 py-2 rounded-lg text-black border border-gray-200 focus:outline-none w-full"
              required
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg cursor-pointer bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Resetting..." : "Reset Password"}
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

export default ResetPassword;
