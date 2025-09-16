
import React from 'react';
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from './Components/ResetPassword';
import Register from "./Components/Register";
import Login from './Components/login';
import './App.css';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App
