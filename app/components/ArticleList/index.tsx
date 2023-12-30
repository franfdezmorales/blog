import { Suspense, type FC } from 'react'
import { getAllArticles, sortArticles } from "@lib/articles"
import { Article } from '@components/Article'
import { ArticleSorter } from '@components/ArticleSorter'
import { notFound } from 'next/navigation'
import styles from './styles.module.css'

interface Props {
    sortParams: { [key: string]: string | string[] | undefined }
}

export const ArticleList: FC<Props> = async ({ sortParams }): Promise<JSX.Element> => {

    const { data: articles, errorCode } = await getAllArticles()

    if (!articles || errorCode) notFound()

    const sortedArticles = sortArticles(articles, sortParams)

    return (
        <div className={styles.wrapper}>
            <Suspense fallback={null}>
                <ArticleSorter />
            </Suspense>
            <ul className={styles.list}>
                {sortedArticles?.map(article => (
                    <Article
                        key={article.slug}
                        slug={article.slug}
                        title={article.title}
                        created_at={article.created_at}
                    />
                ))}
            </ul>
        </div>
    )
}