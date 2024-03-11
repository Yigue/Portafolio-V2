import { Card } from "@mui/material";
import CardProyect from "./CardProyect/CardProyect";

function Proyectos() {
  const tecSpotruck = ["PHP", "HTML", "CSS", "Materialize", "JavaScript"];

  return (
    <div
      id="Proyectos"
      className="mt-[10%] mb-[20%] flex flex-col px-[5%] lg:px-[10%] "
    >
      <div className="w-full flex flex-row  text-4xl ">
        <h1>03.</h1>
        <h1>Mis Proyectos</h1>
      </div>
      <CardProyect
        id={10}
        title="Spotruck"
        image="Spotruck.jpg"
        descript="Spotruck fue mi proyecto de tesis para egresarme, es una aplicación de publicación y licitación de logística que
          busca ser el intermediario entre camioneros y entidades que necesitan
          logistica, partes para facilitar la comunicación, mejorar la
          competitividad y tiempo de búsquedas."
        href={new URL("/", "http://www.spotruck.com.ar")}
        tecnologias={["PHP", "HTML", "CSS", "Materialize", "JavaScript"]}
      ></CardProyect>

      <CardProyect
        id={10}
        title="Eccomers"
        image="Eccomers.png"
        descript="Pagina de una tienda online creada con Next.js y la api
        de shopify, buenas practicas de seo, UX/UI y buenas
        practicas de codeo y optimización completa del sitio.
        Tambien otras tecnologias/librerias zustand, graphQL ,
        SASS"
        href={new URL("/", "https://eccomers-next-js-v1.vercel.app/")}
        tecnologias={["Next.js", "Typescript" , "SASS", "Zustand","Shopify"]}
      ></CardProyect>
    </div>
  );
}
export default Proyectos;
