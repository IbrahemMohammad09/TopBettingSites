import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from "./pages/dashboard/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const HomePage = lazy(() => import("./pages/Home"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const DashoardHome = lazy(() => import("./pages/dashboard/DashboardHome"))
const DashboardCategoriesAdd = lazy(() => import("./pages/dashboard/DashboardCategoriesAdd"))
const DashboardCategoriesEdit = lazy(() => import("./pages/dashboard/DashboardCategoriesEdit"))

const DashboardSites = lazy(() => import("./pages/dashboard/DashboardSites"))
const DashboardSitesAdd = lazy(() => import("./pages/dashboard/DashboardSitesAdd"))
const DashboardSitesEdit = lazy(() => import("./pages/dashboard/DashboardSitesEdit"))

const DashboardArticles = lazy(() => import("./pages/dashboard/DashboardArticles"))
const DashboardArticlesAdd = lazy(() => import("./pages/dashboard/DashboardArticlesAdd"))
const DashboardArticlesEdit = lazy(() => import("./pages/dashboard/DashboardArticlesEdit"))




function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/dashboard" element={<Login />} />

          {Object.entries({
            "/dashboard/home" : DashoardHome,
            "/dashboard/categories/add" : DashboardCategoriesAdd,
            "/dashboard/categories/edit/:id" : DashboardCategoriesEdit,
            "/dashboard/sites" : DashboardSites,
            "/dashboard/sites/add" : DashboardSitesAdd,
            "/dashboard/sites/edit/:id" : DashboardSitesEdit,
            "/dashboard/articles" : DashboardArticles,
            "/dashboard/articles/add" : DashboardArticlesAdd,
            "/dashboard/articles/edit/:id" : DashboardArticlesEdit,

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
