import { ReactNode } from "react";
import SkillsContainer from "./SkillContainer";
import SkillPill from "./SkillPill";
import { SiGooglemeet, SiJira, SiKalilinux, SiRedmine, SiRobloxstudio, SiVim, SiVirtualbox, SiWireshark } from "react-icons/si";
import { FaDiscord, FaGitAlt, FaGithub, FaGitlab, FaRocketchat, FaSlack, FaTeamspeak } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { PiNumberSevenBold } from "react-icons/pi";
import { RiRfidFill } from "react-icons/ri";
import { BiLogoMicrosoftTeams } from "react-icons/bi";

export default function ToolsAndPlatforms(): ReactNode {
    return (
        <SkillsContainer>
            <SkillPill text="Jira" icon={<SiJira />} />
            <SkillPill text="Redmine" icon={<SiRedmine />} />
            <SkillPill text="Gitlab" icon={<FaGitlab />} />
            <SkillPill text="Github" icon={<FaGithub />} />
            <SkillPill text="Git" icon={<FaGitAlt />} />
            <SkillPill text="Visual Studio Code" icon={<VscVscode />} />
            <SkillPill text="Vim" icon={<SiVim />} />
            <SkillPill text="ImHex" icon={<PiNumberSevenBold />} />
            <SkillPill text="Wireshark" icon={<SiWireshark />} />
            <SkillPill text="Proxmark" icon={<RiRfidFill />} />
            <SkillPill text="Kali" icon={<SiKalilinux />} />
            <SkillPill text="Roblox Studio" icon={<SiRobloxstudio />} />
            <SkillPill text="Virtual Box" icon={<SiVirtualbox />} />
            <SkillPill text="Slack" icon={<FaSlack />} />
            <SkillPill text="Teamspeak" icon={<FaTeamspeak />} />
            <SkillPill text="Rocket Chat" icon={<FaRocketchat />} />
            <SkillPill text="Microsoft Teams" icon={<BiLogoMicrosoftTeams />} />
            <SkillPill text="Google Meet" icon={<SiGooglemeet />} />
            <SkillPill text="Discord" icon={<FaDiscord />} />
        </SkillsContainer>
    );
}