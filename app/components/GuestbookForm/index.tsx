
'use client'

import { type FC, useRef, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { create } from '@lib/guestbook'
import { Modal } from '@components/Modal'
import { LoginButtons } from '@components/LoginButtons'
import styles from './styles.module.css'

export const GuestbookForm: FC = (): JSX.Element => {

    const formRef = useRef<HTMLFormElement>(null)
    const [loginVisibility, setLoginVisibility] = useState<boolean>(false)
    const { pending } = useFormStatus()

    const handleClose = () => {
        setLoginVisibility(false)
    }

    return (
        <>
            <form ref={formRef} className={styles.formWrapper} action={async (formData) => {
                await create(formData)
                setLoginVisibility(true)
            }}>
                <input
                    className={styles.input}
                    aria-label='Tu mensaje...'
                    placeholder='Tu mensaje...'
                    name='entry'
                    type='text'
                    maxLength={100}
                    required
                />
                <div className={styles.buttonWrapper}>
                    <button
                        className={styles.button}
                        type='submit'
                        disabled={pending}
                    >
                        <span className={styles.buttonText}>Firmar</span>
                    </button>
                    <div className={styles.gradient} />
                </div>
            </form>
            {loginVisibility ? 
            <Modal handleClose={handleClose}>
                <LoginButtons />
            </Modal> 
            : null}
        </>
    )
}