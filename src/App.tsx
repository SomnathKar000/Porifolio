import React, { useState } from "react";
import { NavbarCapsule } from "./components/ui/NavbarCapsule";
import { Footer } from "./components/ui/Footer";
import { AboutView } from "./views/AboutView";
import { BlogView } from "./views/BlogView";
import { ContactView } from "./views/ContactView";
import { CaseStudyView } from "./views/CaseStudyView";
import { NavPage, BlogPost } from "./types";
import { BlogPosts } from "./data/blogData";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<NavPage>("about");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleOpenCaseStudy = (post?: BlogPost) => {
    setSelectedPost(post || BlogPosts[1]); // Default to Vortex case study
    setCurrentPage("case-study");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0D0E10] text-[#e3e2e5] antialiased selection:bg-[#343537] selection:text-white min-h-screen flex flex-col font-sans">
      {/* Floating Top Navigation Capsule */}
      <NavbarCapsule
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content View Container */}
      <main className="w-full pt-24 pb-12 flex-1">
        {currentPage === "about" && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenCaseStudy={() => handleOpenCaseStudy(BlogPosts[1])}
          />
        )}

        {currentPage === "blog" && (
          <BlogView onSelectPost={handleOpenCaseStudy} />
        )}

        {currentPage === "contact" && <ContactView />}

        {currentPage === "case-study" && (
          <CaseStudyView
            post={selectedPost}
            onBack={() => handleNavigate("blog")}
          />
        )}
      </main>

      {/* High-Craft Minimalist Footer */}
      <Footer />
    </div>
  );
};

export default App;
