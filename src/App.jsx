import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import './App.css'; // Keep your App-specific styles if needed
import Blog from './pages/blog/blog';
import { SingleBlog } from './components/blogGrid/blogGrid';
import blogsData from './data/blogsData';
import About from './pages/About/About';
import RajpathGrand from './pages/Projects/RajpathGrand';
import RajpathEnclave from './pages/Projects/RajpathEnclave';
import GreenCity from './pages/Projects/GreenCity';
import NotFound from './pages/NotFound/NotFound';
import Admin from './pages/admin/admin';
import ChatBubblePopup from './components/ChatBubblePopup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/projects/rajpath-grand" element={<RajpathGrand />} />
        <Route path="/projects/rajpath-enclave" element={<RajpathEnclave />} />
        <Route path="/projects/green-city" element={<GreenCity />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/:id"
          element={<SingleBlog blogsData={blogsData} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        {/* 404 - Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ChatBubblePopup/>
    </BrowserRouter>
  )
}

export default App
