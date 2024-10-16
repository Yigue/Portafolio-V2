import "@app/components/common/Style/Efect.scss";
import React from "react";
import Image from "next/image";


function AboutMe() {
  return (
    <div
      id="SobreMi"
      className=" flex  flex-col mt-24  font-mono px-[5%]  lg:px-[10%] lg:w-[75vw] m-auto lg:mb-64    z-10"
    >
      <div className="w-full flex flex-row text-4xl  z-10">
        <h1>01.</h1>
        <h1>Sobre Mi </h1>
      </div>
      <div className="flex  flex-col lg:flex-row max-lg:py-5">
        <Image
          src={"/perfil.jpg"}
          className=" mx-auto my-10 gap-4 max-lg:h-[20rem]  max-lg:w-[20rem]  rounded-full z-101"
          alt="foto de perfil"
          height={384}
          width={384}
        />

        <div className="shadowCustom w-[80vw] flex max-lg:mt-5   p-5 lg:my-auto  lg:w-3/6 mx-auto backdrop-blur-sm rounded-2xl">
        Soy un programador autodidacta y apasionado, con experiencia tanto en FrontEnd como en Backend. Gracias a mi sólida formación técnica y mi constante deseo de aprender, he adquirido amplios conocimientos en desarrollo web. Me especializo en tecnologías como C#, JavaScript y TypeScript, aplicando principios de SOLID y Clean Code para crear aplicaciones robustas y escalables.

Además, tengo experiencia utilizando frameworks como .NET, ASP.NET, Express.js y Node.js para el Backend, y React.js y Next.js para el FrontEnd. También manejo otros lenguajes y tecnologías como PHP, MySQL, Python, FastAPI y CSS. Estoy ansioso por aplicar mis habilidades y mi pasión por la programación en un entorno desafiante, donde pueda seguir aprendiendo y creciendo como profesional.
        </div>

      </div>
    </div>
  );
}

export default AboutMe;
