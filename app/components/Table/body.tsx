import { type TableHTMLAttributes, type FC } from 'react'

export const TableBody: FC<TableHTMLAttributes<HTMLTableSectionElement>> = ({ children }): JSX.Element => {

    return (
        <tbody>
            {children}
        </tbody>
    )
}