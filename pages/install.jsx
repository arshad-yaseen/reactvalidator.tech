import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { TbCopy } from "react-icons/tb";
import { BsCheck } from "react-icons/bs";
import Image from "next/image";
import Dots from "../public/images/dots.svg";
import { motion } from "framer-motion";
import Logo from "../public/images/logo.png";
import Head from "next/head";
import { useRouter } from "next/router";

function install() {
  let [isCopied, setIsCopied] = useState(0);

  let route = useRouter();

  const npmcode = `npm install form-validation-react`;
  const yarncode = `yarn add form-validation-react`;
  const usagecode = `
  import React from "react";
  import ValidateForm from "form-validation-react";
  
  const App = () => {
    return (
      <ValidateForm
        onSubmit={(event)=> console.log("Form submitted")}
        errorElement="#error_show_element"
        rules={{
            // add rules here
        }}
      >
        <form>
          <h1 id="error_show_element" ></h1> 
          <input type="email" required name="email-input" />
        </form>
      </ValidateForm>
    );
  };
  `;

  const codeStyles = {
    fontSize: "16px",
    lineHeight: "1.5",
    overflowY: "scroll",
    width: "100%",
    marginBottom: "20px",
    borderRadius: "8px",
  };

  return (
    <div className="w-full h-screen flex justify-center">
      <Head>
        <title>Install</title>
        <link rel="icon" href={Logo.src} />
        <meta
         name="description"
          content="Install. Wrap. Validated"
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

      <div className="h-full w-[600px]  pt-14">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "just", delay: 0 }}
          className="text-4xl font-[700] mb-6 flex "
        >
          Install
          <div initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "just" }} className="w-full flex justify-end">
          <button
            onClick={() => route.push("/rules")}
            className=" hover:opacity-80  transition-opacity px-6 text-[1rem] border border-indigo-600 text-white bg-indigo-600 rounded-lg font-[500]"
          >
            Go to Rules →
          </button>
        </div>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "just", delay: 0.1 }}
          className="flex relative items-center "
        >
          <SyntaxHighlighter
            language="bash"
            style={oneLight}
            customStyle={codeStyles}
          >
            {npmcode}
          </SyntaxHighlighter>
          <span
            onClick={() => {
              setIsCopied(1);
              navigator.clipboard.writeText(npmcode);
              setTimeout(() => {
                setIsCopied(0);
              }, 1000);
            }}
            className={`absolute right-8 text-2xl flex -mt-3  ${
              isCopied === 1
                ? "text-green-500"
                : "text-slate-500 hover:text-black"
            }  cursor-pointer transition-colors`}
          >
            {isCopied === 1 ? <BsCheck /> : <TbCopy />}{" "}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "just", delay: 0.2 }}
          className="flex relative items-center "
        >
          <SyntaxHighlighter
            language="bash"
            style={oneLight}
            customStyle={codeStyles}
          >
            {yarncode}
          </SyntaxHighlighter>
          <span
            onClick={() => {
              navigator.clipboard.writeText(yarncode);
              setIsCopied(2);
              setTimeout(() => {
                setIsCopied(0);
              }, 1000);
            }}
            className={`absolute right-8 text-2xl flex -mt-3  ${
              isCopied === 2
                ? "text-green-500"
                : "text-slate-500 hover:text-black"
            }  cursor-pointer transition-colors`}
          >
            {isCopied === 2 ? <BsCheck /> : <TbCopy />}{" "}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "just", delay: 0.3 }}
          className="text-4xl font-[700] mb-6 mt-6"
        >
          Usage
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "just", delay: 0.4 }}
          className="flex relative items-center "
        >
          <SyntaxHighlighter
            language="jsx"
            style={oneLight}
            customStyle={codeStyles}
          >
            {usagecode}
          </SyntaxHighlighter>
          <span
            onClick={() => {
              navigator.clipboard.writeText(usagecode);
              setIsCopied(3);
              setTimeout(() => {
                setIsCopied(0);
              }, 1000);
            }}
            className={`absolute right-8 text-2xl flex top-8  ${
              isCopied === 3
                ? "text-green-500"
                : "text-slate-500 hover:text-black"
            }  cursor-pointer transition-colors`}
          >
            {isCopied === 3 ? <BsCheck /> : <TbCopy />}{" "}
          </span>
        </motion.div>

    
      </div>
    </div>
  );
}

export default install;
