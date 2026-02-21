export type ExperienceItem = {
    company?: string;
    role: string;
    date: string;
    location?: string;
    description?: string;
};

export const experiences: ExperienceItem[] = [
    {
        company: "Soltel",
        role: "Flutter Developer (Full time)",
        date: "4 Months",
        location: "Sevilla (Hybrid)",
        description:
            "I joined the project at a mid-to-late stage, contributing to a complex inspection management application for the agricultural and fisheries sector."
    },
    {
        company: "Davante",
        role: "Flutter Developer (Internship)",
        date: "3 Months",
        location: "Málaga (Remote)",
        description:
            "I was responsible for building and maintaining a mobile application designed to streamline the recruitment process for teaching vacancies across Spain."
    },
    {
        company: "Crew Estudio",
        role: "Web Developer (Part time)",
        date: "4 Months",
        location: "Cádiz (On site)",
        description:
            "I worked at a digital agency as part of a small team. We collaborated closely with clients to fully understand their needs and translate them into functional, accessibility-friendly websites."
    },
    {
        company: "Hogar Betania",
        role: "IT technician (Internship)",
        date: "3 Months",
        location: "Cádiz (On site)",
        description:
            "I completed an internship at Nuevo Hogar Betania, a non-profit association, where I assembled, diagnosed, and repaired computers, printers, phones, and other office devices."
    }
];