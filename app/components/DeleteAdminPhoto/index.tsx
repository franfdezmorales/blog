import { X } from "@phosphor-icons/react/dist/ssr"
import { type FC } from "react"
import { deletePhoto } from "@lib/admin"
import { revalidateTag } from "next/cache"
import { DeleteButton } from "./buttonForm"

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
            <DeleteButton />
        </form>
    )
}