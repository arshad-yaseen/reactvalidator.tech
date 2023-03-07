import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import ExampleSection from "../components/ExampleSection";
import Footer from "../components/Footer";
import Logo from "../public/images/logo.png";
import { AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import Dots from "../public/images/dots.svg"
import Image from "next/image";
import { useRouter } from "next/router";


const Home: NextPage = () => {

  let route = useRouter()

  return (      
    <div className="flex min-h-screen flex-col ">
      <Head>
        <title>Easiest Form Validator - React</title>
        <link rel="icon" href={Logo.src} />
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="reactform" data-description="Support me on Buy me a coffee!" data-message="Thankyou for visiting, now you can support this project" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center pt-16">


        <Image src={Dots} alt="dots" className="opacity-10 -left-44 -top-[400px] absolute" />
        <Image src={Dots} alt="dots" className="opacity-10 -right-44 -bottom-[400px] absolute" />


        <motion.h1 initial={{y:80,opacity:0}} animate={{y:0,opacity:1}} transition={{type:"just"}} className="text-6xl font-[900] text-center">
          The Easiest Form <br /> Validator for{" "}
          <span className="border-b-4 border-indigo-600 ">React</span>. Less code
        </motion.h1>
        <div className="w-full h-full flex justify-center items-center mt-16">
          <motion.button initial={{y:80,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2,type:"just"}} onClick={()=> window.open(" https://github.com/sponsors/arshad-yaseen")} className="py-2.5 hover:opacity-80 transition-opacity px-10 text-xl border border-slate-400 mr-4 flex items-center text-slate-400 rounded-lg font-[500]">
            <div className="flex items-center justify-center mr-2">
              <AiOutlineHeart />
            </div>{" "}
            Sponsor
          </motion.button>
          <motion.button onClick={()=> route.push("/install")} initial={{y:80,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.3,type:"just"}} className="py-2.5 hover:opacity-80 transition-opacity px-10 text-xl border border-indigo-600 text-white bg-indigo-600 rounded-lg font-[500]">
            Get started
          </motion.button>
         
        </div>
        <div className="w-full h-full flex justify-center mt-14 ">
            <motion.video initial={{y:140,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.4,type: "just" }} muted autoPlay loop className="h-auto w-[800px]  rounded-t-xl border-t border-x border-t-slate-200 border-x-slate-200"  src="/herovideo.mp4"></motion.video>
          </div>
      </main>
      <ExampleSection />
      <Footer />
    </div>
  );
};

export default Home;
