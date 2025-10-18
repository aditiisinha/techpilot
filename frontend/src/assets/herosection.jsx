// src/components/HeroSection.jsx
import React from "react";
import pilotImg from "../images/pilot.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 via-blue-50 to-sky-50 min-h-screen flex items-center">
      {/* Full-width white container */}
      <div className="w-full bg-white border border-blue-100 shadow-xl ring-1 ring-blue-100 rounded-none px-6 md:px-16 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* ✅ Left: Pilot Image (taller & better visual impact) */}
          <div className="flex-1 flex justify-center md:justify-start relative">
            <div className="relative bg-gradient-to-tr from-white to-white rounded-2xl shadow-inner p-4 overflow-hidden">
              <img
                src={pilotImg}
                alt="Pilot"
                className="w-[280px] md:w-[380px] lg:w-[420px] object-contain rounded-xl opacity-95"
                style={{
                  filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.08))",
                }}
              />
            </div>
          </div>

          {/* ✅ Right: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Welcome to <span className="text-blue-600">Technical Pilot</span>
            </h1>

            <p className="mt-5 text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Your gateway to mastering <strong>DGCA Ground Subjects</strong> with expert guidance, structured learning, and a clear path to your aviation dream. ✈️
            </p>

            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-5">
              <a
                href="/courses"
                className="bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-lg font-medium shadow-md transition-all duration-300"
              >
                Explore Courses
              </a>
              <a
                href="#enroll"
                className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-7 py-3 rounded-lg font-medium shadow-md transition-all duration-300"
              >
                Enroll Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
