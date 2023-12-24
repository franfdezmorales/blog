import type { FC } from 'react'
import styles from './styles.module.css'

interface Props {
    id: string,
    name: string,
    content: string,
    created_at: number
}

export const GuestbookEntry: FC<Props> = ({ id, name, content, created_at }): JSX.Element => {

    return (
        <li className={styles.wrapper}>
            <span className={styles.author}>{name}</span>
            <p className={styles.content}>{content}</p>
            <div className={styles.separator} />
            <span className={styles.date}>{created_at}</span>
        </li>
    )
}