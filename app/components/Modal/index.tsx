'use client'
import { type ReactNode, type FC } from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.css'

interface Props {
    children: ReactNode, 
    handleClose: () => void
}

export const Modal: FC<Props> = ({ children, handleClose }): JSX.Element => {

    return (
        createPortal(
            <div className={styles.layout} onClick={handleClose}>
                <div className={styles.wrapper} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>, 
            document.body
        )
    )
}