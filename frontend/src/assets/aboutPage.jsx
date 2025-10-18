import React from "react";
import userImg from "../images/user.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Gaurav Bindal",
    role: "Founder & Head Instructor",
    image: userImg, // replace with actual image path or import your local image
    description:
      "With 7+ years of aviation training experience and a Master’s in Aeronautical Engineering from MIPT, Gaurav has guided hundreds of pilots to success, achieving a 100% DGCA exam pass rate.",
  },
  {
    name: "Jane Doe",
    role: "Co-Instructor",
    image: userImg,
    description:
      "Jane specializes in Air Navigation and Meteorology. Her teaching simplifies complex aviation concepts for students globally.",
  },
  {
    name: "Rahul Sharma",
    role: "Flight Systems Mentor",
    image: userImg,
    description:
      "Rahul focuses on flight systems and aircraft performance, helping students connect theory to real cockpit applications.",
  },
];

const features = [
  {
    title: "Customized Timings",
    text: "We understand your schedule! Choose class timings that fit your routine.",
  },
  {
    title: "Concept Building",
    text: "We emphasize deep understanding and subject mastery over rote learning.",
  },
  {
    title: "Small Batch Size",
    text: "5–6 students per batch ensures personalized attention and 1:1 mentorship.",
  },
  {
    title: "Learn From Experts",
    text: "With 7+ years of experience and 100% DGCA pass rate, our instructors ensure your success.",
  },
  {
    title: "Study Material",
    text: "Comprehensive notes, question banks, and mock tests designed for exam excellence.",
  },
  {
    title: "Lifetime Career Guidance",
    text: "Get lifelong support and mentorship throughout your aviation journey.",
  },
  {
    title: "Online Classes",
    text: "Attend live, interactive sessions from the comfort of your home.",
  },
  {
    title: "Personalized Schedule",
    text: "Tailored class plans that adapt to your personal and professional needs.",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="py-20 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-8">
          
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            </div>
          
        </div>
      </section>

      {/* Meet Our Team - Carousel Effect */}
      <section className="py-16 bg-white" id="team">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Meet Our Team
        </h2>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            loop
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center bg-blue-50 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mb-6 object-cover shadow-md"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 mb-3 font-medium">
                    {member.role}
                  </p>
                  <p className="text-gray-700 max-w-xl mx-auto text-base leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      
      {/* Our Vision */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Our vision is to set new standards in aviation education. We aim to
          nurture competent, knowledgeable, and confident pilots who excel not
          only in DGCA examinations but also contribute meaningfully to the
          aviation industry. 🚀✈️
        </p>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          At Technical Pilot, our mission is to empower aspiring aviators with
          in-depth knowledge and critical skills that go beyond merely clearing
          exams. We focus on building a strong conceptual foundation in every
          subject, enabling students to master the intricacies of aviation and
          tackle real-world challenges with confidence.
        </p>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Us
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
