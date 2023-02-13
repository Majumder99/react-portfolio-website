import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import headImg from "../assets/profile-image.png";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <>
      <section
        id="home"
        className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
      >
        {/* IMAGE SECTION */}
        <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
          {isAboveMediumScreen ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="profile"
                className="hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                src={headImg}
              />
            </div>
          ) : (
            <img
              alt="profile"
              className="z-10 w-full max-w-[400px] md:max-w-[600px]"
              src={headImg}
            />
          )}
        </div>

        {/* MAIN SECTION  */}
        <div className="z-30 basis-2/3 mt-12 md:mt-32">
          {/* HEADINGS  */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amout: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-6xl font-playfair z-10 text-center md:text-start ">
              Jane{" "}
              <span
                className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
              >
                Esper
              </span>
            </p>
            <p className="mt-10 mb-7 text-sm text-center md:text-start">
              Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
              viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Landing;
