"use client";
import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const stackDescriptions = [
  "NextJS, ReactJS, TailwindCSS",
  "VScode, Figma, Git",
  "HTML, SCSS, JS",
  "NextJS, ReactJS, TailwindCSS",
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Home() {
  const [stack, setStack] = useState(stackDescriptions[genRandomInt(2)]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStack(stackDescriptions[genRandomInt(2)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 5 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="md:min-h-screen min-h-screen flex flex-col items-center justify-center"
    >
      <Header />

      <div className="flex flex-1 hero-content w-full flex-col lg:flex-row gap-6 ">
        <div className="hero-content w-full flex flex-col lg:flex-row gap-8 md:gap-14  pt-16 md:pt-0 h-auto md:h-96">
          <div className="flex flex-col pt-4  h-full justify-evenly ">
            <img
              src="../images/me4.jpg"
              className="md:max-w-64 max-w-40 rounded-full shadow-2xl mb-2"
            />
            <div className="flex flex-row gap-3 justify-center ">
              <a href="https://github.com/mahita098" target="_blank">
                <svg
                  className="md:w-8 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.5 10.5 0 0 1 12 6.32a10.5 10.5 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mahita-ramgolam-ba5011157/"
                target="_blank"
              >
                <svg
                  className="md:w-8 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M22.037 22h-4.152v-6.496c0-1.55-.026-3.542-2.157-3.542c-2.16 0-2.49 1.688-2.49 3.43V22H9.09V8.64h3.98v1.827h.058c.553-1.05 1.908-2.158 3.928-2.158c4.204 0 4.98 2.766 4.98 6.364zM4.409 6.816A2.407 2.407 0 0 1 2 4.407a2.408 2.408 0 1 1 2.41 2.408M6.486 22H2.33V8.64h4.156z"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com/mahi.xr?igshid=ZDdkNTZiNTM="
                target="_blank"
              >
                <svg
                  className="md:w-8 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17.318.077c1.218.056 2.06.235 2.838.537a5.4 5.4 0 0 1 1.956 1.274a5.4 5.4 0 0 1 1.274 1.956c.302.779.481 1.62.537 2.838C23.992 8.192 24 8.724 24 12s-.008 3.808-.077 5.318c-.056 1.218-.235 2.06-.537 2.839a5.4 5.4 0 0 1-1.274 1.955a5.4 5.4 0 0 1-1.956 1.274c-.779.302-1.62.481-2.838.537c-1.51.069-2.041.077-5.318.077s-3.809-.008-5.318-.077c-1.218-.056-2.06-.235-2.839-.537a5.4 5.4 0 0 1-1.955-1.274a5.4 5.4 0 0 1-1.274-1.956c-.302-.779-.481-1.62-.537-2.838C.008 15.81 0 15.278 0 12s.008-3.81.077-5.318c.056-1.218.235-2.06.537-2.838a5.4 5.4 0 0 1 1.274-1.956A5.4 5.4 0 0 1 3.843.614C4.623.312 5.464.133 6.682.077C8.19.008 8.722 0 12 0s3.81.008 5.318.077M12 2.667c-3.24 0-3.736.007-5.197.074c-.927.042-1.483.16-1.994.359c-.435.17-.712.35-1.036.673S3.27 4.374 3.1 4.81c-.198.51-.317 1.067-.359 1.994c-.067 1.46-.074 1.956-.074 5.196s.007 3.736.074 5.197c.042.927.16 1.483.359 1.993c.17.436.35.713.673 1.037s.601.504 1.036.673c.51.198 1.067.317 1.994.359c1.462.067 1.958.074 5.197.074c3.24 0 3.735-.007 5.197-.074c.927-.042 1.483-.16 1.994-.359c.435-.17.712-.35 1.036-.673s.504-.601.673-1.036c.198-.51.317-1.067.359-1.994c.067-1.462.074-1.958.074-5.197s-.007-3.735-.074-5.197c-.042-.927-.16-1.483-.359-1.993a2.7 2.7 0 0 0-.673-1.037A2.7 2.7 0 0 0 19.19 3.1c-.51-.198-1.067-.317-1.994-.359c-1.461-.067-1.957-.074-5.197-.074m0 15.555a6.222 6.222 0 1 1 0-12.444a6.222 6.222 0 0 1 0 12.444m0-2.666a3.556 3.556 0 1 0 0-7.112a3.556 3.556 0 0 0 0 7.112m6.222-8.445a1.333 1.333 0 1 1 0-2.667a1.333 1.333 0 0 1 0 2.667"
                  />
                </svg>
              </a>

              <a href="mailto:mahita098@gmail.com" target="_blank">
                <svg
                  className="md:w-8 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M23 20V6l-11 9L1 6v14zm-11-8l10-8H2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-evenly text-center md:text-left mx-auto space-y-4 md:space-y-3  md:pt-9 pt-0  h-full">
            <h1 className="md:text-5xl text-3xl font-bold pb-2 md:pb-0 bg-gradient-to-br bg-clip-text text-transparent from-gradient-start via-gradient-mid to-gradient-end">
              Hi, i’m Mahita,<br></br>
              <span className="md:text-5xl text-3xl font-bold ">
                a Front-end Developer.
              </span>
            </h1>
            <p className="text-xl md:text-2xl mt-0 text-justify md:text-left custom-text-align-last md:custom-text-align-start">
              Learning, improving and building beautiful and interactive
              websites. I’m constantly driven to expand my knowledge and enhance
              my frontend skills.
            </p>
            <p className="font-semibold text-xl md:text-2xl">
              TechStacks : {stack}
            </p>
            <button className="btn btn-primary w-fit mx-auto md:mx-0 md:self-start">
              <a href="projects">Projects</a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
