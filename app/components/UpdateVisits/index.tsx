import { type FC } from 'react'
import { updateVisitsFromSlug } from '@lib/articles'
import { unstable_noStore as noStore } from 'next/cache'
import styles from './styles.module.css'

interface Props {
    slug: string
}

export const UpdateVisits: FC<Props> = async ({ slug }): Promise<JSX.Element> => {

    noStore()

    const { data: visits } = await updateVisitsFromSlug(slug)

    return (
        <span className={styles.visit}>
            {visits ?? 0} visitas
        </span>
    )
}