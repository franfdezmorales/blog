import { Suspense } from 'react'
import { GuestbookEntries } from '@components/GuestbookEntries'
import { type Metadata } from 'next'
import { GuestbookForm } from '@components/GuestbookForm'
import { GuestbookEntriesSkeleton } from '@components/GuestbookEntries/skeleton'
import styles from '@styles/guestbook.module.css'

export const metadata: Metadata = {
    title: 'Guestbook',
    description: 'Deja tu marca para que los demás la vean'
}

export default function Guestbook() {

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>firmas</h1>
            <p className={styles.description}>
                Deja tu firma para que los demas puedan verla, realmente puedes escribir lo que desees, el límite lo pones tú (y los 100 carácteres).
            </p>
            <GuestbookForm />
            <Suspense fallback={<GuestbookEntriesSkeleton />}>
                <GuestbookEntries />
            </Suspense>
        </div>
    )
}