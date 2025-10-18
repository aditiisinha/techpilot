import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/coursesData";

const CoursesSection = () => {
  return (
    <section
      className="w-full bg-gradient-to-b from-indigo-50 to-white py-16"
      id="courses"
    >
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Courses We Offer
        </h2>

        {/* ✅ Grid Layout: 2 cards in first row, 3 in second */}
        <div className="flex flex-col items-center">
          {/* First row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            {courses.slice(0, 2).map((course, index) => (
              <div
                key={index}
                className="group bg-white border border-indigo-200 shadow-md hover:shadow-xl hover:shadow-indigo-200/60 transition-all rounded-2xl overflow-hidden w-[300px] hover:bg-indigo-50/40"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-indigo-700">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {course.description.slice(0, 100)}...
                  </p>
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/courses/${encodeURIComponent(
                        course.title.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium"
                    >
                      View Details
                    </Link>
                    <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-lg font-medium">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.slice(2).map((course, index) => (
              <div
                key={index + 2}
                className="group bg-white border border-indigo-200 shadow-md hover:shadow-xl hover:shadow-indigo-200/60 transition-all rounded-2xl overflow-hidden w-[300px] hover:bg-indigo-50/40"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-indigo-700">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {course.description.slice(0, 100)}...
                  </p>
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/courses/${encodeURIComponent(
                        course.title.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium"
                    >
                      View Details
                    </Link>
                    <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-lg font-medium">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
