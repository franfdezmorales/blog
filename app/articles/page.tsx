import { ArticleList } from '@components/ArticleList'
import { type Metadata } from 'next'
import styles from '@styles/articles.module.css'

export const metadata: Metadata = {
    title: 'Artículos',
    description: 'Encuentra explicaciones y experiencias sobre el mundo web'
}

export default async function Articles({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>artículos</h1>
            <p className={styles.description}>
                Llevo escribiendo desde 2022,
                la mayoría de los artículos son de desarrollo web,
                centrados en javascript y react, también trato temas como el rendimiento,
                estructuras de datos e incluso estilos.
            </p>
            <ArticleList sortParams={searchParams} />
        </div>
    )
}
