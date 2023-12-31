import { type FC } from 'react'
import styles from './styles.module.css'

export const UpdateVisitsSkeleton: FC = (): JSX.Element => {

    return (
        <span className={styles.visitSkeleton}>visitas</span>
    )
}