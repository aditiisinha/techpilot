import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import userImg from "../images/user.png";

const mainPageTestimonials = [
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
  {
    name: "Pooja Sharma",
    role: "Student Pilot",
    image: userImg,
    review: "Practical and theoretical courses are very well balanced. Amazing experience!",
  },
  // Add more testimonials as needed
];

const MainPageTestimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
        <p className="text-gray-600 mb-12">Hear from our pilots-in-training about their experience.</p>

        {/* One large div containing the entire carousel */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
          >
            {mainPageTestimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-left min-h-[280px] md:min-h-[340px]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-blue-600 mb-3">{testimonial.role}</p>
                    <p className="text-gray-700 leading-relaxed text-base">{testimonial.review}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Optional "See More Reviews" button */}
        <div className="mt-8">
          <a
            href="/testimonials"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            See More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainPageTestimonials;
