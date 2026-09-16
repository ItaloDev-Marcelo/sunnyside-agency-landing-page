import Image from 'next/image'
import { TestCardT } from '../../types/CardT'

export const TestCards = ({img, alt, name, position, text}:TestCardT) => {
  return (
    <article className='w-75 xl:w-78 my-4.5 xl:my-0 xl:mx-4.5 flex flex-col items-center justify-center text-center font-barlow '>
        <Image src={img} alt={alt} className='w-15 xl:w-17.5 mb-3.5 rounded-full' />
        <p className='my-4.5 xl:my-6 text-[18px]'>{text}</p>
        <div className='gap-y-5 '>
            <h4 className='text-[17px] font-semibold mb-2.5'>{name}</h4>
            <h5 className='text-[14px]'>{position}</h5>
        </div>
    </article>
  )
}
