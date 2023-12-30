import { Suspense, type FC } from 'react'
import Link from 'next/link'
import { Visits } from '@components/Visits'
import styles from './styles.module.css'

interface Props {
    slug: string
    title: string
    created_at: string
}

export const Article: FC<Props> = ({ slug, title, created_at }): JSX.Element => {

    const year = new Date(created_at).getFullYear()

    return (
        <li className={styles.wrapper}>
            <Link href={`/articles/${slug}`} className={styles.link}>
                <span className={styles.date}>{year}</span>
                <span className={styles.title}>{title}</span>
                <Suspense fallback={null}>
                    <Visits slug={slug} />
                </Suspense>
            </Link>
        </li>
    )
}