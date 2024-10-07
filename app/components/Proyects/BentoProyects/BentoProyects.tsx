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
            descript="Pagina de una tienda online creada con Next.js y la api
            de shopify, buenas practicas de seo, UX/UI y buenas
            practicas de codeo y optimización completa del sitio.
            Tambien otras tecnologias/librerias zustand, graphQL ,
            SASS"
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
            title="Agro"
            descript="Pagina de una tienda online creada con Next.js y la api
        de shopify, buenas practicas de seo, UX/UI y buenas
        practicas de codeo y optimización completa del sitio.
        Tambien otras tecnologias/librerias zustand, graphQL ,
        SASS"
            imageClassName=""
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
            className={"lg:col-span-5 lg:row-span-2 flex"}
            title="Spotruck"
            image="Spotruck.jpg"
            descript="Spotruck fue mi proyecto de tesis para egresarme, es una aplicación de publicación y licitación de logística que
          busca ser el intermediario entre camioneros y entidades que necesitan
          logistica, partes para facilitar la comunicación, mejorar la
          competitividad y tiempo de búsquedas."
            href={new URL("/", "http://www.spotruck.com.ar")}
            tecnologias={["PHP", "HTML", "CSS", "Materialize", "JavaScript"]}
            imageClassName="lg:w-[80%] lg:h-[15rem] w-[18rem] overflow-hidden m-auto  "
          />
            <CardProyect
            id={10}
            className={"lg:col-span-5  flex"}
            title="Stock Manager"
      
            descript="Pagina de una tienda online creada con Next.js y la api
            de shopify, buenas practicas de seo, UX/UI y buenas
            practicas de codeo y optimización completa del sitio.
            Tambien otras tecnologias/librerias zustand, graphQL ,
            SASS"
            imageClassName="w-2/3 h-2/3"
            href={new URL("/", "https://eccomers-next-js-v1.vercel.app/")}
            tecnologias={[
              "Next.js",
              "Typescript",
              "SASS",
              "Zustand",
              "Shopify",
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default BentoProyects;
