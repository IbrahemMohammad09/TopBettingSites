import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

const HomePage = lazy(() => import("./pages/home"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error" replace />}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
