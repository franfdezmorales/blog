import { read } from "@lib/photos"
import Image from "next/image"
import { notFound } from "next/navigation"
import styles from '@styles/photos.module.css'

export default async function Photos() {

    const { data: photos, errorCode } = await read()

    if (!photos || errorCode) notFound()

    return (
        <div className={styles.main}>
            <ul className={styles.grid}>
                {photos?.map((photo) => (
                    <li className={styles.photo} key={photo.src}>
                        <Image
                            alt='Photo'
                            src={`/photos/${photo.src}`}
                            fill
                            placeholder='blur'
                            blurDataURL={photo.blurSrc}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}