'use client'
import { type FC } from 'react'
import { useFormStatus } from "react-dom"
import { X, CircleNotch } from '@phosphor-icons/react'
import clsx from 'clsx'
import styles from './styles.module.css'

export const DeleteButton: FC = (): JSX.Element => {

    const { pending } = useFormStatus()

    return (
        <button disabled={pending} type='submit' className={styles.submitButton}>
            {pending ? <CircleNotch className={clsx(styles.icon, styles.loading)} /> : <X className={styles.icon} />}
        </button>
    )
}