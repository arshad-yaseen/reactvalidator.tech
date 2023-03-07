import Head from "next/head";
import Image from "next/image";
import React from "react";
import Dots from "../public/images/dots.svg";
import Logo from "../public/images/logo.png";
import {BsExclamation,BsPatchMinusFill,BsFillTelephoneFill,BsFillCalendarDateFill,BsLink45Deg,BsFillCreditCardFill} from "react-icons/bs"
import {HiOutlineMail} from "react-icons/hi"
import {MdPattern} from "react-icons/md"
import {TbSquareRoundedNumber3,TbNumber,TbListNumbers} from "react-icons/tb"
import {WiTime5} from "react-icons/wi"
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function rules() {

    let router = useRouter();

  return (
    <div className="w-full h-screen flex justify-center">
      <Head>
        <title>Rules</title>
        <link rel="icon" href={Logo.src} />
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

      

      

      <div className="h-full w-[1000px]  pt-12 flex flex-wrap">

      <div className="min-w-full  pt-3 pb-6 flex justify-center">
      <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0,type:"spring"}} className="text-4xl font-[700]">Rules</motion.h1>
      </div>
 
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,type:"spring"}} onClick={(e)=> router.push("/rules/validate-required")} className="w-[200px]  hover:bg-slate-100 cursor-pointer h-[200px] mx-5 px-6 bg-slate-50  transition-all rounded-xl  flex flex-col pt-8 items-center">
            <span className="text-5xl  bg-indigo-600 mb-4 text-white rounded-lg" ><BsExclamation /></span>
            <h1 className="font-[600] text-xl text-center" >Validate Required Inputs</h1>
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,type:"spring"}} onClick={(e)=> router.push("/rules/validate-min-max")} className="w-[200px]  hover:bg-slate-100 cursor-pointer h-[200px] mx-5 px-6 bg-slate-50  transition-all rounded-xl  flex flex-col pt-8 items-center">
            <span className="text-3xl p-2 bg-indigo-600 mb-4 text-white rounded-lg" ><BsPatchMinusFill /></span>
            <h1 className="font-[600] text-xl text-center" >Validate Min and Max</h1>
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,type:"spring"}} onClick={(e)=> router.push("/rules/validate-email")} className="w-[200px]  hover:bg-slate-100 cursor-pointer h-[200px] mx-5 px-6 bg-slate-50  transition-all rounded-xl  flex flex-col pt-8 items-center">
            <span className="text-3xl p-2 bg-indigo-600 mb-4 text-white rounded-lg" ><HiOutlineMail /></span>
            <h1 className="font-[600] text-xl text-center" >Validate Email Inputs</h1>
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,type:"spring"}} onClick={(e)=> router.push("/rules/validate-patterns")} className="w-[200px]  hover:bg-slate-100 cursor-pointer h-[200px] mx-5 px-6 bg-slate-50  transition-all rounded-xl  flex flex-col pt-8 items-center">
            <span className="text-3xl p-2 bg-indigo-600 mb-4 text-white rounded-lg" ><MdPattern /></span>
            <h1 className="font-[600] text-xl text-center" >Validate Patterns</h1>
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,type:"spring"}} onClick={(e)=> router.push("/rules/validate-phone-number")} className="w-[200px]  hover:bg-slate-100 cursor-pointer h-[200px] mx-5 px-6 bg-slate-50  transition-all rounded-xl  flex flex-col pt-8 items-center">
            <span className="text-3xl p-2 bg-indigo-600 mb-4 text-white rounded-lg" ><BsFillTelephoneFill /></span>
            <h1 className="font-[600] text-xl text-center" >Validate Phone Number</h1>
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,type:"spring"}} onClick={(e)=> router.push("/rules/validate-number")} className="w-[200px]  hover:bg-slate-100 cursor-pointer h-[200px] mx-5 px-6 bg-slate-50  transition-all rounded-xl  flex flex-col pt-8 items-center">
            <span className="text-3xl p-2 bg-indigo-600 mb-4 text-white rounded-lg" ><TbNumber /></span>
            <h1 className="font-[600] text-xl text-center" >Validate Number</h1>
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,type:"spring"}} onClick={(e)=> router.push("/rules/validate-integer")} className="w-[200px]  hover:bg-slate-100 cursor-pointer h-[200px] mx-5 px-6 bg-slate-50  transition-all rounded-xl  flex flex-col pt-8 items-center">
            <span className="text-3xl p-2 bg-indigo-600 mb-4 text-white rounded-lg" ><TbSquareRoundedNumber3 /></span>
            <h1 className="font-[600] text-xl text-center" >Validate Integers</h1>
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,type:"spring"}} onClick={(e)=> router.push("/rules/validate-float")} className="w-[200px]  hover:bg-slate-100 cursor-pointer h-[200px] mx-5 px-6 bg-slate-50  transition-all rounded-xl  flex flex-col pt-8 items-center">
            <span className="text-3xl p-2 bg-indigo-600 mb-4 text-white rounded-lg" ><TbListNumbers /></span>
            <h1 className="font-[600] text-xl text-center" >Validate Float Inputs</h1>
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4,type:"spring"}} onClick={(e)=> router.push("/rules/validate-date")} className="w-[200px]  hover:bg-slate-100 cursor-pointer h-[200px] mx-5 px-6 bg-slate-50  transition-all rounded-xl  flex flex-col pt-8 items-center">
            <span className="text-3xl p-2 bg-indigo-600 mb-4 text-white rounded-lg" ><BsFillCalendarDateFill /></span>
            <h1 className="font-[600] text-xl text-center" >Validate Date Inputs</h1>
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4,type:"spring"}} onClick={(e)=> router.push("/rules/validate-time")} className="w-[200px]  hover:bg-slate-100 cursor-pointer h-[200px] mx-5 px-6 bg-slate-50  transition-all rounded-xl  flex flex-col pt-8 items-center">
            <span className="text-3xl p-2 bg-indigo-600 mb-4 text-white rounded-lg" ><WiTime5 /></span>
            <h1 className="font-[600] text-xl text-center" >Validate Time Inputs</h1>
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4,type:"spring"}} onClick={(e)=> router.push("/rules/validate-url")} className="w-[200px]  hover:bg-slate-100 cursor-pointer h-[200px] mx-5 px-6 bg-slate-50  transition-all rounded-xl  flex flex-col pt-8 items-center">
            <span className="text-3xl p-2 bg-indigo-600 mb-4 text-white rounded-lg" ><BsLink45Deg /></span>
            <h1 className="font-[600] text-xl text-center" >Validate Url Inputs</h1>
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4,type:"spring"}} onClick={(e)=> router.push("/rules/validate-credit-card")} className="w-[200px]  hover:bg-slate-100 cursor-pointer h-[200px] mx-5 px-6 bg-slate-50  transition-all rounded-xl  flex flex-col pt-8 items-center">
            <span className="text-3xl p-2 bg-indigo-600 mb-4 text-white rounded-lg" ><BsFillCreditCardFill /></span>
            <h1 className="font-[600] text-xl text-center" >Validate Credit Card</h1>
        </motion.div>

      </div>
    </div>
  );
}

export default rules;
