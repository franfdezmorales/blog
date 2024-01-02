import { X } from "@phosphor-icons/react/dist/ssr"
import { type FC } from "react"
import { deleteGuestbookEntry } from "@lib/admin"
import { revalidateTag } from "next/cache"
import { DeleteButton } from "./buttonForm"

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
            <DeleteButton />
        </form>
    )
}