
import React from 'react';
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from './Components/ResetPassword';

import './App.css';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App
