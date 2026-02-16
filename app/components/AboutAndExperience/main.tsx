import { ReactNode } from "react";
import About from "./About";
import JobExperiences from "./JobExperiences";
import OverallExperience from "./OverallExperience";

export default function AboutAndExp() {

    function Title({ text, subtext, mt }: { text: string; subtext?: string; mt?: number; }): ReactNode {
        mt = mt || 0;
        return (
            <div className={`flex justify-between gap-5 items-end text-3xl font-extrabold mt-${mt}`}>
                <span>{text}</span>
                {subtext && (
                    <span className="text-xl md:text-2xl text-right font-normal text-gray-200">
                        {subtext}
                    </span>
                )}
            </div>
        );
    }

    function Section({ header, content }: { header: ReactNode; content: ReactNode }): ReactNode {
        return (<div>{header}{content}</div>);
    }

    return (
        <div className="
            max-w-8/10 
            text-white 
            justify-center 
            flex 
            flex-col 
            gap-10
            items-start
        ">
            <Section
                header={<Title text="About me" />}
                content={<About />}
            />
            <Section
                header={<Title text="Overall Experience" subtext="+ 6 years in total" mt={20} />}
                content={<OverallExperience />}
            />
            <Section
                header={<Title text="Job Experience" subtext='+ 1 year in total' mt={10} />}
                content={<JobExperiences />}
            />
        </div>
    );
}
