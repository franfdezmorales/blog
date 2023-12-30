import { type FC } from 'react'
import { getVisitsFromSlug } from '@lib/articles'
import styles from './styles.module.css'

interface Props {
    slug: string
}

export const Visits: FC<Props> = async ({ slug }): Promise<JSX.Element> => {

    const { data: visits } = await getVisitsFromSlug(slug)

    return (
        <span className={styles.visit}>
            {visits ?? 0}
        </span>
    )
}