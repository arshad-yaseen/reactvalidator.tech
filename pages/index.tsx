import type { NextPage } from "next";
import Head from "next/head";

import ExampleSection from "../components/ExampleSection";
import Footer from "../components/Footer";
import Logo from "../public/images/logo.png";
import WebsiteImage from "../public/images/website.png";
import { AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import Dots from "../public/images/dots.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  let route = useRouter();

  return (
    <div className="flex min-h-screen flex-col ">
      <Head>
        <title>Form Validation React - Less Code</title>
        <link rel="icon" href={Logo.src} />
        <meta
          name="description"
          content="Improve your React form validation with ease using form-validation-react - a powerful npm library designed to add customizable validation rules to your form inputs. From required fields to email formats and custom rules, this user-friendly tool offers a range of validation functions and options that can be tailored to suit your unique needs. Try form-validation-react today and streamline your form validation process!"
        />
        <meta property="og:title" content="Easiest Form Validator for React" />
        <meta
          property="og:description"
          content="Improve your React form validation with ease using Form validator react"
        />
        <meta property="og:image" content={WebsiteImage.src} />
        <meta
          name="keywords"
          content="React form validation, Form validation in React, Validate forms in React, Best form validation library for React, Easy form validation in React, React form validation made simple, React form validation tutorial, Simple React form validation, How to validate forms in React, Validating forms with React, React form validation examples, React form validation patterns, React form validation library, Powerful form validation for React, Advanced form validation in React, Secure form validation in React, Reliable form validation for React, Top React form validation library, react form validation, form validation library, form validation npm, react form validation library, react form validation npm, form validation component, react form validator, form validation reactjs, react form validation package, form validation for react, best form validation library, easy form validation, simple form validation, form validation made easy, validate react form inputs, input validation in react, react input validation library, form validation helper for react, validate forms with react, React form validation with Yup, React form validation using Formik, React form validation with hooks, React form validation without library, React form validation error messages, React form validation onBlur, React form validation onChange, React form validation onSubmit, React form validation best practices, React form validation tips, React form validation tricks, React form validation input types, React form validation regex, React form validation internationalization, React form validation custom rules, React form validation server-side, React form validation client-side, React form validation live validation, React form validation debounce, React form validation conditional validation, React form validation dynamic validation, React form validation nested forms, React form validation multi-step forms, React form validation with Redux-form."
        />
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="reactvalidator"
          data-description="Support me on Buy me a coffee!"
          data-message="Thankyou for visiting. now you can support this project"
          data-color="#40DCA5"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </Head>

      <main className="flex flex-col items-center justify-center pt-16">
        <Image
          src={Dots}
          alt="dots"
          className="opacity-10 -left-44 -top-[400px] absolute"
        />
        <Image
          src={Dots}
          alt="dots"
          className="opacity-10 -right-44 -bottom-[400px] absolute"
        />

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "just" }}
          className="text-6xl font-[900] text-center"
        >
          The Easiest Form <br /> Validator for{" "}
          <span className="border-b-4 border-indigo-600 ">React</span>. Less
          code
        </motion.h1>
        <div className="w-full h-full flex justify-center items-center mt-16">
          <motion.button
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "just" }}
            onClick={() =>
              window.open("https://www.buymeacoffee.com/arshadyaseen")
            }
            className="py-2.5 hover:opacity-80 transition-opacity px-10 text-xl border border-slate-400 mr-4 flex items-center text-slate-400 rounded-lg font-[500]"
          >
            <div className="flex items-center justify-center mr-2">
              <AiOutlineHeart />
            </div>{" "}
            Sponsor
          </motion.button>
          <motion.button
            onClick={() => route.push("/install")}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "just" }}
            className="py-2.5 hover:opacity-80 transition-opacity px-10 text-xl border border-indigo-600 text-white bg-indigo-600 rounded-lg font-[500]"
          >
            Get started
          </motion.button>
        </div>
        <div className="w-full h-full flex justify-center mt-14 ">
          <motion.video
            initial={{ y: 140, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "just" }}
            muted
            autoPlay
            loop
            className="h-auto w-[800px]  rounded-t-xl border-t border-x border-t-slate-200 border-x-slate-200"
            src="/herovideo.mp4"
          ></motion.video>
        </div>
      </main>
      <ExampleSection />
      <Footer />
    </div>
  );
};

export default Home;
