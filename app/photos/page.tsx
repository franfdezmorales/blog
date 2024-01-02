import { type Metadata } from "next"
import { PhotosGrid } from "@components/PhotosGrid"
import { Suspense } from "react"
import { PhotosSkeleton } from '@components/PhotosGrid/skeleton'
import styles from '@styles/photos.module.css'

export const metadata: Metadata = {
    title: 'Fotos',
    description: 'Echa un vistazo a mis fotos preferidas'
}

export default async function Photos() {

    return (
        <div className={styles.main}>
            <Suspense fallback={<PhotosSkeleton />}>
                <PhotosGrid />
            </Suspense>
        </div>
    )
}