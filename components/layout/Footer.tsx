import Image from "next/image"
import { logoGreen } from "../util/Images"
import { ListLink } from "../ui/ListLink"
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


export const Footer = () => {
  const listItems = ['About','Services','Projects']

  return (
    <footer className="flex flex-col justify-center items-center place-content-around h-70 xl:h-86 bg-[#90d4c5]  gap-7">
        <Image src={logoGreen} alt='sunnyside logo'   />
        <ul className='flex flex-row gap-x-4 xl:gap-x-3.5'>
            {
            listItems.map((item,index) => (
                <ListLink key={index} title={item} style='hover:text-white  text-green500 active:text-white' />
            ))
        }
        </ul>

        <ul className='flex flex-row gap-x-4 xl:gap-x-7.5'>
            <li><IoLogoFacebook  size={25} className='text-green500 hover:text-white active:text-white cursor-pointer'/></li>
            <li><FaInstagram  size={25} className='text-green500 hover:text-white active:text-white cursor-pointer'/></li>
            <li><FaTwitter  size={25} className='text-green500 hover:text-white active:text-white cursor-pointer'/></li>
            <li><FaPinterest size={25} className='text-green500 hover:text-white active:text-white cursor-pointer'/></li>
        </ul>
    </footer>
  )
}
