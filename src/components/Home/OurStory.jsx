import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomeButton from '../ui/CustomeButton';

const OurStory = () => {
  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      content: "Founded with a vision to revolutionize Supply Chain Finance by integrating both funding and technology solutions.",
      image: "/images/blog/5.png",
      sizes: {
        mobile: { width: 640, height: 480 },
        tablet: { width: 800, height: 600 },
        desktop: { width: 1024, height: 768 }
      }
    },
    {
      year: "2015-2020",
      title: "$150B+ Impact",
      content: "Achieved over $150 billion in trading volume and $2 billion in outstanding results through our integrated approach.",
      image: "/images/blog/3.png",
      sizes: {
        mobile: { width: 640, height: 480 },
        tablet: { width: 800, height: 600 },
        desktop: { width: 1024, height: 768 }
      }
    },
    {
      year: "Today",
      title: "Global Leader",
      content: "Recognized as an industry leader with 100+ SCF programs implemented globally, serving corporates, financial institutions, and Fintechs.",
      image: "/images/blog/4.png",
      sizes: {
        mobile: { width: 640, height: 480 },
        tablet: { width: 800, height: 600 },
        desktop: { width: 1024, height: 768 }
      }
    }
  ];

  // Responsive image component with loading animation
  const ResponsiveImage = ({ src, alt, sizes, priority = false, className = "" }) => {
    return (
      <div className="relative w-full h-0 pb-[75%]"> {/* 4:3 aspect ratio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={alt}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover ${className}`}
            fill
            priority={priority}
            quality={90}
          />
        </motion.div>
      </div>
    );
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-6 md:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-title mb-4 sm:mb-6">Our Journey of Innovation</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base px-4">
            Transforming Supply Chain Finance through integrated solutions, expertise, and innovation since 2015.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-4 sm:mb-8 lg:mb-10"
        >
          
          
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-title">Pioneering Integrated Solutions</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">
              Founded in 2015, SCF Strategies emerged from the recognition that traditional Supply Chain Finance providers typically offer either funding or technology, but rarely both in an integrated manner. <br /> With over 15 years of experience, we&apos;ve revolutionized the industry by combining best practice processes with cutting-edge technology and robust funding capacity.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className=" p-4 sm:p-6 rounded-lg sm:rounded-xl bg-title shadow-md sm:shadow-lg"
              >
                <h4 className="text-2xl sm:text-4xl font-bold text-blue-100 mb-1 sm:mb-2">$150B+</h4>
                <p className="text-gray-100 text-sm sm:text-base">Trading Volume</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-title p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"
              >
                <h4 className="text-2xl sm:text-4xl font-bold text-blue-100 mb-1 sm:mb-2">100+</h4>
                <p className="text-gray-100 text-sm sm:text-base">Global Programs</p>
              </motion.div>
            </div>
          </div>
          <div className="w-full  sm:rounded-2xl overflow-hidden ">
            <ResponsiveImage
              src="/images/team-image2.png"
              alt="SCF Strategies Headquarters"
              sizes={{
                mobile: { width: 640, height: 480 },
                tablet: { width: 800, height: 600 },
                desktop: { width: 1024, height: 768 }
              }}
              priority
              className="   transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Timeline Section */}
        <div className="space-y-8 sm:space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-6 sm:gap-8 items-center 
                         ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg">
                <ResponsiveImage
                  src={milestone.image}
                  alt={milestone.title}
                  sizes={milestone.sizes}
                  className="rounded-lg sm:rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-3 sm:space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm sm:text-base"
                >
                  {milestone.year}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-title">{milestone.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">{milestone.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-8 sm:mt-12 lg:mt-16 bg-blue-50 rounded-xl overflow-hidden relative sm:rounded-2xl p-6 sm:p-8 z-10 text-center"
  style={{ backgroundImage: "url('images/boxbg1.jpg')" }}
>
  {/* Adjust z-index to be lower than the content */}
  <div className="inset-0 absolute backdrop-blur-sm rounded-xl z-0"></div>

  {/* Content with higher z-index */}
  <h3 className="text-xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 relative z-10">
    Our Commitment to Excellence
  </h3>
  <p className="text-gray-100 max-w-3xl mx-auto md:text-lg text-sm sm:text-base relative z-10">
    Today, SCF Strategies is recognized as an industry leader in SCF consulting. <br /> 
    Our proven approach and methodology have successfully assessed markets and implemented programs, <br /> unlocking billions in working capital and free cash flow for leading companies worldwide.
  </p>
  
  {/* Button with higher z-index */}
  <div className="relative z-10">
    <CustomeButton title={"Learn More About Our Impact"} link={"/about-us"}/>
  </div>
</motion.div>

      </div>

      {/* Loading animation styles */}
      <style jsx global>{`
        @keyframes imageLoad {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .image-loading {
          animation: imageLoad 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default OurStory;