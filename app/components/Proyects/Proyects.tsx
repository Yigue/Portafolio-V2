import { Card } from "@mui/material";
import CardProyect from "./CardProyect/CardProyect";
import BentoProyects from "./BentoProyects/BentoProyects";



function Proyectos() {
  const tecSpotruck = ["PHP", "HTML", "CSS", "Materialize", "JavaScript"];

  return (
    <div
      id="Proyectos"
      className="flex  flex-col  md:mt-40 mt-24  font-mono px-[5%]  lg:w-[75vw]   lg:px-[10%] m-auto z-10  "
    >
      <div className=" flex flex-row  text-4xl ">
        <h1>03.</h1>
        <h1>Mis Proyectos</h1>
      </div>


    
      <BentoProyects/>

 
    </div>
  );
}
export default Proyectos;
