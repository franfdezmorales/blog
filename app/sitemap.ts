import { getAllArticles } from '@lib/articles';

export default async function sitemap() {

    const routes = ['', '/articles', '/guestbook', '/photos'].map((route) => ({
        url: `https://franfdezmorales.com${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    const { data: articles } = await getAllArticles()

    if (!articles) return [...routes]

    const indexedArticles = articles.map((article) => ({
        url: `https://franfdezmorales.com/articles/${article.slug}`,
        lastModified: article.created_at,
    }));

    return [...routes, ...indexedArticles];
}