import React from "react";
import { motion } from "framer-motion";
import g1 from "../images/g1.png";

const teamMembers = [
  {
    name: "Gaurav Bindal",
    role: "Founder & Head Instructor",
    image: g1, // replace with your actual image path
    bio: `Fueled by an unwavering passion for aviation, Gaurav Bindal has dedicated over 7 years to training and inspiring future pilots. With a Master’s degree in Aeronautical Engineering from Moscow Institute of Physics and Technology, he combines exceptional technical expertise with educational excellence. As the former Head of Training at Insight Aviation, he has guided hundreds of aspiring aviators, achieving a 100% success rate in DGCA CPL examinations.

Gaurav brings a perspective few can rival—after all, who better to unravel the aerodynamic principles of flight, the breathing of an engine and the intricate workings of aircraft systems than an engineer who understands their design at its core? He is on a mission to shape skilled, confident aviators who will lead the skies of tomorrow with innovation and precision.`
  }
  // You can add more team members here later
];

export const FounderCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-white shadow-2xl p-8 flex flex-col md:flex-row items-center gap-6 w-full"
  >
    {/* Team Member Image */}
    <img
      src={teamMembers[0].image}
      alt={teamMembers[0].name}
      className="w-64 h-64 object-contain bg-white shadow-lg flex-shrink-0 p-1"
    />

    {/* Team Member Info */}
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-2xl font-bold text-gray-900">
        {teamMembers[0].name}
      </h3>
      <p className="text-blue-700 font-medium mt-1">
        {teamMembers[0].role}
      </p>
      <p className="text-gray-600 mt-4 leading-relaxed whitespace-pre-line">
        {teamMembers[0].bio}
      </p>
    </div>
  </motion.div>
);

const AboutLanding = () => {
  return (
    <section id="about" className="w-full bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h2>
        </div>
        {/* Founder profile */}
        <FounderCard />
      </div>
    </section>
  );
};

export default AboutLanding;
