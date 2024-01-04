import { type FC } from 'react'
import { getLastVisitAndUpdate } from '@lib/home'
import { notFound } from 'next/navigation'
import styles from './styles.module.css'

export const LastVisit: FC = async (): Promise<JSX.Element> => {

    const { data: lastVisit, errorCode } = await getLastVisitAndUpdate()

    if (!lastVisit || errorCode) notFound()

    return (
        <span className={styles.text}>
            {`Última visita desde ${lastVisit}`}
        </span>
    )
}