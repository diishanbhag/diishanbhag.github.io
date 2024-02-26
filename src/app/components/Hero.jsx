"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation"
import { Fade } from 'react-awesome-reveal'
import Link from "next/link";
import viz from "../../../public/images/viz.gif";
import viz2 from "../../../public/images/viz2.gif"



const HeroSection = () => {
    
    
    return (
        <section id="home" className="lg:py-16 min-h-screen flex items-center justify-center relative">

            <div className=" w-full items-center ">

            <Fade cascade direction='up'   duration={600} triggerOnce>
                    <div className="text-center ">
                        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-600">
                                Hello, I&apos;m{" "}
                            </span>
                            <br></br>
                            <TypeAnimation
                                sequence={[
                                    "Sampurn",
                                    1200,
                                    "Web Developer",
                                    1000,
                                    "AI / ML Enthusiast",
                                    1000,
                                    "",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>

                        <div>
                            <Link
                                href="/#contact"
                                className=" px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white cursor-pointer "

                            >
                                Lets Talk
                            </Link>
                            <a  href="/CV.pdf"  rel="noopener noreferrer" target='_blank' download
                                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 "
                                
                            >
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 cursor-pointer">
                                    Download CV
                                </span>
                            </a>
                        </div>
                    </div>
                </Fade>
                
                <Fade   triggerOnce>
                <div className="rounded-full  absolute  w-[25%] top-0 left-0 hidden lg:block ">
                    <Image src={viz} alt="My GIF" />
                </div>
                </Fade>
                

                <Fade   triggerOnce  >
                <div
                    className="rounded-full absolute   w-[28%]   -bottom-0 right-0 hidden lg:block">
                    <Image src={viz2} alt="My GIF" />
                </div>
                </Fade>
                


                



            </div>

        </section >

    );
};

export default HeroSection;
