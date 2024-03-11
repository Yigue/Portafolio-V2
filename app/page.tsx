import style from "./home.module.scss";
import { Banner } from "@app/components/Banner";
import { Contact } from "./components/common";
import Skills from "./components/Skills/Skill";
// + style.background

export default function Home() {
  return (
    <main>
      <div className={"relative h-full w-full bg-[#3333] "}>
        <div
          className={"absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_34px]" }
        >

        </div>
        <div className={"absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full //  bg-[radial-gradient(circle_400px_at_30%_500px,black,#1111)]"}/>
        <div className="absolute right-0  overflow-hidden  top-[7%] h-[55rem] w-[38rem] rounded-full bg-[radial-gradient(circle_23rem,black,#1111)]"></div>

          

 <Banner />
        <Skills />
        {/* <Proyectos/> */}
        <Contact />
      </div>
    </main>
  );
}

//   <div class="absolute bottom-0 left-0 right-0 top-0
//    bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//    </div>
// <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full
//  bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
//   </div></div>
