import { ReactNode } from "react";
import AboutAndExperience from "./components/AboutAndExperience/main";
import PictureSection from "./components/PictureSection/main";
import TechnologiesAndEducation from "./components/TechnologiesAndEducation/main";

export function CvContainer({ children }: { children: ReactNode }) {
  return (
    <div className="
        w-1/1
        h-1/1
        max-h-screen
        overflow-scroll
        xl:pt-10
    ">
      <div
        className="
          flex 
          flex-col
          items-center
          justify-center
          backdrop-blur-lg
          backdrop-brightness-80
          backdrop-contrast-130
          backdrop-saturate-110
          xl:w-5/6
          2xl:w-5/7
          xl:rounded-lg
          xl:shadow-xl
          px-2
          md:px-10
          lg:px-20
          py-15
          mx-auto
          bg-gray-100/10
        "
      >
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <CvContainer>
      <PictureSection />
      <div className="flex flex-col items-center pt-15 md:flex-row md:gap-x-20 lg:gap-x-30">
        <AboutAndExperience />
        <TechnologiesAndEducation/>
      </div>
    </CvContainer>
  );
}
