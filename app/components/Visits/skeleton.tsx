import { type FC } from 'react'
import styles from './styles.module.css'

export const VisitsSkeleton: FC = (): JSX.Element => {

    return (
        <span className={styles.visitSkeleton} />
    )
}