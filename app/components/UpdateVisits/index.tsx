import { type FC } from 'react'
import { updateVisitsFromSlug } from '@lib/articles'
import styles from './styles.module.css'

interface Props {
    slug: string
}

export const UpdateVisits: FC<Props> = async ({ slug }): Promise<JSX.Element> => {

    const { data: visits } = await updateVisitsFromSlug(slug)

    return (
        <span className={styles.visit}>
            {visits ?? 0} visitas
        </span>
    )
}