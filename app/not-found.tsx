import Link from 'next/link'
import styles from '@styles/notfound.module.css'

export default function NotFound() {

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Página no encontrada</h1>
            <p className={styles.description}>Parece que lo que estás buscando no está disponible en este momento.</p>
            <div className={styles.buttonWrapper}>
                <Link
                    className={styles.button}
                    href='/'
                >
                    <span className={styles.buttonText}>Volver a inicio</span>
                </Link>
                <div className={styles.gradient} />
            </div>
        </div>
    )
}