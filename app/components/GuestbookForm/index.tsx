
'use client'

import { type FC, useRef, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { create } from '@lib/guestbook'
import { Modal } from '@components/Modal'
import { LoginButtons } from '@components/LoginButtons'
import { ERROR_CODE } from '@types'
import { useLocalStorage } from '@hooks'
import styles from './styles.module.css'

export const GuestbookForm: FC = (): JSX.Element => {

    const formRef = useRef<HTMLFormElement>(null)
    const [loginVisibility, setLoginVisibility] = useState<boolean>(false)
    const { value: defaulFormValue, updateValue, removeValue } = useLocalStorage('entry')
    const { pending } = useFormStatus()

    const handleClose = () => {
        setLoginVisibility(false)
    }

    return (
        <>
            <form ref={formRef} className={styles.formWrapper} action={async (formData) => {
                const response = await create(formData)
                if (response.errorCode === ERROR_CODE.NOT_AUTHENTICATED) {
                    setLoginVisibility(true)
                    const entry = formData.get('entry')?.toString() ?? ''
                    updateValue(entry)
                    return
                }
                if (response.errorCode) {
                    console.error(response.errorMessage)
                    return
                }
                formRef.current?.reset()
                removeValue()
            }}>
                <input
                    className={styles.input}
                    aria-label='Tu mensaje...'
                    placeholder='Tu mensaje...'
                    name='entry'
                    type='text'
                    maxLength={100}
                    defaultValue={defaulFormValue}
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