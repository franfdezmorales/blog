import { type FC } from 'react'
import { getLastVisitAndUpdate } from '@lib/home'
import { unstable_noStore as noStore } from 'next/cache'
import styles from './styles.module.css'

export const LastVisit: FC = async (): Promise<JSX.Element> => {

    noStore()

    const { data: lastVisit } = await getLastVisitAndUpdate()

    return (
        <span className={styles.text}>
            {`Última visita desde ${lastVisit ?? 'Madrid, Spain'}`}
        </span>
    )
}