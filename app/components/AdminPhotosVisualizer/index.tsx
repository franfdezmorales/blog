import { type FC } from 'react'
import { getPhotos } from '@lib/admin'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { DeleteAdminPhoto } from '@components/DeleteAdminPhoto'
import styles from './styles.module.css'

export const AdminPhotosVisualizer: FC = async (): Promise<JSX.Element> => {

    const { data: photos, errorCode } = await getPhotos()

    if (!photos || errorCode) notFound()

    return (
        <ul className={styles.photos}>
            {photos.map(photo => (
                <li key={photo.src} className={styles.photoWrapper}>
                    <Image
                        alt='Photo'
                        src={photo.src}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder='blur'
                        quality={75}
                        blurDataURL={photo.blurSrc}
                    />
                    <div className={styles.photoData}>
                        <span className={styles.photoText}>{photo.name}</span>
                        <span className={styles.photoText}>{`${photo.width}x${photo.height}`}</span>
                        <DeleteAdminPhoto id={photo.src} />
                    </div>
                </li>
            ))}
        </ul>
    )
}