import { X } from "@phosphor-icons/react/dist/ssr"
import { type FC } from "react"
import { deletePhoto } from "@lib/admin"
import { revalidateTag } from "next/cache"
import styles from './styles.module.css'

interface Props {
    id: string
}

export const DeleteAdminPhoto: FC<Props> = ({ id }): JSX.Element => {

    return (
        <form action={async () => {
            "use server"
            const { data: success } = await deletePhoto(id)
            if (success) revalidateTag('photos')
        }}>
            <button type='submit' className={styles.submitButton}>
                <X className={styles.icon} />
            </button>
        </form>
    )
}