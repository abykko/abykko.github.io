import { ReactNode } from "react";
import AboutAndExp from "./components/AboutAndExp";
import PictureSection from "./components/PictureSection";
import Degrees from "./components/Degrees";
import Technologies from "./components/Technologies";

export function CvContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-1/1 h-1/1 pt-16 max-h-screen overflow-scroll">
      <div
        className="
          flex
          flex-col items-center
          justify-center
          w-4/6
          p-16
          mx-auto
          backdrop-contrast-130
          backdrop-brightness-85
          backdrop-blur-lg
          backdrop-saturate-110
          bg-gray-100/10
          shadow-xl
          rounded-lg
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
      <div className="flex flex-row pt-15 pl-4">
        <div className="flex-col">
          <AboutAndExp />
        </div>
        <Technologies />
      </div>
      <Degrees />
    </CvContainer>
  );
}
