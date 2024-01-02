import { type TableHTMLAttributes, type FC } from 'react'
import styles from './styles.module.css'

export const TableHeader: FC<TableHTMLAttributes<HTMLTableCellElement>> = ({ children }): JSX.Element => {

    return (
        <th className={styles.header}>
            {children}
        </th>
    )
}