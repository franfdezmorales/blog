import { type ButtonHTMLAttributes, type FC } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import styles from './styles.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string,
    label: string,
    sort: string,
    mode: string,
    pathname: string,
    createQueryString: (name: string[], value: string[]) => string
}

export const SorterButton: FC<Props> = ({ name, label, sort, mode, pathname, createQueryString, ...props }): JSX.Element => {

    const router = useRouter()

    const handleSort = () => {
        if (sort === name) {
            const orderMode = mode === 'asc' ? 'desc' : 'asc'
            router.push(`${pathname}?${createQueryString(['sort', 'mode'], [sort, orderMode])}`, { scroll: false })
        } else {
            const orderSort = sort === 'date' ? 'title' : 'date'
            router.push(`${pathname}?${createQueryString(['sort', 'mode'], [orderSort, 'asc'])}`, { scroll: false })
        }
    }

    return (
        <button {...props} onClick={handleSort} className={clsx(styles.sorter, name === sort && styles.active)}>{label} {name === sort ? mode === 'asc' ? '↑' : '↓' : null}</button>
    )
}