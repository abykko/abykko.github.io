import { ReactNode } from "react";

export default function SkillsContainer({ children }: { children: ReactNode }): ReactNode {
    return (<div className="flex-wrap content-start mt-4 space-x-1 space-y-2 text-white">{children}</div>);
}