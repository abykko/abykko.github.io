import { ReactNode } from "react";
import { degrees, DegreeItem } from "./degrees";
import { SlBadge } from "react-icons/sl";

export default function Education() {

    function Card({ degree }: { degree: DegreeItem }): ReactNode {
        return (
            <div className="
                flex
                flex-col
                gap-2
                rounded-md
                shadow-xl
                px-8 
                py-4 
                mt-6
                relative
                transition-color 
                duration-1000 
                delay-20
                backdrop-brightness-10 
                backdrop-contrast-200
                backdrop-blur-lg 
                backdrop-saturate-120
            ">
                <div className="text-xl font-semibold text-white max-w-8/10">
                    {degree.title}
                </div>
                <div className="text-gray-200 font-medium">
                    {degree.duration} |  {degree.institution}
                </div>
                <span className="absolute top-4 right-6 text-gray-200">
                    <SlBadge size={20}/>
                </span>
            </div>
        );
    }

    return (
        <div className="text-start">
            {degrees.map((e, index) => (
                <Card key={index} degree={e} />
            ))}
        </div>
    );
}
