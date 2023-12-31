import { type FC } from 'react'
import { read } from '@lib/guestbook'
import { GuestbookEntry } from '@components/GuestbookEntry'
import { notFound } from 'next/navigation'
import styles from './styles.module.css'

export const GuestbookEntries: FC = async (): Promise<JSX.Element> => {

    const { data: entries, errorCode } = await read()

    if (!entries || errorCode) notFound()

    return (
        <ul className={styles.entries}>
            {entries.map((entry) => (
                <GuestbookEntry key={entry.id} id={entry.id} name={entry.author_name} content={entry.content} created_at={entry.created_at} />
            ))}
        </ul>
    )
}