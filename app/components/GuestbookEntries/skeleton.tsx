import { type FC } from 'react'
import { GuestbookEntrySkeleton } from '@components/GuestbookEntry/skeleton'
import styles from './styles.module.css'

export const GuestbookEntriesSkeleton: FC = (): JSX.Element => {

    return (
        <ul className={styles.entries}>
            {[...Array(10).keys()].map((key) => (
                <GuestbookEntrySkeleton key={key} />
            ))}
        </ul>
    )
}