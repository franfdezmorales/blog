import { type FC } from "react"
import clsx from "clsx"
import styles from './styles.module.css'

export const PhotosSkeleton: FC = (): JSX.Element => {

    return (
        <ul className={styles.grid}>
            {[...Array(25).keys()].map((key) => (
                <li key={key} className={clsx(styles.photo, 'skeletonLoading')} />
            ))}
        </ul>
    )
}