'use client'
import { type FC } from "react"
import { useFormStatus } from "react-dom"
import { CircleNotch } from "@phosphor-icons/react"
import styles from './styles.module.css'

export const SignButton: FC = (): JSX.Element => {

    const { pending } = useFormStatus()

    return (
        <div className={styles.buttonWrapper}>
            <button
                className={styles.button}
                type='submit'
                disabled={pending}
            >
                {pending ? <CircleNotch size={19.5} className={styles.loading} /> : <span className={styles.buttonText}>Firmar</span>}
            </button>
            <div className={styles.gradient} />
        </div>
    )
}