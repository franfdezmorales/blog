import { Suspense, type FC } from 'react'
import { relativeFormat } from '@utils'
import { UpdateVisits } from '@components/UpdateVisits'
import { UpdateVisitsSkeleton } from '@components/UpdateVisits/skeleton'
import { dateFormat } from "@utils"
import styles from './styles.module.css'

interface Props {
    slug: string
    created_at: string
}

export const Metadata: FC<Props> = ({ slug, created_at }): JSX.Element => {

    const formattedDate = dateFormat(created_at, 'es-ES', { month: 'long', year: 'numeric' })
    const relativeDate = relativeFormat(created_at)

    return (
        <div className={styles.wrapper}>
            <span className={styles.date}>{`${formattedDate} (${relativeDate})`}</span>
            <Suspense fallback={<UpdateVisitsSkeleton />}>
                <UpdateVisits slug={slug} />
            </Suspense>
        </div>
    )
}