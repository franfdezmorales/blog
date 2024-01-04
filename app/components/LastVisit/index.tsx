import { type FC } from 'react'
import { ip } from '@utils'
import styles from './styles.module.css'

export const LastVisit: FC = async (): Promise<JSX.Element> => {

    const response = await fetch(`http://ip-api.com/json/${ip()}`, { next: { revalidate: 1 } })
    const { city = 'Madrid', country = 'Spain' } = await response.json()

    return (
        <span className={styles.text}>
            {`Última visita desde ${city}, ${country}`}
        </span>
    )
}