import React, { ReactNode } from "react";
import ProgrammingLanguages from "./ProgrammingLanguages";
import Frameworks from "./Frameworks";
import ToolsAndPlatforms from "./ToolsAndPlatforms";
import Education from "./Education";

export default function TechnologiesAndEducation() {

    function Header({ text = "Test", mt = 0 }: { text: string; mt?: number; }): ReactNode {
        mt = mt || 0;
        return (<h1 className={`text-4xl text-center font-extrabold text-white mt-${mt}`}>{text}</h1>);
    }

    function Parr({ text }: { text: string }): ReactNode {
        return (<p className="text-2xl pt-4 font-medium text-center text-white">{text}</p>);
    }

    function Section({ header, content, mt }: { header: ReactNode; content: ReactNode, mt?: number }): ReactNode {
        mt = mt || 0;
        return (<>{header}{content}</>);
    }

    return (
        <div className="flex flex-col text-center gap-15 px-10">
            <div id="tech">
                <Header text="Technologies" />
                <Section
                    header={<Parr text="Programming languages" />}
                    content={<ProgrammingLanguages />}
                />
                <Section
                    header={<Parr text="Frameworks" />}
                    content={<Frameworks />}
                />
                <Section
                    header={<Parr text="Tools and Platforms" />}
                    content={<ToolsAndPlatforms />}
                />
            </div>
            <div id="edu">
                <Header mt={48} text="Education" />
                <Education />
            </div>
        </div>
    );
}