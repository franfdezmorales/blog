import { Metadata } from "@components/Metadata"
import { getArticleBySlug } from "@lib/articles"
import { type Metadata as MetadataNext } from "next";
import { notFound } from "next/navigation";
import styles from '@styles/article.module.css'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<MetadataNext | undefined> {
    const { data: article } = await getArticleBySlug(params.slug)

    if (!article) {
        return;
    }

    const { title, slug, created_at } = article
    const ogImage = `https://franfdezmorales.com/api/og?title=${title}`;

    return {
        title,
        openGraph: {
            title,
            type: 'article',
            publishedTime: created_at,
            url: `https://franfdezmorales.com/articles/${slug}`,
            images: [{ url: ogImage }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            images: [ogImage],
        },
    };
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {

    const readOnlyParams = await params
    const { data: article, errorCode } = await getArticleBySlug(readOnlyParams.slug)

    if (!article || errorCode) notFound()

    return (
        <div className={styles.main}>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ArticlePost',
                        headline: article.title,
                        datePublished: article.created_at,
                        image: `https://franfdezmorales.com/api/og?title=${article.title}`,
                        url: `https://franfdezmorales.com/articles/${article.slug}`,
                        author: {
                            '@type': 'Person',
                            name: 'Francisco Fernández',
                        },
                    }),
                }}
            />
            <h1 className={styles.title}>{article.title}</h1>
            <Metadata created_at={article.created_at} slug={readOnlyParams.slug} />
            <section className={styles.content}>
                {article.content}
            </section>
        </div>
    )
}