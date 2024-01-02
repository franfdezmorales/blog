'use client'
import { type FC } from "react"
import { useFormStatus } from 'react-dom'
import { CircleNotch } from "@phosphor-icons/react"
import styles from './styles.module.css'

export const UploadButton: FC = (): JSX.Element => {

    const { pending } = useFormStatus()

    return (
        <button disabled={pending} type='submit' className={styles.uploadButton}>
            {pending ? <CircleNotch size={22.5} className={styles.loading} /> : <span>Subir archivos</span>}
        </button>
    )
}