
import React from 'react';
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from './Components/ResetPassword';

import './App.css';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
       `<Route path ="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App
