import { ReactNode } from "react";
import SkillsContainer from "./SkillContainer";
import SkillPill from "./SkillPill";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoElectron, IoLogoFirebase } from "react-icons/io5";
import { FaFlutter, FaNodeJs, FaReact } from "react-icons/fa6";
import { SiApachecordova, SiDjango, SiMui, SiSelenium } from "react-icons/si";
import { FaTheaterMasks } from "react-icons/fa";

export default function Frameworks(): ReactNode {
    return (
        <SkillsContainer>
            <SkillPill text="Flutter" icon={<FaFlutter />} />
            <SkillPill text="React" icon={<FaReact />} />
            <SkillPill text="Selenium" icon={<SiSelenium />} />
            <SkillPill text="Django" icon={<SiDjango />} />
            <SkillPill text="Tailwindcss" icon={<RiTailwindCssFill />} />
            <SkillPill text="NextJS" icon={<RiNextjsFill />} />
            <SkillPill text="Cordova" icon={<SiApachecordova />} />
            <SkillPill text="Electron" icon={<IoLogoElectron />} />
            <SkillPill text="Material UI" icon={<SiMui />} />
            <SkillPill text="Node.js" icon={<FaNodeJs />} />
            <SkillPill text="Playwright" icon={<FaTheaterMasks />} />
            <SkillPill text="Firebase" icon={<IoLogoFirebase />} />
        </SkillsContainer>
    );
}