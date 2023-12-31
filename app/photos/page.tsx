import { read } from "@lib/photos"
import Image from "next/image"
import { type Metadata } from "next"
import { notFound } from "next/navigation"
import styles from '@styles/photos.module.css'

export const metadata: Metadata = {
    title: 'Fotos',
    description: 'Echa un vistazo a mis fotos preferidas'
}

export default async function Photos() {

    const { data: photos, errorCode } = await read()

    if (!photos || errorCode) notFound()

    return (
        <div className={styles.main}>
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
        </div>
    )
}