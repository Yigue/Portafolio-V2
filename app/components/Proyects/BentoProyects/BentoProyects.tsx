import React from "react";
import CardProyect from "../CardProyect/CardProyect";
import "@app/components/common/Style/Efect.scss";

function BentoProyects() {
  return (
    <>
      <div className="flex flex-col max-lg:w-[80vw] m-auto  items-center justify-center lg:p-6 p-2 pt-10 text-slate-400/0 xl:text-slate-400">
        <div className="w-full grid lg:grid-cols-10 lg:grid-row-4 lg:gap-0 grid-rows-4  grid-cols-1 gap-10  ">
          <CardProyect
            id={10}
            className={"lg:col-span-5 lg:row-span-2 row-span-1 col-span-1 "}
            title="Ecommerce"
            image="Eccomers.png"
            imageClassName="lg:w-[80%] lg:h-[15rem]  w-[15rem] m-auto "
            descript="Página de una tienda online creada con Next.js y la API de Shopify, siguiendo buenas prácticas de SEO, UX/UI, así como buenas prácticas de codificación y optimización completa del sitio. También se utilizaron otras tecnologías/librerías como Zustand, GraphQL y SASS."
            href={new URL("/", "https://eccomers-next-js-v1.vercel.app/")}
            tecnologias={[
              "Next.js",
              "Typescript",
              "SASS",
              "Zustand",
              "Shopify",
            ]}
          />
          <CardProyect
            id={10}
            className={"lg:col-span-5  row-span-1 col-span-1"}
            title="ConseCar"
            descript="Desarrollé un ERP para una concesionaria, gestionando vehículos, ventas, inventarios y clientes. El sistema centraliza operaciones, optimiza recursos y facilita la toma de decisiones con reportes en tiempo real."
            imageClassName=""
            href={new URL("/", "https://eccomers-next-js-v1.vercel.app/")}
            tecnologias={[
              "Next.js",
              "SASS",
              "ASP.NET",
              "C#"
            ]}
          />
          <CardProyect
            id={10}
            className={"lg:col-span-5 lg:row-span-2 flex"}
            title="Spotruck"
            image="Spotruck.jpg"
            descript="potruck fue mi proyecto de tesis para egresarme. Es una aplicación para la publicación y licitación de servicios logísticos, que busca ser el intermediario entre camioneros y entidades que requieren logística, facilitando la comunicación, mejorando la competitividad y reduciendo el tiempo de búsqueda."
            href={new URL("/", "http://www.spotruck.com.ar")}
            tecnologias={["PHP", "HTML", "CSS", "Materialize", "JavaScript"]}
            imageClassName="lg:w-[80%] lg:h-[15rem] w-[18rem] overflow-hidden m-auto  "
          />
            <CardProyect
            id={10}
            className={"lg:col-span-5  flex"}
            title="Stock Manager"
      
            descript="Desarrollé Stock Manager, una aplicación de gestión de inventarios con .NET y Next.js. Permite controlar existencias, actualizar stock automáticamente y generar reportes en tiempo real, optimizando el rendimiento y la experiencia de usuario."
            imageClassName="w-2/3 h-2/3"
            href={new URL("/", "https://eccomers-next-js-v1.vercel.app/")}
            tecnologias={[
              "React.js",
              "SASS",
              "Zustand",
              "ASP.NET",
              "C#"
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default BentoProyects;
