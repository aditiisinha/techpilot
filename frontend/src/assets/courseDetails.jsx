import React from "react";
import { motion } from "framer-motion";

// Import course data from data directory
import { courses } from "../data/coursesData";

const courseModules = [
  {
    title: "Principles of Flight",
    description:
      "Understand lift, drag, thrust, weight, control surfaces and basic flight maneuvers. Explore aerodynamic forces, stall behavior, and control inputs."
  },
  {
    title: "Powerplant",
    description:
      "Study piston and turbine engines, fuel systems, engine operations, and power generation relevant to DGCA exams."
  },
  {
    title: "Aircraft Systems",
    description:
      "Learn about hydraulics, pneumatics, landing gear, pressurization, fire protections, and critical aircraft systems."
  },
  {
    title: "Electrical Systems",
    description:
      "DC/AC generation, distribution, batteries, circuit protections, and avionics power principles."
  }
];

const CourseDetail = ({ courseTitle }) => {
  // Find the course with the matching title
  const course = courses.find(c => 
    c.title.toLowerCase() === courseTitle.toLowerCase()
  );

  // If course not found, show a message
  if (!course) {
    return (
      <section className="w-full min-h-screen bg-blue-50 text-slate-800 font-sans flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-indigo-700 mb-4">Course Not Found</h1>
          <p className="text-lg text-gray-600 mb-6">The requested course could not be found.</p>
          <a 
            href="/courses" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Back to Courses
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen bg-blue-50 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-12">
        {/* Hero / Intro Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-indigo-900 mb-4">{course.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {course.description}
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-blue-100 border border-blue-100"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 tracking-tight">
            {course.title}
          </h1>
          <p className="text-blue-700 font-medium mt-1">
            Master the Core of Aviation
          </p>
          <p className="text-slate-600 mt-4 leading-relaxed">
            {course.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#enroll"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
            >
              Enroll Now
            </a>
            <a
              href="#video"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-5 py-2 rounded-lg font-medium transition"
            >
              Watch Intro Video
            </a>
          </div>
        </motion.div>

        {/* Course Structure */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-12 bg-white border border-blue-100 ring-1 ring-blue-100 rounded-2xl shadow-md space-y-8"
      >
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Course Structure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {courseModules.map((module, idx) => (
            <div
              key={idx}
              className="p-5 bg-blue-50/40 border border-blue-100 rounded-xl shadow-sm hover:shadow-md hover:shadow-blue-200 transition"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {module.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{module.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-12 bg-white border border-blue-100 ring-1 ring-blue-100 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Why Choose Us
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-blue-400">
          <li>Experienced instructors with DGCA expertise.</li>
          <li>Comprehensive study material & mock tests included.</li>
          <li>Flexible online learning and recorded sessions.</li>
          <li>Practical insights bridging theory and real-world flying.</li>
          <li>Dedicated support for queries and exam preparation.</li>
        </ul>
      </motion.div>

      {/* Price & CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-xl"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-indigo-200 rounded-full opacity-20"></div>
        
        <div className="relative z-10">
          <div className="px-8 py-10 md:px-12 md:py-14">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    Limited Time Offer
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Start Your Aviation Journey Today
                  </h3>
                  
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold text-blue-700">₹45,000</span>
                    <span className="text-gray-500 line-through">₹55,000</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Save ₹10,000
                    </span>
                  </div>
                  
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Digital Notes & Study Material
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      DGCA Mock Tests & Question Bank
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Recorded Classes & Doubt Sessions
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Certificate of Completion
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full max-w-xs">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Enroll Now</h4>
                  <div className="space-y-4">
                    <a
                      href="#enroll"
                      className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      Pay Full Amount
                    </a>
                    <a
                      href="#installment"
                      className="w-full flex items-center justify-center px-6 py-3 border border-blue-600 rounded-lg shadow-sm text-base font-medium text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      Pay in Installments
                    </a>
                    <p className="text-xs text-center text-gray-500 mt-2">
                      Secure payment processing. 7-day money-back guarantee.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Lifetime Access
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Certificate of Completion
                  </div>
                  <a href="#talk" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Have questions? Chat with us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Course Video */}
      <motion.div
        id="video"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-12 bg-white border border-blue-100 ring-1 ring-blue-100 rounded-2xl shadow-md"
      >
        <h4 className="text-lg font-semibold text-blue-900 mb-4">Course Video</h4>
        <div className="aspect-video rounded-lg overflow-hidden shadow w-full max-w-xl md:max-w-2xl mx-auto">
          <iframe
            title="Course Intro"
            src="https://www.youtube.com/embed/qWl2fR_pR6A"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-4 flex gap-3 justify-center">
          <a
            href="#playlist"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Visit Playlist
          </a>
          <a
            href="#channel"
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Visit Channel
          </a>
        </div>
      </motion.div>

      {/* Final Enroll CTA */}
      <motion.div
        id="enroll"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <h5 className="text-xl font-semibold text-blue-900 mb-3">
          Ready to start?
        </h5>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Enroll today and get access to comprehensive DGCA-focused training,
          notes, mock tests and instructor support.
        </p>
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-blue-100 ring-1 ring-blue-100 rounded-2xl shadow-sm inline-block px-8 py-6">
            <a
              href="#enroll-form"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default CourseDetail;
