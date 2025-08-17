import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from "./pages/dashboard/Login";
import ProtectedRoute from "./components/ProtectedRoute";


const HomePage = lazy(() => import("./pages/Home"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const DashoardHome = lazy(() => import("./pages/dashboard/DashboardHome"))
const DashboardSites = lazy(() => import("./pages/dashboard/DashboardSites"))
const DashboardArticles = lazy(() => import("./pages/dashboard/DashboardArticles"))
const DashboardCategoriesAdd = lazy(() => import("./pages/dashboard/DashboardCategoriesAdd"))
const DashboardSitesAdd = lazy(() => import("./pages/dashboard/DashboardSitesAdd"))
const DashboardSitesAddPhoto = lazy(() => import("./pages/dashboard/DashboardSitesAddPhoto"))

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
            "/dashboard/categories/add" : DashboardCategoriesAdd,
            "/dashboard/sites/add" : DashboardSitesAdd,
            "/dashboard/sites/add/photo" : DashboardSitesAddPhoto,

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
