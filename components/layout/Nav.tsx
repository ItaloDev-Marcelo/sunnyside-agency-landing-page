'use client'
import {useState} from 'react'
import { ListLink } from '../ui/ListLink'
import Image from 'next/image'
import { hamburger } from '../util/Images'

export const Nav = () => {

  const listItems = ['About','Services','Projects']
  const [navbar, setNavbar] = useState(false)
  const handleNav = () => setNavbar(!navbar)

  return (
    <nav>
       <button className='xl:hidden' onClick={handleNav}><Image src={hamburger}  alt='' /></button>
       <ul className={`${navbar ? 'flex absolute top-30 left-[6%] w-[330px] h-[250px] bg-white ' : 'hidden'} text-black xl:text-white xl:flex flex-col items-center justify-center xl:justify-start xl:flex-row gap-y-3 xl:gap-0`}>
        {
        listItems.map((item,index) => (
          <ListLink title={item} key={index} />
        ))
       }
       <li className='my-2 xl:my-0 xl:ml-10'>
        <button className='w-35 h-13 rounded-full hover:bg-yellow-400 hover:text-white text-black bg-white'>Contact</button>
       </li>
       </ul>
    </nav>
  )
}
