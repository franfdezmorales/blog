import { ERROR_CODE, type ResponseDefault } from '@types'
import { compileMDX } from 'next-mdx-remote/rsc'
import fs from 'fs/promises'
import path from 'path'
import { kv } from '@vercel/kv'
import { unstable_noStore as noStore } from 'next/cache'
import { type JSXElementConstructor, type ReactElement } from 'react'
import { components } from '@components/MDX'

interface Article {
    slug: string,
    title: string,
    created_at: string,
    content: ReactElement<any, string | JSXElementConstructor<any>>
}

interface SimpleArticle {
    slug: string,
    title: string,
    created_at: string
}

interface ArticleMetadata {
    title: string,
    created_at: string
}

export const getAllArticles = async (): Promise<ResponseDefault<SimpleArticle[]>> => {

    try {
        const directory = path.join(process.cwd(), 'articles')
        const articlesURL = await fs.readdir(directory)
        const articlesPromise = articlesURL.map(async (articleURL) => {
            const file = await fs.readFile(`${directory}/${articleURL}`)
            const [slug] = articleURL.split('.')
            const { frontmatter } = await compileMDX<ArticleMetadata>({
                source: file,
                options: {
                    parseFrontmatter: true
                }
            })
            const { title, created_at } = frontmatter

            return {
                slug,
                title,
                created_at
            }
        })

        const articles = (await Promise.all(articlesPromise)).toSorted((a, b) => new Date(a.created_at) > new Date(b.created_at) ? -1 : 1)

        return {
            errorCode: null,
            errorMessage: null,
            data: articles
        }

    } catch (err) {
        return {
            errorCode: ERROR_CODE.UNKNOWN_ERROR,
            errorMessage: err as string,
            data: null
        }
    }
}

export const getArticleBySlug = async (slug: string): Promise<ResponseDefault<Article>> => {
    const directory = path.join(process.cwd(), 'articles')
    const articlesURL = await fs.readdir(directory)
    const articleURL = articlesURL.find(url => {
        const [fileName] = url.split('.')
        return fileName === slug
    })

    if (!articleURL) return {
        errorCode: ERROR_CODE.NOT_FOUND,
        errorMessage: 'Article not found',
        data: null
    }

    const file = await fs.readFile(`${directory}/${articleURL}`)
    const { content, frontmatter } = await compileMDX<ArticleMetadata>({
        source: file,
        options: {
            parseFrontmatter: true
        },
        components
    })

    const { title, created_at } = frontmatter
    const article = { title, created_at, content, slug }

    return {
        errorCode: null,
        errorMessage: null,
        data: article
    }
}

export const sortArticles = (articles: SimpleArticle[] | null, sortParams: { [key: string]: string | string[] | undefined }) => {
    if (!articles) return []
    if (Object.keys(sortParams).length === 0) return articles

    if (sortParams.sort === 'date') {
        if (sortParams.mode === 'asc') return articles.toSorted((a, b) => new Date(a.created_at) > new Date(b.created_at) ? -1 : 1)
        return articles.toSorted((a, b) => new Date(a.created_at) < new Date(b.created_at) ? -1 : 1)
    }

    if (sortParams.sort === 'title') {
        if (sortParams.mode === 'asc') return articles.toSorted((a, b) => a.title > b.title ? -1 : 1)
        return articles.toSorted((a, b) => a.title < b.title ? -1 : 1)
    }
}

export const getVisitsFromSlug = async (slug: string): Promise<ResponseDefault<number>> => {

    noStore()
    try {
        const visits = (await kv.hget('visits', slug)) ?? 0
        const typedVisits = Number(visits)

        return {
            errorCode: null,
            errorMessage: null,
            data: typedVisits
        }
    } catch (err) {
        return {
            errorCode: ERROR_CODE.UNKNOWN_ERROR,
            errorMessage: err as string,
            data: null
        }
    }
}

export const updateVisitsFromSlug = async (slug: string): Promise<ResponseDefault<number>> => {

    noStore()
    try {
        const visits = await kv.hincrby("visits", slug, 1)

        return {
            errorCode: null,
            errorMessage: null,
            data: visits
        }
    } catch (err) {
        return {
            errorCode: ERROR_CODE.UNKNOWN_ERROR,
            errorMessage: err as string,
            data: null
        }
    }
}