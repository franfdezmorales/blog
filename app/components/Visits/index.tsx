import { type FC } from 'react'
import { getVisitsFromSlug } from '@lib/articles'
import { unstable_noStore as noStore } from 'next/cache'
import styles from './styles.module.css'

interface Props {
    slug: string
}

export const Visits: FC<Props> = async ({ slug }): Promise<JSX.Element> => {

    noStore()

    const { data: visits } = await getVisitsFromSlug(slug)

    return (
        <span className={styles.visit}>
            {visits ?? 0}
        </span>
    )
}