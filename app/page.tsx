import { ReactNode } from "react";
import AboutAndExperience from "./components/AboutAndExperience/main";
import PictureSection from "./components/PictureSection/main";
import TechnologiesAndEducation from "./components/TechnologiesAndEducation/main";

export function CvContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-1/1 h-1/1 pt-10 max-h-screen overflow-scroll">
      <div
        className="
          flex flex-col items-center justify-center
          w-4/6 px-30 py-15 mx-auto rounded-lg shadow-xl
          bg-gray-100/10
          backdrop-blur-lg
          backdrop-brightness-80
          backdrop-contrast-130
          backdrop-saturate-110
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
      <div className="flex flex-row pt-15 gap-x-22">
        <AboutAndExperience />
        <TechnologiesAndEducation/>
      </div>
    </CvContainer>
  );
}
