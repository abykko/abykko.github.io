import Image from "next/image";

let degrees = [
    {
        title: "42 Network",
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
        title: "FP Superior Desarrollo de Aplicaciones Multiplataforma",
        institution: "Davante",
        duration: "2022 - 2024",
        url: "https://www.davante.es"
    },
    {
        title: "FP Medio en Sistemas Microinformáticos y Redes",
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
    {
        title: "ESO",
        institution: "Salesianos San Juan Bosco",
        duration: "-",
        url: "https://lalinea.salesianos.edu/"
    }
]

export default function DegreeSection() {
    return (
        <div className="flex flex-col items-center justify-center mt-16 px-6">
            <h1 className="text-4xl font-bold mb-10 text-center text-gray-100">
                Education and Degrees
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
                {degrees.map((degree, index) => (
                    <div key={index} className="relative rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
                        border border-gray-700/50 p-6
                        shadow-lg shadow-black/40
                        transition-all duration-300
                        hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
                    >
                        <div className="grid grid-cols-2">
                            {/* Enlace al sitio de la institución educativa */}
                            <a href={degree.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
                                <span className="sr-only">Visitar sitio de {degree.institution}</span>
                            </a>
                            {degree.img && (
                                <Image
                                    className=""
                                    src={degree.img}
                                    alt="Abykko Logo"
                                    width={30}
                                    height={30}
                                />
                            )}
                            {/* detalle decorativo */}
                            <span className="absolute top-0 right-0 h-20 w-20 rounded-bl-full bg-blue-500/10"></span>
                            <span className="absolute bottom-0 left-0 h-20 w-20 rounded-tr-full bg-blue-500/10"></span>
                        </div>
                        <h2 className="text-3xl font-semibold text-gray-50 mb-2">
                            {degree.title}
                        </h2>
                        <p className="text-lg text-gray-300 mb-1">
                            {degree.institution}
                        </p>
                        <p className="text-sm text-gray-500">
                            {degree.duration}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}