import type { FC } from 'react'
import styles from './styles.module.css'

interface Props {
    id: string, 
    author: string, 
    content: string,
    created_at: string
}

export const GuestbookEntry: FC<Props> = ({ id, author, content, created_at }): JSX.Element => {

    return (
        <li className={styles.wrapper}>
            <span className={styles.author}>{`@${author}`}</span>
            <p className={styles.content}>{content}</p>
            <div className={styles.separator} />
            <span className={styles.date}>{created_at}</span>
        </li>
    )
}