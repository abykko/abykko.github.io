import { ReactNode } from "react";

export default function SkillsContainer({ children }: { children: ReactNode }): ReactNode {
    return (<div className="flex-wrap mt-4 space-x-1 space-y-1 text-white">{children}</div>);
}