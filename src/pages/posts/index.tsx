import * as prismic from '@prismicio/client'
import fetch from 'node-fetch'

import Head from 'next/head';
import styles from './styles.module.scss';
import { RichText } from 'prismic-dom';

type Pages = {
    slug: string;
    title: string;
    excerpt: string;
    updatedAt: string;
}
interface PagesProps {
    pages: Pages[]
}

export default function Posts({ pages }: PagesProps) {
    return (
        <>
            <Head>
                <title>Posts | JrNews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    {pages.map(page => (
                        <a key={page.slug} href="#">
                            <time>{page.updatedAt}</time>
                            <strong>{page.title}</strong>
                            <p>{page.excerpt}</p>
                        </a>
                    ))}
                </div>
            </main>
        </>
    )
}

const routes = [
    {
        type: 'page',
        path: '/:uid',
    },
]

const repoName = 'your-repo-name'
const endpoint = prismic.getEndpoint(repoName)
const client = prismic.createClient(endpoint, { routes, fetch })

const init = async () => {
    const response = await client.getAllByType('page', {
        orderings: {
            field: 'document.first_publication_date',
            direction: 'desc',
        },
        lang: 'pt-BR',
    })
    const pages = response.map(page => {
        return {
            slug: page.uid,
            title: RichText.asText(page.data.title),
            excerpt: page.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            updatedAt: new Date(page.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })
    return {
        props: {
            pages
        }
    }
}

init()