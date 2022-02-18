import * as prismic from '@prismicio/client'
import fetch from 'node-fetch'

import Head from 'next/head';
import styles from './styles.module.scss';
import { RichText } from 'prismic-dom';

type Posts = {
    slug: string;
    title: string;
    excerpt: string;
    updatedAt: string;
}
interface PostsProps {
    posts: Posts[]
}

export default function Posts({ posts }: PostsProps) {
    return (
        <>
            <Head>
                <title>Posts | JrNews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map(post => (
                        <a key={post.slug} href="#">
                            <time>{post.updatedAt}</time>
                            <strong>{post.title}</strong>
                            <p>{post.excerpt}</p>
                        </a>
                    ))}
                </div>
            </main>
        </>
    )
}

const routes = [
    {
        type: 'post',
        path: '/:uid',
    },
]

const repoName = 'your-repo-name'
const endpoint = prismic.getEndpoint(repoName)
const client = prismic.createClient(endpoint, { routes, fetch })

const init = async () => {
    const response = await client.getAllByType('post', {
        orderings: {
            field: 'document.first_publication_date',
            direction: 'desc',
        },
        lang: 'pt-BR',
    })
    const posts = response.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })
    return {
        props: {
            posts
        }
    }
}

init()