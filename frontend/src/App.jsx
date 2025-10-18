import "./index.css";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Navbar from "./assets/navbar.jsx";
import HeroSection from "./assets/herosection.jsx";
import CoursesSection from "./assets/courses.jsx";
import CourseDetail from "./assets/courseDetails.jsx";
import AboutLanding from "./assets/aboutLanding.jsx";
import AboutPage from "./assets/aboutPage.jsx";
import Testimonials from "./assets/testimonials1.jsx";
import Testimonials2 from "./assets/testimonials2.jsx";
import CoursesMain from "./assets/cousesMain.jsx";
import FounderCard from "./assets/FounderCard";

// 🏠 Home Page
function HomePage() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <FounderCard />
      <Testimonials />
    </>
  );
}

// 📘 Courses Page (nested routes)
function CoursesPage() {
  return (
    <div className="pt-20">
      <Routes>
        <Route index element={<CoursesMain />} />
        <Route path=":courseId" element={<CourseDetailsPage />} />
      </Routes>
    </div>
  );
}

// 🎯 Course Details Page
function CourseDetailsPage() {
  const { courseId } = useParams();
  const courseTitle = decodeURIComponent(courseId).replace(/-/g, ' ');
  return <CourseDetail courseTitle={courseTitle} />;
}

// 🧭 About Page
function AboutUsPage() {
  return (
    <>
      <AboutLanding />
      <AboutPage />
    </>
  );
}

// ⭐ Reviews Page
function ReviewsPage() {
  return <Testimonials2 />;
}

// 📞 Contact Page
function ContactPage() {
  return (
    <section id="contact" className="w-full bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-8">
          Reach out and we’ll get back to you shortly.
        </p>
        <form className="max-w-xl mx-auto bg-white border border-blue-100 rounded-2xl shadow p-6 space-y-4 text-left">
          <input className="w-full border rounded-md px-3 py-2" placeholder="Your Name" />
          <input className="w-full border rounded-md px-3 py-2" placeholder="Email" type="email" />
          <textarea className="w-full border rounded-md px-3 py-2" rows="4" placeholder="Message" />
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/*" element={<CoursesPage />} /> {/* ✅ fixed here */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
