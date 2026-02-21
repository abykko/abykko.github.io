export type DegreeItem = {
    title: string;
    institution: string;
    duration?: string;
    url?: string;
    img?: string;
};

export const degrees: DegreeItem[] = [
    {
        title: "42 Network Student",
        institution: "42 Network",
        duration: "2025 - Present",
        url: "https://www.42.fr",
        img: "/pictures/42.png"
    },
    {
        title: "Cibersecurity Master's Degree",
        institution: "Davante",
        duration: "2022 - 2024",
        url: "https://www.davante.es"
    },
    {
        title: "FP Superior DAM",
        institution: "Davante",
        duration: "2022 - 2024",
        url: "https://www.davante.es"
    },
    {
        title: "FP Medio SMR",
        institution: "IES Mediterraneo",
        duration: "2020 - 2022",
        url: "https://iesmediterraneo.net"
    },
    {
        title: "Profesional Música",
        institution: "Conservatorio Muñoz molleda",
        duration: "2012 - 2021",
        url: "https://www.conservatoriomunozmolleda.com"
    },
]