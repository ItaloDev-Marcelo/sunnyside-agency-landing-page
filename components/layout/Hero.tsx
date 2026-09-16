import Image from "next/image"
import { arrowDown, logo } from "../util/Images"
import { Nav } from "./Nav"

export const Hero = () => {
  return (
    <section className='bg-cover  bg-no-repeat min-h-dvh w-full
    bg-[url(/image-header.jpg)] bg-center xl:bg-[url(/image-header-desk.jpg)]'>
         <header className="flex flex-row justify-between relative items-center py-6 px-7.5  mt-2 xl:mt-0 xl:p-9">
              <Image src={logo} alt='sunnyside-logo' className="w-40" />
              <Nav />
         </header>
         <div className="text-center place-items-center mt-19 xl:mt-20">
          <h1 className="uppercase tracking-wider font-black font-fraunces text-white text-[3rem]  xl:w-auto xl:text-[4.5rem]">We are <br className='xl:hidden'/> creatives</h1>
          <h2><Image src={arrowDown} alt='addowDown-icon' className="w-10 relative top-15" /></h2>
         </div>
    </section>
  )
}
