import React from "react";
import Perfil from "@/public/perfil.jpg";
import style from "./Banner.module.scss";
import Image from "next/image";
function Banner() {
  return (
    <section
      className=" lg:px-[10%] w-[75vw] m-auto h-[95vh] px-[15vw]  
     text-white flex justify-center items-center   z-[10]  relative "
    >
      <div className="flex  flex-col justify-center items-center  mt-[-20%] " >
        <h1 className="text-[5rem] text-center opacity-80 ">Guillermo Riedel</h1>
        <h1 className=" text-5xl text-center animate-backgroudShine bg-clip-text text-transparent  bg-gradient-to-r from-[#f76927]  to-[#fdfa29] [">Desarrollador Fullstack</h1>
        <h2 className="pt-2  text-xl text-center w-2/3 mt-5 opacity-70 " >
          Siempre aprendiendo sobre nuevos paradigmas y tecnologías para aplicar
          la solución correcta en el lugar correcto.
        </h2>
      </div>

      {/* <Image src={"/perfil.jpg"} className="col-span-2  gap-4  flex   w-80 h-80  rounded-full" alt="foto de perfil" height={384} width={384}/> */}
    </section>
  );
}

export default Banner;
