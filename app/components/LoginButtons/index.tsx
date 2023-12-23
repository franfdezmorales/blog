import { type FC } from 'react'
import { GithubLogo, GoogleLogo, DiscordLogo } from '@phosphor-icons/react/dist/ssr'
import { signIn } from 'next-auth/react'
import styles from './styles.module.css'

export const LoginButtons: FC = (): JSX.Element => {

    return (
        <section className={styles.buttons}>
            <h2 className={styles.title}>Iniciar sesión</h2>
            <button className={styles.loginButton} onClick={() => signIn('github')}>
                <GithubLogo size={19} />
                Accede con GitHub
            </button>
            <button className={styles.loginButton} onClick={() => signIn('google')}>
                <GoogleLogo size={19} />
                Accede con Google
            </button>
            <button className={styles.loginButton} onClick={() => signIn('discord')}>
                <DiscordLogo size={19} />
                Accede con Discord
            </button>
            <p className={styles.description}>
                Es necesario iniciar sesión si quieres dejar una firma (para evitar spam), 
                la unica información que se guarda es el nombre de usuario.
            </p>
        </section>
    )
}