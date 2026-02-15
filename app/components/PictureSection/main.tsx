'use client'

import { ReactNode } from 'react';
import Image from 'next/image'
import { FiCopy } from "react-icons/fi";
import ButtonPill from "./CopyMailBtn";

import { socials } from "./socials";
import { SocialIcon } from 'react-social-icons'
import CopyMailBtn from './CopyMailBtn';

function SocialIconsRow(): ReactNode {
  return (
    <div className="flex flex-row mt-8 gap-4">
      {socials.map((social, index) => (
        <SocialIcon key={index} url={social.url} target='_blank'
          className="hover:scale-110 transition duration-300" />
      ))}
    </div>
  );
}

function Header({ text }: { text: string; }): ReactNode {
  return (<h1 className="text-6xl font-bold">{text}</h1>);
}

function SubHeader({ text }: { text: string; }): ReactNode {
  return (<div className="text-3xl mt-4">{text}</div>);
}

export default function PictureSection() {
  return (
    <div className="grid grid-cols-6 items-center">
      <Image
        className="rounded-full col-span-2"
        src="/pictures/pic.jpg"
        alt="Abykko Logo"
        width={350}
        height={350}
      />
      <div className="col-span-4 text-white px-6 py-4">
        <div className="ml-8">
          <Header text="Ismael Amrani Heras" />
          <SubHeader text="Software Engineer : Human agent"/>
          <SocialIconsRow />
          <CopyMailBtn textCopy={"ismaelah102@gmail.com"} mt={8}>
            <FiCopy className='mt-1 font-black' /> ismaelah102@gmail.com
          </CopyMailBtn>
        </div>
      </div>
    </div>
  )
}