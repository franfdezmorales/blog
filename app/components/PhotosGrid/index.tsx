import { type FC } from 'react'
import { read } from "@lib/photos"
import Image from "next/image"
import { notFound } from "next/navigation"
import { unstable_noStore as noStore } from "next/cache"
import styles from './styles.module.css'

export const PhotosGrid: FC = async (): Promise<JSX.Element> => {

    noStore()

    const { data: photos, errorCode } = await read()

    if (!photos || errorCode) notFound()

    return (
        <ul className={styles.grid}>
            {photos.map((photo) => (
                <li className={styles.photo} key={photo.src}>
                    <Image
                        alt='Photo'
                        src={photo.src}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder='blur'
                        quality={75}
                        blurDataURL={photo.blurSrc}
                    />
                </li>
            ))}
        </ul>
    )
}