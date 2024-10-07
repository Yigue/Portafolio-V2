import style from "./home.module.scss";
import { Banner } from "@app/components/Banner";
import { Contact } from "./components/Conctact";
import Skills from "./components/Skills/Skill";
import { AboutMe } from "./components/AboutMe";
import Proyectos from "./components/Proyects/Proyects";
import { Footer, Navbar } from "./components/common";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className={
          "relative h-full w-full z-[0] dark:bg-[#3333] bg-[#F5F5F5] dark:text-white text-black"
        }
      >
        <div
          className=" absolute animateGreen z-[-5]
             bottom-0 left-0 right-0 top-0 
             dark:bg-[linear-gradient(to_right,#71686844_1px,transparent_1px),linear-gradient(to_bottom,#71686839_1px,transparent_1px)] 
             bg-[linear-gradient(to_right,#aba9a9c8,transparent_1px),linear-gradient(to_bottom,#aba9a9c8,transparent_1px)] 
             bg-[size:24px_34px]"
        />
        <div
          className="absolute  opacity-90  left-0 right-0 top-[-10%] overflow-hidden h-[1000px] lg:w-[1000px]
           rounded-full   dark:bg-[radial-gradient(circle_400px_at_30%_500px,black,#1111)]
             bg-[radial-gradient(circle_23rem,#e1dfdf,#f5f5f557)]"
        />
        <div
          className="absolute lg:opacity-90 opacity-75 right-0  overflow-hidden  top-[7%]
         max-lg:h-[40rem] max-lg:w-[130%] lg:h-[55rem] lg:w-[38rem]
         rounded-full 
         dark:bg-[radial-gradient(circle_23rem,black,#1111)]
         bg-[radial-gradient(circle_23rem,#e1dfdf,#f5f5f557)]
         "
        />

        <Banner />
        <AboutMe />
        <Skills />
        <Proyectos />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
