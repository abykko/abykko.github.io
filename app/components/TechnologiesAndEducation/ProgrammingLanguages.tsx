import { ReactNode } from "react";
import SkillsContainer from "./SkillContainer";
import SkillPill from "./SkillPill";

import { FaDartLang, FaPython } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiAutohotkey, SiLua } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";

export default function ProgrammingLanguages(): ReactNode {
    return (
        <SkillsContainer>
            <SkillPill text="Python" icon={<FaPython />} />
            <SkillPill text="Dart" icon={<FaDartLang />} />
            <SkillPill text="Typescript" icon={<BiLogoTypescript />} />
            <SkillPill text="Lua" icon={<SiLua />} />
            <SkillPill text="Javascript" icon={<DiJavascript1 />} />
            <SkillPill text="C / C++" icon={<TbBrandCpp />} />
            <SkillPill text="C#" icon={<TbBrandCSharp />} />
            <SkillPill text="Autohotkey" icon={<SiAutohotkey />} />
        </SkillsContainer>
    );
}
