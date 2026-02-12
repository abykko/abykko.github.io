export function About() {
    return (
        <div className="max-w-4/10">
            <h1 className="text-4xl font-extrabold">About</h1>
            <p className="text-2xl pt-4 font-medium text-justify">
                Soy un desarrollador de software Español de 21 años. Conservo
                la misma ilusión del principio en cada linea de código.
                Puedes contar conmigo si buscas alguien con vocacion, que no
                se deja llevar por las modas y entiende
                el esfuerzo que hay tras un buen producto.
            </p>
        </div>
    );
}

import { ReactNode } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { FaNodeJs, FaPython, FaReact, FaTheaterMasks } from "react-icons/fa";
import { FaDartLang, FaFlutter } from "react-icons/fa6";
import { SiApachecordova, SiDjango, SiLua, SiMui, SiSelenium } from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";

import SkillPill from "./SkillPill";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoElectron, IoLogoFirebase } from "react-icons/io5";

export function Technologies() {

    function Parr({ text }: { text: string }): ReactNode {
        return (<p className="text-2xl pt-4 font-medium text-justify">{text}</p>);
    }

    function SkillsContainer({ children }: { children: ReactNode }): ReactNode {
        return (<div className="flex-wrap content-start mt-4 bg-gray-200">{children}</div>);
    }

    return (
        <div>
            <h1 className="text-4xl font-extrabold">Technologies</h1>
            <Parr text={"Programming languages"}/>
            <SkillsContainer>
                <SkillPill text={"Python"} icon={<FaPython />} />
                <SkillPill text={"Dart"} icon={<FaDartLang />} />
                <SkillPill text={"Typescript"} icon={<BiLogoTypescript />} />
                <SkillPill text={"Lua"} icon={<SiLua />} />
                <SkillPill text={"C / C++"} icon={<TbBrandCpp />} />
                <SkillPill text={"Javascript"} icon={<DiJavascript1 />} />
                <SkillPill text={"C#"} icon={<TbBrandCSharp />} />
            </SkillsContainer>
            <Parr text={"Frameworks"}/>
            <SkillsContainer>
                <SkillPill text={"Flutter"} icon={<FaFlutter/>} />
                <SkillPill text={"React"} icon={<FaReact/>} />
                <SkillPill text={"Selenium"} icon={<SiSelenium/>} />      
                <SkillPill text={"Django"} icon={<SiDjango/>} />
                <SkillPill text={"Tailwindcss"} icon={<RiTailwindCssFill/>} />
                <SkillPill text={"NextJS"} icon={<RiNextjsFill/>} />
                <SkillPill text={"Cordova"} icon={<SiApachecordova/>} />
                <SkillPill text={"Electron"} icon={<IoLogoElectron/>} />
                <SkillPill text={"Material UI"} icon={<SiMui/>} />
                <SkillPill text={"Node.js"} icon={<FaNodeJs/>} />
                <SkillPill text={"Playwright"} icon={<FaTheaterMasks/>} />
                <SkillPill text={"Firebase"} icon={<IoLogoFirebase/>} />
            </SkillsContainer>
        </div>
    );
}

export default function AboutAndTechnologies() {
    return (
        <div className="flex flex-row pt-15 pl-4 gap-34">
            <About />
            <Technologies />
        </div>
    );
}