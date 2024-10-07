import {
  SiTypescript,
  SiTailwindcss,
  SiMaterialdesign,
  SiNextdotjs,
  SiPhp,
  SiVite,
  SiTestinglibrary,
  SiJson,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiNestjs,
} from "react-icons/si";

import "@app/components/common/Style/Efect.scss";

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact, DiGit, DiNodejsSmall } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BookIcon, CIcon, CleanIcon, DeviconPlainDotnetcore, IconoirAgile, SimpleIconsPython, SolidIcon, SpeekIcon, TeamWorkIcon } from "./Icons";
{

}

export default function Skills() {
  return (
    <section
      id="MisHabilidades"
      className=" flex  flex-col mt-24  font-mono px-[5%] lg:px-[10%] lg:w-[75vw] m-auto z-10"
    >
      <div className=" flex flex-row  text-4xl ">
        <h1>02.</h1>
        <h1>Mis Habilidades </h1>
      </div>
      <h2 className="pt-10  ">
      Soy desarrollador FullStack con experiencia avanzada en TypeScript y JavaScript (ES6+), especializado en el desarrollo de FrontEnd utilizando tecnologías como ReactJS y NextJS. En el BackEnd, tengo un enfoque robusto en Node.js, trabajando con frameworks como Express y NestJS para la creación de APIs escalables y microservicios. Además, cuento con una sólida experiencia en el ecosistema .NET y C#, utilizando tecnologías como ASP.NET Core, Entity Framework, y patrones de diseño como SOLID, Clean Architecture y DDD para el desarrollo de aplicaciones empresariales eficientes y de alto rendimiento.
      </h2>
      <section className="grid lg:grid-cols-2 mt-10 gap-2 w-[90%] m-auto">

        <section className=" box col-span-1 row-span-2 shadowCustom  rounded-3xl backdrop-blur-sm">
          <p
            className="backdrop-blur-xl   rounded-xl font-mono text-2xl  text-center m-2"
            key="FrontEnd"
          >
            FrontEnd
          </p>

          <div
            className=" grid grid-cols-2 gap-y-16 p-3  items-center self-center justify-center  backdrop-blur-sm  rounded-3xl
          border-zinc-100
        "
          >
            <div className=" flex flex-col items-center    justify-center hover:scale-125  hover:text-orange-500 ">
              <AiFillHtml5 className="h-[50%] w-[15%]  "></AiFillHtml5>
              <div className="">HTMl</div>
            </div>

            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-600 ">
              <DiCss3 className="h-[50%] w-[15%]  "></DiCss3>
              CSS
            </div>

            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-500 ">
              <SiTypescript className="h-[50%] w-[10%]  "></SiTypescript>
              TypeScript
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-yellow-400 ">
              <IoLogoJavascript className="h-[50%] w-[10%]  "></IoLogoJavascript>
              JavaScript
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-cyan-400">
              <DiReact className="h-[50%] w-[15%]  "></DiReact>
              React
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  dark:hover:text-white hover:text-stone-500">
              <SiNextdotjs className="h-[50%] w-[10%]  "></SiNextdotjs>
              Next.js
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-400">
              <SiMaterialdesign className="h-[50%] w-[10%]  "></SiMaterialdesign>
              Material UI
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-cyan-500">
              <SiTailwindcss className="h-[50%] w-[10%]  "></SiTailwindcss>
              Tailwind CSS
            </div>
          </div>
        </section>

        <section className="box col-span-1 row-span-1 shadowCustom  rounded-3xl backdrop-blur-sm ">
          <p
            className="font-mono text-2xl  text-center m-2"
            key="FrontEnd"
          >
           Habilidades
          </p>
          <div className=" grid grid-cols-2 gap-y-16 p-3      backdrop-blur-sm dark:backdrop-blur-sm rounded-3xl">
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-orange-400 ">
              <SolidIcon className="h-[50%] w-[10%]  "></SolidIcon>
              SOLID
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-cyan-400">
              <CleanIcon className="h-[50%] w-[15%]  "></CleanIcon>
              Clean Architecture
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-red-600">
              <IconoirAgile className="h-[50%] w-[15%]  "></IconoirAgile>
              Agile
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-yellow-400">
              <BookIcon className="h-[50%] w-[10%]  "></BookIcon>
              Aprendizaje 
            </div>
            <div className="flex flex-col text-center items-center justify-center hover:scale-125  hover:text-blue-600">
              <TeamWorkIcon className="h-[50%] w-[10%]  "></TeamWorkIcon>
              Team Work
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-green-600">
              <SpeekIcon className="h-[50%] w-[10%]  "></SpeekIcon>
              Comunicación
            </div>
          </div>
        </section>

        <section className="box col-span-1 row-span-2 shadowCustom  rounded-3xl backdrop-blur-sm">
          <p
            className="backdrop-blur-sm   rounded-xl font-mono text-2xl  text-center m-2
          "
            key="BackEnd"
          >
            BackEnd
          </p>
          <div className=" grid grid-cols-2 gap-y-16 p-3  w-full   backdrop-blur-sm dark:backdrop-blur-sm rounded-3xl">
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-purple-600  ">
              <CIcon className="h-[50%] w-[15%]  "></CIcon>
              C#
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-purple-600  ">
              <DeviconPlainDotnetcore className="h-[60%] w-[15%]  "></DeviconPlainDotnetcore>
              .Net
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-lime-500  ">
              <DiNodejsSmall className="h-[50%] w-[15%]  "></DiNodejsSmall>
              Node.js
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  dark:hover:text-white hover:text-stone-500 ">
              <SiExpress className="h-[50%] w-[15%]  "></SiExpress>
              Express
            </div>

            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-yellow-300  ">
              <SimpleIconsPython className="h-[50%] w-[15%]  "></SimpleIconsPython>
              Python
            </div>

            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-600   ">
              <SiPhp className="h-[50%] w-[15%]  "></SiPhp>
              PHP
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-orange-600  ">
              <SiMysql className="h-[50%] w-[15%]  "></SiMysql>
              Mysql
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-green-600  ">
              <SiMongodb className="h-[50%] w-[15%]  "></SiMongodb>
              MongoDB
            </div>
     

          </div>
        </section>

        <section className="box col-span-1 row-span-1 shadowCustom  rounded-3xl backdrop-blur-sm">
          <p
            className="backdrop-blur-sm rounded-xl font-mono text-2xl  text-center m-2"
            key="Tools"
          >
            Tools
          </p>

          <div className=" grid grid-cols-2 gap-y-16 p-3      backdrop-blur-sm dark:backdrop-blur-sm rounded-3xl">
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-orange-600 ">
              <DiGit className="h-[50%] w-[10%]  "></DiGit>
              Git
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-gray-500">
              <AiFillGithub className="h-[50%] w-[15%]  "></AiFillGithub>
              GitHub
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-yellow-400">
              <SiVite className="h-[50%] w-[10%]  "></SiVite>
              ViteJs
            </div>
            <div className="flex flex-col text-center items-center justify-center hover:scale-125  hover:text-red-600">
              <SiTestinglibrary className="h-[50%] w-[10%]  "></SiTestinglibrary>
              Testing librarys
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-gray-400">
              <SiJson className="h-[50%] w-[10%]  "></SiJson>
              Json
            </div>
          </div>
        </section>

        
      </section>
    </section>
  );
}

// <div className="hidden  lg:flex  flex-row  mt-10 mr-5ml-5   gap-6 justify-center">
//   <section className=" grid grid-cols-2 gap-y-16 p-3 w-full  items-center self-center justify-center  backdrop-blur-sm dark:backdrop-blur-sm rounded-3xl">
//     <div className=" flex flex-col items-center    justify-center hover:scale-125  hover:text-orange-500 ">
//       <AiFillHtml5 className="h-[50%] w-[15%]  "></AiFillHtml5>
//       <div className="">HTMl</div>
//     </div>

//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-600 ">
//       <DiCss3 className="h-[50%] w-[15%]  "></DiCss3>
//       CSS
//     </div>

//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-500 ">
//       <SiTypescript className="h-[50%] w-[10%]  "></SiTypescript>
//       TypeScript
//     </div>
//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-yellow-400 ">
//       <IoLogoJavascript className="h-[50%] w-[10%]  "></IoLogoJavascript>
//       JavaScript
//     </div>
//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-cyan-400">
//       <DiReact className="h-[50%] w-[15%]  "></DiReact>
//       React
//     </div>
//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-white">
//       <SiNextdotjs className="h-[50%] w-[10%]  "></SiNextdotjs>
//       Next.js
//     </div>
//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-400">
//       <SiMaterialdesign className="h-[50%] w-[10%]  "></SiMaterialdesign>
//       Material UI
//     </div>
//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-cyan-500">
//       <SiTailwindcss className="h-[50%] w-[10%]  "></SiTailwindcss>
//       Tailwind CSS
//     </div>
//   </section>

//   <section className=" grid grid-cols-2 gap-y-16 p-3   w-full   backdrop-blur-sm dark:backdrop-blur-sm rounded-3xl">
//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-orange-600 ">
//       <DiGit className="h-[50%] w-[10%]  "></DiGit>
//       Git
//     </div>
//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-gray-500">
//       <AiFillGithub className="h-[50%] w-[15%]  "></AiFillGithub>
//       GitHub
//     </div>
//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-yellow-400">
//       <SiVite className="h-[50%] w-[10%]  "></SiVite>
//       ViteJs
//     </div>
//     <div className="flex flex-col text-center items-center justify-center hover:scale-125  hover:text-red-600">
//       <SiTestinglibrary className="h-[50%] w-[10%]  "></SiTestinglibrary>
//       Testing librarys
//     </div>
//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-gray-400">
//       <SiJson className="h-[50%] w-[10%]  "></SiJson>
//       Json
//     </div>
//   </section>

//   <section className=" grid grid-cols-2 gap-y-16 p-3  w-full   backdrop-blur-sm dark:backdrop-blur-sm rounded-3xl">
//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-lime-500  ">
//       <DiNodejsSmall className="h-[50%] w-[15%]  "></DiNodejsSmall>
//       Node.js
//     </div>
//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-white  ">
//       <SiExpress className="h-[50%] w-[15%]  "></SiExpress>
//       Express
//     </div>
//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-600   ">
//       <SiPhp className="h-[50%] w-[15%]  "></SiPhp>
//       PHP
//     </div>
//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-orange-600  ">
//       <SiMysql className="h-[50%] w-[15%]  "></SiMysql>
//       Mysql
//     </div>
//     <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-green-600  ">
//       <SiMongodb className="h-[50%] w-[15%]  "></SiMongodb>
//       MongoDB
//     </div>
//   </section>
// </div>
