import { cache, type FC } from 'react'
import { updateVisitsFromSlug } from '@lib/articles'
import styles from './styles.module.css'

interface Props {
    slug: string
}

const incrementVisits = cache(updateVisitsFromSlug)

export const UpdateVisits: FC<Props> = async ({ slug }): Promise<JSX.Element> => {

    const { data: visits } = await incrementVisits(slug)

    return (
        <span className={styles.visit}>
            {visits ?? 0} visitas
        </span>
    )
}