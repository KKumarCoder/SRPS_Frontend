import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            WELCOME TO SHREE RAM PUBLIC SCHOOL
          </h2>

          <p className="text-gray-700 mb-4">
            Shree Ram Public School is a premier educational institution,
            established in 2012, located in the peaceful village of Kanhra,
            Charkhi Dadri. Our campus is spread over 3 acres with a focus on
            holistic education. We are affiliated with CBSE and consistently
            ranked among the top schools in the region.
          </p>

          <p className="text-gray-700 mb-6">
            Our eco-friendly campus operates with modern facilities, and we are
            committed to nurturing young minds to become future leaders.
          </p>

          <Link
            to="/about"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
          >
            Read More
          </Link>
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <video
            src="/School_Video/ShreeRamPublic.mp4"
            className="rounded-lg shadow-xl w-full h-auto"
            autoPlay
            loop
            muted
            playsInline
            controls={false} // change to true if you want controls
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
