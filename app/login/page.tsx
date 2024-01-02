import { DiscordLogo, GithubLogo, GoogleLogo } from '@phosphor-icons/react/dist/ssr'
import { signIn } from '@lib/auth'
import styles from '@styles/login.module.css'

export default function Login() {

    return (
        <div className={styles.main}>
            <div className={styles.buttons}>
                <h2 className={styles.title}>Iniciar sesión</h2>
                <form action={async () => {
                    "use server"
                    await signIn("github")
                }}>
                    <button className={styles.loginButton}>
                        <GithubLogo size={19} />
                        Accede con GitHub
                    </button>
                </form>
                <form action={async () => {
                    "use server"
                    await signIn("google")
                }}>
                    <button className={styles.loginButton}>
                        <GoogleLogo size={19} />
                        Accede con Google
                    </button>
                </form>
                <form action={async () => {
                    "use server"
                    await signIn("discord")
                }}>
                    <button className={styles.loginButton}>
                        <DiscordLogo size={19} />
                        Accede con Discord
                    </button>
                </form>
                <p className={styles.description}>
                    Inicia sesión mediante este medio solo
                    si quieres acceder al panel de administración,
                    si tan solo quieres dejar una firma, haz click en el botón de firmar
                    de la propia página y procederas con la autenticación.
                </p>
            </div>
        </div>
    )
}