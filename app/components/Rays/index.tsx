import type { FC } from 'react'
import styles from './styles.module.css'

export const Rays: FC = (): JSX.Element => {

    return (
        <div className={styles.raysWrapper}>
            <div className={styles.rays} />
        </div>
    )
}