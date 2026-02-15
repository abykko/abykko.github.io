import { ReactNode } from 'react';
import { FaLocationDot } from "react-icons/fa6";

type ExperienceItem = {
    company?: string;
    role?: string;
    date?: string;
    location?: string;
    icon?: ReactNode;
    description?: string;
};

function Tittle({ text, mt }: { text: string; mt: number }): ReactNode {
    return (
        <p className={`text-4xl font-extrabold mt-${mt}`}>{text}</p>
    );
}

function ExperienceCard({ company, role, date, location, icon, description }: ExperienceItem): ReactNode {

    function Card({ children }: { children: ReactNode }): ReactNode {
        return (
            <div className="
                mb-8 px-10 py-8 flex-col
                bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]/20
                from-[#57534e]/20
                via-[#a8a29e]/20
                to-[#e7e5e4]/20
                backdrop-blur-lg
                backdrop-saturate-70
                backdrop-brightness-120
                rounded-lg
                transition-all
                duration-400
                hover:shadow-lg
                hover:pl-2
            ">{children}</div>
        );
    }

    function JobLocation() {
        return (
            <div className="inline-flex gap-4 items-center">
                <span className='ml-22'>{icon}</span>
                <span>{location}</span>
            </div>
        );
    }

    return (
        <Card>
            <div className="inline-flex">
                <h1 className="text-2xl font-semibold">{role}</h1>
            </div>
            <p className="text-justify text-lg mt-6">
                {description}
            </p >
        </Card>
    );
}

export default function About() {

    const experiences: ExperienceItem[] = [
        {
            company: "Soltel Group",
            role: "Flutter Developer (Full time)",
            date: "01/2025 - 04/2025",
            location: "Sevilla, Spain (Hybrid)",
            icon: <FaLocationDot />,
            description:
                "I joined the project at a mid-to-late stage, contributing to a complex inspection management application for the agricultural and fisheries sector."
        },
        {
            company: "Davante",
            role: "Flutter Developer (Internship)",
            date: "09/2024 - 11/2024",
            location: "Málaga, Spain (Remote)",
            icon: <FaLocationDot />,
            description:
                "I was responsible for building and maintaining a mobile application designed to streamline the recruitment process for teaching vacancies across Spain."
        },
        {
            company: "Crew Estudio",
            role: "Web Developer (Part time)",
            date: "03/2023 06/2023",
            location: "La linea, Cádiz, Spain (On site)",
            icon: <FaLocationDot />,
            description:
                "I worked at a digital agency as part of a small team. We collaborated closely with clients to fully understand their needs and translate them into functional, accessibility-friendly websites."
        },
        {
            company: "Hogar Betania",
            role: "IT technician (Internship)",
            date: "04/2022 06/2022",
            location: "La linea, Cádiz, Spain (On site)",
            icon: <FaLocationDot />,
            description:
                "I completed an internship at Nuevo Hogar Betania, a non-profit association, where I assembled, diagnosed, and repaired computers, printers, phones, and other office devices."
        }
    ];

    return (
        <div className="max-w-8/10 text-white">
            <Tittle text="About" mt={0} />
            <p className="text-2xl pt-4 text-justify">
                Soy un desarrollador de software Español de 21 años. Conservo
                la misma ilusión del principio en cada linea de código.
                Puedes contar conmigo si buscas alguien con vocación, que no
                se deja llevar por las modas y entiende
                el esfuerzo que hay tras un buen producto.
            </p>

            <Tittle text="Experience" mt={8} />

            <div className="mt-8">
                {experiences.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        company={exp.company}
                        role={exp.role}
                        date={exp.date}
                        location={exp.location}
                        icon={exp.icon}
                        description={exp.description}
                    />
                ))}
            </div>
        </div>
    );
}
