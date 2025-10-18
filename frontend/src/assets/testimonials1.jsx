import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import userImg from "../images/user.png";

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Student Pilot",
    image: userImg,
    review: "TechnicalPilot helped me prepare for my DGCA exams efficiently. Highly recommended!",
  },
  {
    name: "Ananya Singh",
    role: "Aspiring Pilot",
    image: userImg,
    review: "The courses are structured and easy to follow. I feel confident about my training now.",
  },
  {
    name: "Vikram Joshi",
    role: "Student Pilot",
    image: userImg,
    review: "Instructors are very knowledgeable and supportive. Great learning experience!",
  },
  // Add more testimonials as needed
];

const LandingPageTestimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Trusted by Our Students</h2>
        <p className="text-gray-600 mb-12">See what our students have to say about TechnicalPilot.</p>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
                <p className="text-gray-700">{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LandingPageTestimonials;
