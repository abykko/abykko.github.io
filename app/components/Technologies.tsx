import { ReactNode } from "react";
import { BiLogoMicrosoftTeams, BiLogoTypescript } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { FaDiscord, FaGitAlt, FaGithub, FaGitlab, FaNodeJs, FaPython, FaReact, FaRocketchat, FaSlack, FaTeamspeak, FaTheaterMasks } from "react-icons/fa";
import { FaDartLang, FaFlutter } from "react-icons/fa6";
import { SiApachecordova, SiAutohotkey, SiDjango, SiGooglemeet, SiJira, SiKalilinux, SiLua, SiMui, SiRedmine, SiRobloxstudio, SiSelenium, SiVim, SiVirtualbox, SiWireshark } from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";

import SkillPill from "./SkillPill";
import { RiNextjsFill, RiRfidFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoElectron, IoLogoFirebase } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { PiNumberSevenBold } from "react-icons/pi";

export default function Technologies() {

    function Parr({ text }: { text: string }): ReactNode {
        return (<p className="text-2xl pt-4 font-medium text-justify text-white">{text}</p>);
    }

    function SkillsContainer({ children }: { children: ReactNode }): ReactNode {
        return (<div className="flex-wrap content-start mt-4 space-x-1 space-y-2 text-white">{children}</div>);
    }

    return (
        <div>
            <h1 className="text-4xl font-extrabold text-white">Technologies</h1>
            <Parr text={"Programming languages"}/>
            <SkillsContainer>
                <SkillPill text="Python" icon={<FaPython/>} />
                <SkillPill text="Dart" icon={<FaDartLang/>} />
                <SkillPill text="Typescript" icon={<BiLogoTypescript/>} />
                <SkillPill text="Lua" icon={<SiLua/>} />
                <SkillPill text="Javascript" icon={<DiJavascript1/>} />
                <SkillPill text="C / C++" icon={<TbBrandCpp/>} />
                <SkillPill text="C#" icon={<TbBrandCSharp/>} />
                <SkillPill text="Autohotkey" icon={<SiAutohotkey/>} />
            </SkillsContainer>
            <Parr text="Frameworks"/>
            <SkillsContainer>
                <SkillPill text="Flutter" icon={<FaFlutter/>} />
                <SkillPill text="React" icon={<FaReact/>} />
                <SkillPill text="Selenium" icon={<SiSelenium/>} />      
                <SkillPill text="Django" icon={<SiDjango/>} />
                <SkillPill text="Tailwindcss" icon={<RiTailwindCssFill/>} />
                <SkillPill text="NextJS" icon={<RiNextjsFill/>} />
                <SkillPill text="Cordova" icon={<SiApachecordova/>} />
                <SkillPill text="Electron" icon={<IoLogoElectron/>} />
                <SkillPill text="Material UI" icon={<SiMui/>} />
                <SkillPill text="Node.js" icon={<FaNodeJs/>} />
                <SkillPill text="Playwright" icon={<FaTheaterMasks/>} />
                <SkillPill text="Firebase" icon={<IoLogoFirebase/>} />
            </SkillsContainer>
            <Parr text="Tools and Platforms"/>
            <SkillsContainer>
                <SkillPill text="Jira" icon={<SiJira/>} />
                <SkillPill text="Redmine" icon={<SiRedmine/>} />
                <SkillPill text="Gitlab" icon={<FaGitlab/>} />
                <SkillPill text="Github" icon={<FaGithub/>} />
                <SkillPill text="Git" icon={<FaGitAlt/>} />
                <SkillPill text="Visual Studio Code" icon={<VscVscode/>} />
                <SkillPill text="Vim" icon={<SiVim/>} />
                <SkillPill text="ImHex" icon={<PiNumberSevenBold/>} />
                <SkillPill text="Wireshark" icon={<SiWireshark/>} />
                <SkillPill text="Proxmark" icon={<RiRfidFill/>} />
                <SkillPill text="Kali" icon={<SiKalilinux/>} />
                <SkillPill text="Roblox Studio" icon={<SiRobloxstudio/>} />
                <SkillPill text="Virtual Box" icon={<SiVirtualbox/>} />
                <SkillPill text="Slack" icon={<FaSlack/>} />
                <SkillPill text="Teamspeak" icon={<FaTeamspeak/>} />
                <SkillPill text="Rocket Chat" icon={<FaRocketchat/>} />
                <SkillPill text="Microsoft Teams" icon={<BiLogoMicrosoftTeams/>} />
                <SkillPill text="Google Meet" icon={<SiGooglemeet/>} />
                <SkillPill text="Discord" icon={<FaDiscord/>} />
            </SkillsContainer>
        </div>
    );
}