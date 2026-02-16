'use client'

import { ReactNode } from 'react';
import Image from 'next/image'
import { socials } from "./socials";
import CopyMailBtn from './CopyMailBtn';
import { FiCopy } from "react-icons/fi";
import { SocialIcon } from 'react-social-icons'

export default function PictureSection() {

  function SocialIconsRow(): ReactNode {
    return (
      <div className="justify-center-safe md:justify-start flex flex-row mt-8 gap-4">
        {socials.map((social, index) => (
          <SocialIcon key={index} url={social.url} target='_blank'
            className="hover:scale-110 transition duration-300" />
        ))}
      </div>
    );
  }

  function Header({ header, subheader }: { header: string; subheader: string; }): ReactNode {
    return (
      <div className='md:mt-0'>
        <h1 className="text-4xl xl:text-6xl font-bold text-pretty">{header}</h1>
        <div className="text-2xl lg:text-3xl mt-4 text-pretty">{subheader}</div>
      </div>
    );
  }

  function Pfp(): ReactNode {
    return (
      <Image
        className="rounded-full justify-center-safe items-center place-content-center"
        src="/pictures/pic.jpg"
        alt="Abykko Logo"
        width={290}
        height={290}
      />
    );
  }

  return (
    <div className="
      flex
      flex-col
      items-center
      justify-center
      text-white
      text-center
      gap-8
      px-3
      sm:items-left
      sm:justify-left
      md:text-left
      md:gap-20
      md:flex-row
      lg:gap-25
      xl:gap-28
    ">
      <Pfp />
      <div>
        <Header header="Ismael Amrani Heras" subheader='Software Engineer : Human agent' />
        <SocialIconsRow />
        <div className='flex flex-row align-middle justify-center-safe md:justify-start'>
          <CopyMailBtn textCopy={"ismaelah102@gmail.com"} mt={8}>
            <FiCopy className='mt-1 font-black' /> ismaelah102@gmail.com
          </CopyMailBtn>
        </div>
      </div>
    </div>
  )
}