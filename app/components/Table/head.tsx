import { type TableHTMLAttributes, type FC } from 'react'

export const TableHead: FC<TableHTMLAttributes<HTMLTableSectionElement>> = ({ children }): JSX.Element => {

    return (
        <thead>
            {children}
        </thead>
    )
}