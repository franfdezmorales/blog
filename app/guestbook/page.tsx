import { GuestbookEntry } from '@components/GuestbookEntry'
import { GuestbookForm } from '@components/GuestbookForm'
import styles from '@styles/guestbook.module.css'

export default function Guestbook() {


    return (
        <div className={styles.main}>
            <h1 className={styles.title}>guestbook</h1>
            <p className={styles.description}>
                Deja tu firma para que los demas puedan verla, realmente puedes escribir lo que desees, el límite lo pones tú (y los 100 carácteres).
            </p>
            <GuestbookForm />
            <ul className={styles.entries}>
                <GuestbookEntry id='1' author='Interglot' content='hola, esto es un texto largo' created_at='2022' />
                <GuestbookEntry id='1' author='Interglot' content='hola, esto es un texto largo pero largo largo, para ver como c ve' created_at='2022' />
                <GuestbookEntry id='1' author='Interglot' content='hola, esto es un texto largo' created_at='2022' />
                <GuestbookEntry id='1' author='Interglot' content='hola, esto es un texto largo' created_at='2022' />
                <GuestbookEntry id='1' author='Interglot' content='hola, esto es un texto largo pero largo largo, para ver como c ve' created_at='2022' />
                <GuestbookEntry id='1' author='Interglot' content='hola, esto es un texto largo' created_at='2022' />
                <GuestbookEntry id='1' author='Interglot' content='hola, esto es un texto largo pero largo largo, para ver como c ve' created_at='2022' />
                <GuestbookEntry id='1' author='Interglot' content='hola, esto es un texto largo' created_at='2022' />
                <GuestbookEntry id='1' author='Interglot' content='hola, esto es un texto largo pero largo largo, para ver como c ve' created_at='2022' />
                <GuestbookEntry id='1' author='Interglot' content='hola, esto es un texto largo' created_at='2022' />
            </ul>
        </div>
    )
}