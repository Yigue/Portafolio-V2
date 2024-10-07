import React from "react";
import { CiShare1 } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import "@app/components/common/Style/Efect.scss"
interface Props {
  id: number;
  image?: String;
  title: String;
  imageClassName:String;
  className?: String;
  descript: String;
  href: URL;
  tecnologias: [String?, String?, String?, String?, String?];
}
function CardProyect({
  id,
  image,
  title,
  descript,
  href,
  tecnologias,
  imageClassName,
  className
}: Props) {
  return (
    
      <section
        key={id}
        className={'box rounded-2xl shadowCustom flex flex-col grow pl-[5%] z-10   pt-[3%] backdrop-blur-sm    ' + className}
        
      >
        <div className="  dark:text-white text-black absolute   lg:static md:max-lg:mr-[10%]">
          <div className="grid grid-cols-4">
            <h1 className=" text-3xl col-span-3 ">{title}.</h1>
            <Link href={href}>
              <CiShare1 className="h-[100%] w-[33%]  md:h-[80%]  col-span-1 "></CiShare1>
            </Link>
          </div>
          <div className="  mt-2  ">
            <h1>{descript}</h1>
            <br />

            <div className=" lg:pl-[5%] flex  flex-row gap-[3%] lg:ml-[3%] font-mono text-sm  lg:max-xl:pb-5 dark:text-stone-500  text-stone-400   ">
            {tecnologias.map((e, index) => {
              return <p key={index}>{e}</p>;
            })}
          </div>
          </div>


        
        </div>

        <div className=" flex items-center  justify-center top-0 relative max-lg:overflow-hidden opacity-20 lg:static lg:opacity-100 ">
          {
            image ? <img className={`${imageClassName}`}  src={`/${image}`} alt=""  /> :  null
          }
    
        </div>
      </section>
   
  );
}

export default CardProyect;
