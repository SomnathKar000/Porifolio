import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavbarCapsule } from "./components/ui/NavbarCapsule";
import { Footer } from "./components/ui/Footer";
import { AboutView } from "./views/AboutView";
import { BlogView } from "./views/BlogView";
import { ContactView } from "./views/ContactView";
import { CaseStudyView } from "./views/CaseStudyView";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#0D0E10] text-[#e3e2e5] antialiased selection:bg-[#343537] selection:text-white min-h-screen flex flex-col font-sans">
        {/* Floating Top Navigation Capsule */}
        <NavbarCapsule />

        {/* Routed Views */}
        <main className="w-full pt-24 pb-12 flex-1">
          <Routes>
            <Route path="/" element={<AboutView />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/blog" element={<BlogView />} />
            <Route path="/blog/:slug" element={<CaseStudyView />} />
            <Route
              path="/case-study"
              element={
                <Navigate
                  to="/blog/designing-direct-to-s3-multipart-uploads"
                  replace
                />
              }
            />
            <Route path="/contact" element={<ContactView />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Minimalist Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
