import { ImgHTMLAttributes, type FC } from "react"
import Image from "next/image"
import styles from './styles.module.css'

export const CustomImage: FC<ImgHTMLAttributes<HTMLImageElement>> = (props): JSX.Element | null => {

    const { src, alt } = props

    if (!src || !alt) return null

    return (
        <Image
            className={styles.image}
            src={src}
            width={800}
            height={500}
            alt={alt}
        />
    )
}