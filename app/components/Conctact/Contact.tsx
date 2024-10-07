"use client";
import "@app/components/common/Style/Efect.scss";
import { useState } from "react";

function Conctact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [code, setCode] = useState("");

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setCode("Email enviado exitosamente");
      var form = e.target as HTMLFormElement;
      form.reset();
    } else {
      setCode("Hubo un problema en el envio");
    }
  };

  return (
    <section
      className="text-center
          flex  flex-col  max-md:mt-28  font-mono  lg:px-[10%] lg:w-[75vw] m-auto z-10 
         justify-center items-center
         "
      id="Contactame"
    >
      <h4 className="text-2xl md:text-3xl lg:text-[2.9rem] mb-8 ">
        Te interesa Colaborar?
      </h4>
      <p className="text-sm lg:text-md md:w-1/2 lg:w-2/4 m-auto mb-10 mx-3 ">
        Si tiene una aplicación que te interesa desarrollar, o un proyecto que
        necesita codificación, me encantaría ayudarte con él...
      </p>

      <form
        className="shadowCustom backdrop-blur-sm flex flex-col w-[80%] items-center rounded-xl  mx-auto 
          lg:px-10 py-5 px-5 order-2 md:order-1 "
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <div className="mb-6 w-full flex flex-col items-start  ">
          <label
            htmlFor="name"
            className="mb-2  items-start ml-4"
          >
            Tu nombre
          </label>
          <input
            name="name"
            id="name"
            className="dark:bg-black bg-stone-300 ml-3 w-[98%] bg-opacity-20 border
             dark:border-stone-700 border-stone-300  border-opacity-60 
              rounded-lg focus:ring-grisclaro focus:outline-none 
            focus:ring-1 block  p-2.5 transition duration-300"
            type="text"
          />
        </div>

        <div className="mb-6 w-full  flex flex-col items-start  ">
          <label htmlFor="name" className="mb-2  items-start ml-4">
            Tu Email
          </label>
          <input
            name="email"
            id="email"
            className="dark:bg-black bg-stone-300 ml-3 bg-opacity-20 border dark:border-stone-700 border-stone-300  border-opacity-60  rounded-lg focus:ring-grisclaro focus:outline-none focus:ring-1 block w-[98%] p-2.5 transition duration-300"
            type="text"
          />
        </div>

        <div className="mb-6 w-full items-start flex flex-col">
          <label htmlFor="name" className="mb-2 ml-4  left-0">
            Tu Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            rows={6}
            className="dark:bg-black bg-stone-300 ml-3 w-[98%] bg-opacity-20 border dark:border-stone-700 border-stone-300  border-opacity-60  rounded-lg focus:ring-grisclaro focus:outline-none focus:ring-1 block W p-2.5 transition duration-300"
          />
        </div>
        <div className={`w-full text-xl text-center ${code.includes("Email enviado exitosamente") ? "text-red-600" : "text-green-600"}`}>{code}</div>
        <div className="mb-6 w-full items-start flex flex-col">
          <button className="hover:bg-black backdrop-blur-sm mx-auto mt-2 w-1/4 h-10 rounded-lg border border-stone-700">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Conctact;
