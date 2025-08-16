import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from "./pages/dashboard/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const HomePage = lazy(() => import("./pages/home"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const DashoardHome = lazy(() => import("./pages/dashboard/DashboardHome"))
const DashboardSites = lazy(() => import("./pages/dashboard/DashboardSites"))
const DashboardArticles = lazy(() => import("./pages/dashboard/DashboardArticles"))

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/dashboard" element={<Login />} />

          {Object.entries({
            "/dashboard/home" : DashoardHome,
            "/dashboard/sites" : DashboardSites,
            "/dashboard/articles" : DashboardArticles,

            }).map(([path, Component]) => (
              <Route key={path} path={path} element={<ProtectedRoute><Component /></ProtectedRoute>} />
          ))}

          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error" replace />}/>


        </Routes>

    </BrowserRouter>
  );
}

export default App;
