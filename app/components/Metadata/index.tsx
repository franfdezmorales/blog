import { Suspense, type FC } from 'react'
import { relativeFormat } from '@utils'
import Link from 'next/link'
import { UpdateVisits } from '@components/UpdateVisits'
import styles from './styles.module.css'

interface Props {
    slug: string
    created_at: string
}

export const Metadata: FC<Props> = ({ slug, created_at }): JSX.Element => {

    const formattedDate = new Date(created_at).toLocaleString('es-ES', {
        month: 'long',
        year: 'numeric',
    })

    const relativeDate = relativeFormat(created_at)

    return (
        <div className={styles.wrapper}>
            <span className={styles.date}>{`${formattedDate} (${relativeDate})`}</span>
            <Suspense fallback={null}>
                <UpdateVisits slug={slug} />
            </Suspense>
        </div>
    )
}