import Image from 'next/image'
import { GridType } from '../../types/GridT'

export const GridImage = ({mobile,desktop, alt, style, width}:GridType) => {
  return (
    <div className={style}>
     <Image src={mobile} className={`md:hidden ${width}`} alt={alt} />
     <Image src={desktop} className={`hidden md:block ${width} `} alt={alt} />
    </div>
  )
}
