import Image, { StaticImageData } from 'next/image'

export type TestCardT = {
    img: string | StaticImageData,
    alt: string,
    name: string,
    position: string,
    text: string
}
