import { ReactNode } from "react";
import AboutAndTechnologies from "./components/AboutAndTechnologies";
import { PictureSection } from "./components/PictureSection";
import Degrees from "./components/Degrees";

export function CvContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div
        className="
          w-4/6
          p-12
          mt-18
          mx-auto
          backdrop-contrast-150
          backdrop-brightness-90
          backdrop-blur-xl
          backdrop-saturate-100
          bg-gray-100/10
          shadow-xl
          rounded-4xl
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
      <AboutAndTechnologies />
      <Degrees />
    </CvContainer>
  );
}
