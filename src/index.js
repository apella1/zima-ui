import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Blog } from './pages';
import { Signup, Login, Chat } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='blog' element={<Blog />} />
            <Route path='signup' element={<Signup />} />
            <Route path='signup' element={<Login />} />
            <Route path='chat' element={<Chat />} />
        </Routes>
    </BrowserRouter>
);
