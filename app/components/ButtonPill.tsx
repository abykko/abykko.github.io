import { ReactNode } from "react";

export default function ButtonPill({
        children,
        textCopy,
    } : { 
        children: ReactNode,
        textCopy: String,
    }) {
    return (
        <div className='inline-flex items-center p-[2px] rounded-2xl
            bg-conic/[from_var(--border-angle)] hover:from-transparent hover:transparent
            hover:via-cyan-500 animate-rotate-border transition-all duration-1000 ease-in-out
            '>
            <div className="inline-flex items-center p-1 pl-2 pr-2 gap-2 rounded-2xl
                bg-linear-to-t from-gray-800 to-cyan-900 hover:from-gray-900 hover:to-cyan-950
                transition-colors duration-400 ease-in-out"
                onClick={function copy() {
                    if (textCopy)
                        alert(textCopy)
                }}>
                {children}
            </div>
        </div>
    );
}