import { type FC } from 'react'
import styles from './styles.module.css'
import { host } from '@utils'

export const LastVisit: FC = async (): Promise<JSX.Element> => {

    const response = await fetch(`${host()}/api/geolocation`, { next: { revalidate: 1 } })
    const { city = 'Madrid', country = 'Spain' } = await response.json()

    return (
        <span className={styles.text}>
            {`Última visita desde ${city}, ${country}`}
        </span>
    )
}