import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const coursesRef = useRef();
  const resourcesRef = useRef();
  const moreRef = useRef();
  const location = useLocation();

  // 🧠 Close dropdowns when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (coursesRef.current && !coursesRef.current.contains(e.target))
        setCoursesOpen(false);
      if (resourcesRef.current && !resourcesRef.current.contains(e.target))
        setResourcesOpen(false);
      if (moreRef.current && !moreRef.current.contains(e.target))
        setMoreOpen(false);
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setCoursesOpen(false);
        setResourcesOpen(false);
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // 🧭 Scroll to courses section if already on /courses
  const handleCoursesClick = (e) => {
    if (location.pathname === "/courses") {
      e.preventDefault();
      const target = document.getElementById("main-courses");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-blue-50 to-white border-b border-blue-100 text-slate-800">
      <div className="w-full px-6 flex items-center justify-between h-16">
        <div className="flex items-center space-x-6 mx-auto">
          <NavLink to="/" className="text-xl font-bold text-blue-900">
            Technical Pilot
          </NavLink>

          <ul className="hidden md:flex items-center space-x-2">
            {/* Home */}
            <li>
              <NavLink
                to="/"
                className="py-2 px-3 rounded-md text-slate-700 hover:text-blue-900 hover:bg-blue-50"
              >
                Home
              </NavLink>
            </li>

            {/* Courses dropdown */}
            <li className="relative" ref={coursesRef}>
              <button
                aria-haspopup="true"
                aria-expanded={coursesOpen}
                onClick={() => {
                  setCoursesOpen((v) => !v);
                  setResourcesOpen(false);
                  setMoreOpen(false);
                }}
                className="flex items-center gap-2 py-2 px-3 rounded-md text-slate-700 hover:text-blue-900 hover:bg-blue-50"
              >
                Courses <span>▾</span>
              </button>

              {coursesOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white border border-blue-100 ring-1 ring-blue-100 rounded-lg shadow-lg z-40">
                  <ul className="p-2">
                    <li>
                      <NavLink
                        to="/courses"
                        onClick={(e) => {
                          handleCoursesClick(e);
                          setCoursesOpen(false);
                        }}
                        className="block px-3 py-2 rounded text-slate-700 hover:bg-blue-50"
                      >
                        All Courses
                      </NavLink>
                    </li>
                    <li className="border-t border-gray-100 my-1"></li>
                    <li>
                      <NavLink
                        to="/courses/dgca-sacaa-technical-general"
                        onClick={() => setCoursesOpen(false)}
                        className="block px-3 py-2 rounded text-slate-700 hover:bg-blue-50"
                      >
                        DGCA/SACAA Technical General
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/navigation"
                        onClick={() => setCoursesOpen(false)}
                        className="block px-3 py-2 rounded text-slate-700 hover:bg-blue-50"
                      >
                        Navigation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/air-regulations"
                        onClick={() => setCoursesOpen(false)}
                        className="block px-3 py-2 rounded text-slate-700 hover:bg-blue-50"
                      >
                        Air Regulations
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/meteorology"
                        onClick={() => setCoursesOpen(false)}
                        className="block px-3 py-2 rounded text-slate-700 hover:bg-blue-50"
                      >
                        Meteorology
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/radio-telephony"
                        onClick={() => setCoursesOpen(false)}
                        className="block px-3 py-2 rounded text-slate-700 hover:bg-blue-50"
                      >
                        RTR (Radio Telephony)
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Resources dropdown */}
            <li className="relative" ref={resourcesRef}>
              <button
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
                onClick={() => {
                  setResourcesOpen((v) => !v);
                  setCoursesOpen(false);
                  setMoreOpen(false);
                }}
                className="flex items-center gap-2 py-2 px-3 rounded-md text-slate-700 hover:text-blue-700 hover:bg-blue-50"
              >
                Resources <span>▾</span>
              </button>

              {resourcesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-blue-100 ring-1 ring-blue-100 rounded-lg shadow-lg z-40">
                  <ul className="p-2">
                    <li>
                      <a
                        href="/resources/question-bank"
                        className="block px-3 py-2 rounded text-slate-700 hover:bg-blue-100"
                      >
                        📘 Question Bank
                      </a>
                    </li>
                    <li>
                      <a
                        href="/resources/manuals"
                        className="block px-3 py-2 rounded text-slate-700 hover:bg-blue-100"
                      >
                         ✍️ Blogs
                        
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blogs"
                        className="block px-3 py-2 rounded text-slate-700 hover:bg-blue-100"
                      >
                       📄 Manuals & Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href="/brochure.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 rounded text-slate-700 hover:bg-blue-100"
                      >
                        ⬇️ Download Brochure
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Static nav items */}
            <li>
              <NavLink
                to="/reviews"
                className="py-2 px-3 rounded-md text-slate-700 hover:text-blue-900 hover:bg-blue-100"
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="py-2 px-3 rounded-md text-slate-700 hover:text-blue-900 hover:bg-blue-100"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="py-2 px-3 rounded-md text-slate-700 hover:text-blue-900 hover:bg-blue-100"
              >
                Contact Us
              </NavLink>
            </li>

            {/* Three-dot "More" menu */}
            <li className="relative" ref={moreRef}>
              <button
                aria-haspopup="true"
                aria-expanded={moreOpen}
                onClick={() => {
                  setMoreOpen((v) => !v);
                  setCoursesOpen(false);
                  setResourcesOpen(false);
                }}
                className="flex items-center gap-2 py-2 px-3 rounded-md text-slate-700 hover:text-blue-900 hover:bg-blue-100"
              >
                ••• <span>{moreOpen ? "▴" : "▾"}</span>
              </button>

              {moreOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-blue-100 ring-1 ring-blue-100 rounded-lg shadow-lg z-40">
                  <ul className="p-2">
                    <li>
                      <a
                        href="https://youtube.com/yourchannel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 rounded text-slate-700 hover:bg-blue-100"
                      >
                        ▶️ YouTube Tutorials
                      </a>
                    </li>
                    <li>
                      <a
                        href="/faq"
                        className="block px-3 py-2 rounded text-slate-700 hover:bg-blue-100"
                      >
                        ❓ FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile menu (placeholder for future implementation) */}
        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
