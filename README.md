# 🔐 Forgot Password & Reset Password Implementation

This guide explains how to implement a complete forgot password and reset password flow using React and React Router.


It connects to a **backend API** (Node/Express/MongoDB) deployed on Render.

---

## 🚀 Features
- **Forgot Password Page** – enter email to request reset link
- **Reset Password Page** – update password using secure token
- Form validation (match new & confirm password)
- Axios global configuration for API requests
- Responsive design with TailwindCSS

---

## ⚡ Tech Stack

React (Vite)

React Router

Axios

TailwindCSS

Netlify (deployment)

# 🔗 Frontend Routes

**/forgotPassword** → Forgot Password Page

**/resetPassword/:token** → Reset Password Page

### 1️⃣ Clone Repository
```bash
git clone https://github.com/arunjo96/password-reset-flow-frontend.git
