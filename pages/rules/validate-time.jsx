import ValidateForm from "form-validation-react";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Dots from "../../public/images/dots.svg";
import Logo from "../../public/images/logo.png";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { TbCopy } from "react-icons/tb";
import { BsCheck } from "react-icons/bs";
import WebsiteImage from "../../public/images/website.png";

function validatedate() {
  const customModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border:"none",
    },
  };

  const codeStyles = {
    fontSize: "16px",
    lineHeight: "1.5",
    overflowY: "scroll",
    width: "100%",
    padding: "30px 40px",
    marginBottom: "20px",
    borderRadius: "8px",
  };

  useEffect(() => {
    Modal.setAppElement("#my-rule-element");
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);
  let [isCopied, setIsCopied] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const code = `ValidateTime: {
    when: 'onblur', // required
    input: 'time-input', // required
    customErrorMessages: {
      invalidFormat: 'Invalid time format, please enter time in the format HH:mm',
      invalidRange: 'Time is out of range, please enter a valid time',
      invalidInterval: 'Time is not within the specified interval, please enter a valid time',
      invalidTimezone: 'Invalid timezone, please enter a valid timezone',
    },
    timeRange: {
      startTime: '08:00',
      endTime: '17:00',
    },
    timeInterval: {
      startInterval: 480,
      endInterval: 1020,
    },
    timezone: 'America/New_York'
  }`;

  const htmlcode = ``;

  return (
    <div id="my-rule-element" className="w-full h-screen flex justify-center">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Example Modal"
      >
        <p className="text-md font-[500] mb-3">Paste this in rules section</p>
        <div className="relative">
          <SyntaxHighlighter
            language="javascript"
            style={coldarkDark}
            customStyle={codeStyles}
          >
            {code}
          </SyntaxHighlighter>
          <span
            onClick={() => {
              setIsCopied(true);
              navigator.clipboard.writeText(code);
              setTimeout(() => {
                setIsCopied(false);
              }, 1000);
            }}
            className={`absolute right-8 top-8 text-2xl flex -mt-3  ${
              isCopied ? "text-green-500" : "text-slate-400 hover:text-white"
            }  cursor-pointer transition-colors`}
          >
            {isCopied ? <BsCheck /> : <TbCopy />}{" "}
          </span>
        </div>
        {
          // HTML CODE
          htmlcode ? (
            <div className="relative">
              <SyntaxHighlighter
                language="html"
                style={coldarkDark}
                customStyle={codeStyles}
              >
                {htmlcode}
              </SyntaxHighlighter>
            </div>
          ) : (
            ""
          )
        }

        <p className="text-md font-[500]">
          <span
            onClick={() =>
              window.open(
                "https://npmjs.com/package/form-validation-react#validate-time"
              )
            }
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Official documentation
          </span>{" "}
          for Know more about this function
        </p>
      </Modal>

      <Head>
        <title>Validate Time Input - React</title>
        <link rel="icon" href={Logo.src} />
        <meta name="description" content="This function is designed to validate time inputs according to the specified rules. It checks for valid time format, valid time range, valid timezone and whether the time falls within a specified interval." />
        <meta
          property="og:image"
          content={WebsiteImage.src}
        />
      </Head>

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

      <div className="h-full w-[600px]  pt-12 flex flex-col items-center">
        <div className="min-w-full  pt-3 pb-6 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "just", delay: 0 }}
            className="text-4xl font-[700]"
          >
            Validate Time Input
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "just", delay: 0.2 }}
            className="mt-6 text-xl font-[500] text-slate-500 text-center"
          >
            This function is designed to validate time inputs according to the specified rules. It checks for valid time format, valid time range, valid timezone and whether the time falls within a specified interval.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "just", delay: 0.3 }}
          className="w-full h-14 shadow-lg bg-white mt-4 border-t border-x py-4 rounded-t-xl flex"
        >
          <div className="w-1/2 h-full flex items-center justify-start px-6">
            <h1 className="text-xl font-[600]">Example</h1>
          </div>
          <div className="w-1/2 h-full flex items-center justify-end px-6">
            <button
              onClick={openModal}
              className="py-1 hover:opacity-80 transition-opacity px-5 text-md border border-indigo-600 text-white bg-indigo-600 rounded-lg font-[500]"
            >
              Get code
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "just", delay: 0.3 }}
          className="w-full pb-14 shadow-lg  rounded-b-xl flex justify-center border bg-white "
        >
          <ValidateForm
            errorElement="#signup_error_element"
            rules={{
                ValidateTime: {
                    when: 'typing', // required
                    input: 'time-input', // required
                    customErrorMessages: {
                      invalidFormat: 'Invalid time format, please enter time in the format HH:mm',
                      invalidRange: 'Please enter time between 08:00 - 05:00',
                      invalidTimezone: 'Invalid timezone, please enter a valid timezone',
                    },
                    timeRange: {
                      startTime: '08:00',
                      endTime: '17:00',
                    },
                    
                    timezone: 'America/New_York'
                  }
            }}
          >
            <form className="sm:w-[500px] w-full  flex flex-col items-center ">
              <p
                id="signup_error_element"
                className=" mb-6 font-[500] mt-6 text-sm text-red-500"
              ></p>

              <div className="w-full   flex flex-col items-center">
                <div className="w-full  font-bold flex flex-col">
                  <label className="text-sm" htmlFor="email">
                  When to have your birthday party? Ex. 09:00PM
                  </label>
                  <input
                    required
                    type="time"
                    name="time-input"
                    id="time-input"
                    placeholder="Ex. 12.988 or 126"
                    className="font-[500] outline-none rounded-lg border pl-4 py-3 border-slate-200 placeholder:text-slate-500  transition-all mt-2  "
                  />
                </div>

                <div className="w-full mt-8 font-bold flex flex-col">
                  <label className="text-sm" htmlFor="confirm_email">
                    Email
                  </label>
                  <input
                    disabled
                    required
                    type="email"
                    name="email"
                    id="confirm_email"
                    placeholder="Your website"
                    className="font-[500] outline-none rounded-lg border pl-4 py-3 border-slate-200 placeholder:text-slate-500  transition-all mt-2  "
                  />
                </div>

                <div className="w-full mt-8 font-bold flex flex-col">
                  <label className="text-sm" htmlFor="password">
                    Create a password
                  </label>
                  <input
                    disabled
                    required
                    type="another"
                    name="another"
                    id="anotjer"
                    placeholder="Create a password."
                    className="font-[500] outline-none rounded-lg border pl-4 py-3 border-slate-200 placeholder:text-slate-500  transition-all mt-2  "
                  />
                </div>

                <div className="w-full mt-8 font-bold flex flex-col">
                  <label className="text-sm" htmlFor="password">
                    What should we call you?
                  </label>
                  <input
                    required
                    disabled
                    type="text"
                    name="profile_name"
                    id="profile_name"
                    placeholder="Enter a profile name."
                    className="font-[500] outline-none rounded-lg border pl-4 py-3 border-slate-200 placeholder:text-slate-500  transition-all mt-2  "
                  />
                </div>

                <button
                  type="submit"
                  className="py-1.5 hover:opacity-80 transition-opacity px-10 mt-6 text-xl border border-indigo-600 text-white bg-indigo-600 rounded-lg font-[500]"
                >
                  Signup
                </button>
              </div>
            </form>
          </ValidateForm>
        </motion.div>
      </div>
    </div>
  );
}

export default validatedate;
