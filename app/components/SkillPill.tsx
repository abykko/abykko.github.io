import React, { ReactNode } from "react";

export default function SkillPill({ text, icon }: {
    text: string,
    icon?: ReactNode,
}): ReactNode {

    text = text || "testing";
    icon = icon || null;

    if (React.isValidElement(icon)) {
        icon = React.cloneElement(
            icon as React.ReactElement<{
                size?: number;
                color?: string;
                className?: string;
            }>,
            {
                size: 20,
                color: "white",
                className: "mt-1",
            }
        );
    }


    return (
        <div className='inline-flex items-center p-[2px] rounded-2xl
            bg-conic/[from_var(--border-angle)] hover:from-transparent hover:transparent
            hover:via-cyan-500 animate-rotate-border transition-all duration-1000 ease-in-out
            '>
            <div className="inline-flex items-center p-2 pl-2 pr-2 gap-2 rounded-2xl
                bg-linear-to-t from-gray-800 to-cyan-900 hover:from-gray-900 hover:to-cyan-950
                transition-colors duration-400 ease-in-out"
            >
                {icon}
                <span>{text}</span>
            </div>
        </div>
    );
};