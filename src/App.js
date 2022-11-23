import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

import VerifyEmail from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";
import BackgroundAnimate from "./BackgroundAnimate";

import { NotFound } from "./NotFound";
import MessageUs from "./pages/MessageUs";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      <BackgroundAnimate />
      {loading && (
        <div className="spinner-parent">
          <div class="spinner-border" role="status"></div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
              <BackgroundAnimate />
            </PublicRoute>
          }
        />
        <Route
          path="/message"
          element={
            <PublicRoute>
              <MessageUs />
              <BackgroundAnimate />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
              <BackgroundAnimate />
            </PublicRoute>
          }
        />
        <Route
          path="/verifyemail/:token"
          element={
            <PublicRoute>
              <VerifyEmail />
            </PublicRoute>
          }
        />
        <Route path="/error:404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/error:404" />} />
        <Route
          path="/resetpassword/:token"
          element={
            <PublicRoute>
              <BackgroundAnimate />

              <ResetPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
