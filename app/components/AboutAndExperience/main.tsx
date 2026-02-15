import { ReactNode } from "react";
import About from "./About";
import JobExperiences from "./JobExperiences";
import OverallExperience from "./OverallExperience";

function Title({ text, subtext, mt}: { text: string; subtext?: string; mt?: number;}): ReactNode {
    mt = mt || 0;
    return (
        <div className={`flex justify-between items-center text-4xl font-extrabold mt-${mt}`}>
            <span>{text}</span>
            {subtext && (
                <span className="text-2xl font-normal">
                    {subtext}
                </span>
            )}
        </div>
    );
}

export default function AboutAndExp() {
    return (
        <div className="max-w-8/10 text-white">
            <Title text="About" />
            <About />
            <Title text="Overall Experience" subtext="+6 years in total" mt={8} />
            <OverallExperience />
            <Title text="Job Experience" subtext='+1 year in total' mt={8}/>
            <JobExperiences />
        </div>
    );
}
