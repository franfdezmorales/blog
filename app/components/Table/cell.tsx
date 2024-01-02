import { type TableHTMLAttributes, type FC } from 'react'
import styles from './styles.module.css'

export const TableCell: FC<TableHTMLAttributes<HTMLTableCellElement>> = ({ children }): JSX.Element => {

    return (
        <td className={styles.cell}>
            {children}
        </td>
    )
}