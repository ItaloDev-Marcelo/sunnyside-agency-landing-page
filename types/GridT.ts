import { StaticImageData } from 'next/image'

export type GridType = {
    mobile: string| StaticImageData,
    desktop: string| StaticImageData,
    alt: string,
    style?: string,
    width?: string
}