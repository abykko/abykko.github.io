import { ReactNode } from "react";
import ProgrammingLanguages from "./ProgrammingLanguages";
import Frameworks from "./Frameworks";
import ToolsAndPlatforms from "./ToolsAndPlatforms";
import Education from "./Education";

export default function TechnologiesAndEducation() {

    function Header({text = "Test", mt = 0} : {text: string; mt?: number;}) : ReactNode {
        return (<h1 className={`text-4xl text-center font-extrabold text-white mt-${mt}`}>{text}</h1>);
    }

    function Parr({ text }: { text: string}): ReactNode {
        return (<p className="text-2xl pt-4 font-medium text-center lg:text-justify text-white">{text}</p>);
    }

    return (
        <div className="px-6 mt-6">
            <Header text="Technologies" />
            <Parr text="Programming languages" />
            <ProgrammingLanguages />
            <Parr text="Frameworks" />
            <Frameworks />
            <Parr text="Tools and Platforms" />
            <ToolsAndPlatforms />
            <Header text="Education" mt={10} />
            <Education />
        </div>
    );
}