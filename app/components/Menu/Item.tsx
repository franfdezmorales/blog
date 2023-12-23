'use client'
import type { FC, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import styles from './styles.module.css'

interface Props {
    href: string, 
    name: string, 
    icon: ReactNode
}

export const ItemLink: FC<Props> = ({ href, name, icon }): JSX.Element => {

    const pathname = usePathname()
    const itemClass = clsx(styles.item, pathname === href && styles.active)

    return (
        <Link href={href} className={itemClass}>
            {icon}
            <span className={styles.itemTooltip}>{name}</span>
        </Link>
    )
}