'use client'

import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'
import { FiCopy } from "react-icons/fi";
import ButtonPill from "./ButtonPill";

const socials = [
  {
    url: 'https://www.github.com/abykko',
  },
  {
    url: 'https://www.linkedin.com/in/ismaelah/',
  },
]

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
          <h1 className="text-6xl font-bold">Ismael Amrani Heras</h1>
          <p className="text-3xl mt-4">Software Engineer : Human agent</p>
          <div className="flex flex-row mt-8 gap-4">
            {socials.map((social, index) => (
              <SocialIcon
                key={index}
                url={social.url}
                target='_blank'
                className="hover:scale-110 transition duration-300"
              />
            ))}
          </div>
          <div className="inline-flex gap-4 mt-12">
            <ButtonPill textCopy={"ismaelah102@gmail.com"}>
              <FiCopy className='mt-1 font-black' /> ismaelah102@gmail.com
            </ButtonPill>
          </div>
        </div>
      </div>
    </div>
  )
}