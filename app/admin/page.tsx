import { AdminGuestbookEntries } from '@components/AdminGuestbookEntries'
import { Suspense } from 'react'
import { unstable_noStore as noStore } from 'next/cache'
import { AdminPhotosVisualizer } from '@components/AdminPhotosVisualizer'
import { AdminPhotoUploader } from '@components/AdminPhotoUploader'
import styles from '@styles/admin.module.css'

export default function Admin() {

    noStore()

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>panel de administración</h1>
            <section className={styles.guestbook}>
                <h2 className={styles.sectionTitle}>guestbook</h2>
                <Suspense fallback={null}>
                    <AdminGuestbookEntries />
                </Suspense>
            </section>
            <section className={styles.photos}>
                <h2 className={styles.sectionTitle}>fotos</h2>
                <div className={styles.photosTools}>
                    <Suspense fallback={null}>
                        <AdminPhotosVisualizer />
                    </Suspense>
                    <AdminPhotoUploader />
                </div>
            </section>
        </div>
    )
}