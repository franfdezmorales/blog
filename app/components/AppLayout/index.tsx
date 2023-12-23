import type { ReactNode, FC } from 'react'
import styles from './styles.module.css'
import { Menu } from '@components/Menu'

interface Props {
    children: ReactNode
}

export const AppLayout: FC<Props> = ({ children }): JSX.Element => {
    
    return (
        <main className={styles.layout}>
            {children}
            <Menu />
        </main>
    )
}