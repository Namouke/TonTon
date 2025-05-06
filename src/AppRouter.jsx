// src/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './admin/Admin';
import Home from './admin/pages/Home';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;