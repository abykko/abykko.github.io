import { ReactNode } from 'react';
import { ExperienceItem, experiences } from './experiences';

export default function JobExperiences(): ReactNode {

    function ExperienceCard({ company, role, date, location, description }: ExperienceItem): ReactNode {

        function Card({ children }: { children: ReactNode }): ReactNode {
            return (
                <div className="
                mb-8 px-6 py-4 flex-col rounded-md
                backdrop-blur-lg backdrop-saturate-120
                backdrop-brightness-10 backdrop-contrast-200
                ">{children}</div>
            );
        }

        function Header({ text, subtext, mt }: { text: string; subtext?: string; mt?: number }): ReactNode {
            return (
                <div className={`text-2xl font-extrabold mt-${mt}`}>
                    <div>{text}</div>
                    <div className='text-xl font-normal'>{subtext}</div>
                </div>
            );
        }

        return (
            <Card>
                <div className="inline-flex items-center">
                    <Header text={role} subtext={`${date} | ${location} `} />
                </div>
                <p className="text-justify text-lg mt-2 pr-6 leading-5">
                    {description}
                </p>
            </Card>
        );
    }

    return (
        <div className="mt-8">
            {experiences.map((exp, index) => (
                <ExperienceCard
                    key={index}
                    company={exp.company}
                    role={exp.role}
                    date={exp.date}
                    location={exp.location}
                    description={exp.description}
                />
            ))}
        </div>
    );
}