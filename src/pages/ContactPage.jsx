import React from "react";
import { motion } from "framer-motion";
import EnquiryButton from "../components/EnquiryButton.jsx";

export default function ContactPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#134F5C]">
      {/* HERO */}
      <section className="bg-[#134F5C] text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Shaping Futures with Values, Knowledge & Excellence
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-[#E8B97A]">
          At Shree Ram Public School, we nurture young minds with strong moral
          values, academic excellence, and innovation to prepare them for a
          successful future.
        </p>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto -mt-12 bg-white shadow-xl rounded-3xl p-10 mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">
          About Our School
        </h2>
        <p className="text-gray-600 text-center mb-10">
          We blend traditional values with modern education to ensure holistic
          development of every child.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-3">📚 Academics</h3>
            <ul className="space-y-2 text-sm">
              <li>CBSE Curriculum</li>
              <li>Smart Classrooms</li>
              <li>Regular Assessments</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">🧪 Laboratories</h3>
            <ul className="space-y-2 text-sm">
              <li>Science Labs</li>
              <li>Computer Lab</li>
              <li>ATL Innovation Lab</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">🎭 Activities</h3>
            <ul className="space-y-2 text-sm">
              <li>Sports & Games</li>
              <li>Music & Dance</li>
              <li>Cultural Events</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ENHANCED CONTACT SECTION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 mb-20">
        {/* LEFT - ENHANCED DETAILS + CTAs */}
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 shadow-2xl rounded-3xl p-10 border border-teal-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black bg-gradient-to-r from-teal-700 to-blue-700 bg-clip-text text-transparent mb-3">
              📍 Get In Touch
            </h3>
            <p className="text-teal-800 font-semibold">
              Multiple ways to connect with us
            </p>
          </div>

          <div className="space-y-6 text-gray-700 mb-8">
            <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl backdrop-blur-sm border border-teal-100">
              <FiMapPin className="text-2xl text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-teal-900">Village Kanhra</p>
                <p className="text-sm">Charkhi Dadri, Haryana – 127308</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl backdrop-blur-sm border border-teal-100">
              <FiPhone className="text-2xl text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-green-900">+91-8199991081</p>
                <p className="text-sm text-gray-600">Available 8 AM - 5 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl backdrop-blur-sm border border-teal-100">
              <FiMail className="text-2xl text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-blue-900">srpskanhra@gmail.com</p>
                <p className="text-sm text-gray-600">
                  Response within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="space-y-3">
            <EnquiryButton fullWidth className="!text-lg !py-4 shadow-2xl">
              🚀 Start Enquiry
            </EnquiryButton>
            <EnquiryButton
              className="!bg-gradient-to-r !from-slate-600 !to-slate-700 !text-slate-50 hover:!from-slate-700 hover:!to-slate-800 shadow-xl"
              fullWidth
            >
              📞 Call Now
            </EnquiryButton>
          </div>
        </div>

        {/* RIGHT - HIGHLIGHTS */}
        <div className="space-y-8">
          <div className="bg-white shadow-xl rounded-3xl p-8 border-4 border-teal-100">
            <h3 className="text-2xl font-black text-teal-900 mb-6 text-center">
              🏫 Why Choose Us?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-teal-900">
              <div className="space-y-3">
                <h4 className="font-bold text-xl flex items-center gap-2">
                  📚 <span>Academics</span>
                </h4>
                <ul className="text-sm space-y-1 pl-4">
                  <li className="flex items-center gap-2">
                    ✅ CBSE Curriculum
                  </li>
                  <li className="flex items-center gap-2">
                    ✅ Smart Classrooms
                  </li>
                  <li className="flex items-center gap-2">✅ 95%+ Results</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-xl flex items-center gap-2">
                  🏆 <span>Achievements</span>
                </h4>
                <ul className="text-sm space-y-1 pl-4">
                  <li className="flex items-center gap-2">
                    ✅ Sports Excellence
                  </li>
                  <li className="flex items-center gap-2">
                    ✅ ATL Lab Certified
                  </li>
                  <li className="flex items-center gap-2">✅ NCC Unit</li>
                </ul>
              </div>
            </div>
            <EnquiryButton
              className="!mt-6 !w-full !shadow-2xl !text-lg"
              fullWidth
            >
              Ask About Admissions
            </EnquiryButton>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border-4 border-yellow-200 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-yellow-900">24/7</span>
              </div>
              <div>
                <h4 className="font-bold text-xl text-amber-900">
                  Support Ready
                </h4>
                <p className="text-sm text-amber-800">
                  Enquiries answered within 2 hours
                </p>
              </div>
            </div>
            <EnquiryButton
              fullWidth
              className="!bg-gradient-to-r !from-amber-500 !to-yellow-500 !shadow-xl"
            >
              Quick Enquiry
            </EnquiryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
