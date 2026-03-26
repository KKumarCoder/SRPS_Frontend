import React from "react";
import { motion } from "framer-motion";
import {
  FaFlask,
  FaUserMd,
  FaShieldAlt,
  FaTrophy,
  FaBookOpen,
  FaFlag,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUsers,
} from "react-icons/fa";

const Quiz = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const programs = [
    {
      icon: FaFlask,
      title: "IIT-JEE",
      color: "orange",
      desc: "Expert coaching for India's top engineering entrance exam",
    },
    {
      icon: FaUserMd,
      title: "NEET-UG",
      color: "green",
      desc: "Comprehensive preparation for medical aspirants",
    },
    {
      icon: FaShieldAlt,
      title: "NDA",
      color: "blue",
      desc: "Rigorous training for defence services academy",
    },
    {
      icon: FaTrophy,
      title: "OLYMPIAD",
      color: "yellow",
      desc: "International level competitive exam preparation",
    },
    {
      icon: FaBookOpen,
      title: "Foundation",
      color: "orange",
      desc: "Strong conceptual base for classes 6-10",
    },
    {
      icon: FaFlag,
      title: "NCC",
      color: "green",
      desc: "Discipline and leadership through cadet training",
    },
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case "orange":
        return "bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white";
      case "green":
        return "bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white";
      case "blue":
        return "bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white";
      case "yellow":
        return "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-12"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            variants={fadeInUp}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-orange-100 rounded-full mb-6"
            >
              <span className="text-orange-600 font-semibold text-sm">
                #SR0 2026 Excellence Program
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-green-600 bg-clip-text text-transparent">
                कामयाब बनो ...
              </span>
              <br />
              <span className="text-gray-800">श्रीराम को चुनो !</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-8"
            >
              SR0 2026 • सर्वश्रेष्ठ का संकल्प
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
              >
                Enroll Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                View Programs
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <FaGraduationCap className="text-3xl text-blue-600 mx-auto mb-2" />
                    <p className="font-bold text-gray-800">IIT-JEE</p>
                    <p className="text-xs text-gray-500">Rank 1 Selection</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <FaUserMd className="text-3xl text-green-600 mx-auto mb-2" />
                    <p className="font-bold text-gray-800">NEET-UG</p>
                    <p className="text-xs text-gray-500">Top Performers</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-xl">
                    <FaShieldAlt className="text-3xl text-yellow-600 mx-auto mb-2" />
                    <p className="font-bold text-gray-800">NDA</p>
                    <p className="text-xs text-gray-500">Selection Record</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <FaTrophy className="text-3xl text-orange-600 mx-auto mb-2" />
                    <p className="font-bold text-gray-800">Olympiad</p>
                    <p className="text-xs text-gray-500">Gold Medalists</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container mx-auto px-4 md:px-6 py-20"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
          >
            Scan QR to Start SR0 Quiz
          </motion.h2>
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="text-xl text-gray-700 mb-12"
          >
            QR कोड स्कैन करके क्विज में भाग लें | Instant Quiz Access
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-8 rounded-3xl shadow-2xl max-w-md mx-auto border-4 border-orange-100"
          >
            <motion.img
              whileHover={{ scale: 1.05, rotate: 5 }}
              src="./QuizStart.png"
              alt="Quiz Start QR Code - स्कैन करके क्विज शुरू करें"
              className="w-48 h-48 mx-auto rounded-2xl shadow-xl md:w-64 md:h-64 block"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition"
            >
              Join Quiz Now →
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container mx-auto px-4 md:px-6 py-20"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Our Premier Programs
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive coaching for competitive excellence with expert
            faculty and proven methodologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div
                  className={`w-16 h-16 rounded-xl ${getColorClasses(program.color)} flex items-center justify-center mb-5 transition-colors duration-300`}
                >
                  <program.icon className="text-2xl group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600">{program.desc}</p>
                <div className="mt-4 flex items-center text-orange-500 font-semibold text-sm">
                  Learn more →
                </div>
              </div>
              <div
                className={`h-1 w-full bg-gradient-to-r from-${program.color}-400 to-${program.color}-600`}
              ></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* QR Code Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 md:px-6 py-20 bg-gradient-to-r from-yellow-50 to-orange-50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
          >
            Scan QR to Start SR0 Quiz
          </motion.h2>
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="text-xl text-gray-700 mb-12"
          >
            QR कोड स्कैन करके क्विज में भाग लें | Instant Quiz Access
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-8 rounded-3xl shadow-2xl max-w-md mx-auto border-4 border-orange-100"
          >
            <motion.img
              whileHover={{ scale: 1.05, rotate: 5 }}
              src="./QuizStart.png"
              alt="Quiz Start QR Code - स्कैन करके क्विज शुरू करें"
              className="w-48 h-48 mx-auto rounded-2xl shadow-xl md:w-64 md:h-64 block"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition"
            >
              Join Quiz Now →
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* SR0 2026 Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 md:px-6 py-8"
      >
        <div className="bg-gradient-to-r from-blue-600 via-orange-500 to-green-600 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center">
            <motion.h3
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              SR0 2026
            </motion.h3>
            <p className="text-white/90 text-lg md:text-xl mb-6">
              श्रीराम ओलंपियाड 2026 • Mega Scholarship Test
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition"
            >
              Register for SR0 2026
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-4 md:px-6 py-20"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-orange-500">Shree Ram</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Setting benchmarks in educational excellence since inception
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FaChalkboardTeacher,
              title: "Expert Faculty",
              desc: "Highly qualified teachers with IIT/NIT/Medical backgrounds",
              color: "blue",
            },
            {
              icon: FaTrophy,
              title: "Proven Results",
              desc: "Consistent top ranks in JEE, NEET, and Olympiads",
              color: "orange",
            },
            {
              icon: FaUsers,
              title: "Holistic Growth",
              desc: "Personality development, NCC training, and sports",
              color: "green",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-100"
            >
              <div
                className={`w-20 h-20 mx-auto rounded-full bg-${item.color}-100 flex items-center justify-center mb-5`}
              >
                <item.icon className={`text-3xl text-${item.color}-600`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-50 via-orange-50 to-green-50 py-16"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Make your child a part of the{" "}
            <span className="text-orange-500">Best CBSE School in Badhra</span>
          </motion.h2>
          <motion.p
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
          >
            Limited seats available for academic session 2026-27
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition"
          >
            Admission Open 2026
          </motion.button>
        </div>
      </motion.section>

     
    </div>
  );
};

export default Quiz;
