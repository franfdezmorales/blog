import { type FC } from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

export const GuestbookEntrySkeleton: FC = (): JSX.Element => {

    return <li className={clsx(styles.skeleton, 'skeletonLoading')} />
}