import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { courses } from "../data/coursesData";

const CoursesMain = () => {
  return (
    <section className="w-full bg-gradient-to-b from-indigo-50 to-white py-20" id="courses-main">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          Our Courses
        </h2>

        <div className="flex flex-col gap-12">
          {courses.map((course, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -150 : 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 bg-white border border-indigo-200 rounded-2xl shadow-md hover:shadow-xl hover:shadow-indigo-200/60 transition-all overflow-hidden ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Course Image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full md:w-1/2 h-64 object-cover"
                />

                {/* Course Content */}
                <div className="p-8 md:w-1/2">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-3 hover:text-indigo-700 transition">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 text-base mb-6">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      to={`/courses/${encodeURIComponent(
                        course.title.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition"
                    >
                      View Details
                    </Link>
                    <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-lg font-medium transition">
                      Enroll
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesMain;
