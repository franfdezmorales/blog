import { type TableHTMLAttributes, type FC } from 'react'
import styles from './styles.module.css'

export const TableRow: FC<TableHTMLAttributes<HTMLTableRowElement>> = ({ children }): JSX.Element => {

    return (
        <tr className={styles.row}>
            {children}
        </tr>
    )
}