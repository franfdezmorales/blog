import { X } from "@phosphor-icons/react/dist/ssr"
import { type FC } from "react"
import { deleteGuestbookEntry } from "@lib/admin"
import { revalidateTag } from "next/cache"
import styles from './styles.module.css'

interface Props {
    id: string
}

export const DeleteAdminEntry: FC<Props> = ({ id }): JSX.Element => {

    return (
        <form action={async () => {
            "use server"
            const { data: success } = await deleteGuestbookEntry(id)
            if (success) revalidateTag('guestbook-entries')
        }}>
            <button type='submit' className={styles.submitButton}>
                <X className={styles.icon} />
            </button>
        </form>
    )
}