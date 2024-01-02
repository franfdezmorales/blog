import { DeleteAdminEntry } from "@components/DeleteAdminEntry"
import { Table } from "@components/Table"
import { getGuestbookEntries } from "@lib/admin"
import { dateFormat } from "@utils"
import { notFound } from "next/navigation"
import { type FC } from "react"

export const AdminGuestbookEntries: FC = async (): Promise<JSX.Element> => {

    const { data: entries, errorCode } = await getGuestbookEntries()

    if (!entries || errorCode) notFound()

    return (
        <Table>
            <Table.Head>
                <Table.Row>
                    <Table.Header>ID</Table.Header>
                    <Table.Header>Email</Table.Header>
                    <Table.Header>Nombre</Table.Header>
                    <Table.Header>Contenido</Table.Header>
                    <Table.Header>Fecha</Table.Header>
                    <Table.Header></Table.Header>
                </Table.Row>
            </Table.Head>
            <Table.Body>
                {entries.map((entry) => (
                    <Table.Row key={entry.id}>
                        <Table.Cell>{entry.id}</Table.Cell>
                        <Table.Cell>{entry.author_email}</Table.Cell>
                        <Table.Cell>{entry.author_name}</Table.Cell>
                        <Table.Cell>{entry.content}</Table.Cell>
                        <Table.Cell>{dateFormat(entry.created_at, 'es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}</Table.Cell>
                        <Table.Cell>
                            <DeleteAdminEntry id={entry.id} />
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}