import { type TableHTMLAttributes, type FC } from 'react'
import { TableHeader } from './header'
import { TableCell } from './cell'
import { TableRow } from './row'
import { TableHead } from './head'
import { TableBody } from './body'
import styles from './styles.module.css'

interface CustomFC extends FC<TableHTMLAttributes<HTMLTableElement>> {
    Head: FC<TableHTMLAttributes<HTMLTableSectionElement>>
    Body: FC<TableHTMLAttributes<HTMLTableSectionElement>>
    Row: FC<TableHTMLAttributes<HTMLTableRowElement>>
    Cell: FC<TableHTMLAttributes<HTMLTableCellElement>>
    Header: FC<TableHTMLAttributes<HTMLTableCellElement>>
}

export const Table: CustomFC = ({ children }): JSX.Element => {

    return (
        <table className={styles.table}>
            {children}
        </table>
    )
}

Table.Head = TableHead
Table.Body = TableBody
Table.Header = TableHeader
Table.Cell = TableCell
Table.Row = TableRow