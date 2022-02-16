/* import { GetStaticProps } from 'next'; */
/* import Prismic from '@prismicio/client' */
/* 
import { getPrismicClient } from '../../services/prismic'; */

import * as prismic from '@prismicio/client'
import fetch from 'node-fetch'

import Head from 'next/head';
import styles from './styles.module.scss';


export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | JrNews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href='#'>
                        <time>01 de março de 1998</time>
                        <strong>O ano do nascimento do Jamal</strong>
                        <p>Deus sabe de todas as coisas, confia nele e ele tudo fará! Se tu creres, tu verás a glória de Deus.</p>
                    </a>
                    <a href='#'>
                        <time>10 de junho de 1992</time>
                        <strong>Copa do mundo</strong>
                        <p>O senhor é meu pastor e nada me faltará.</p>
                    </a>
                    <a href='#'>
                        <time>13 de maio de 1990</time>
                        <strong>Olimpíadas da alemanha</strong>
                        <p>Mil cairão ao teu lado e dez mil a tua direita mas tu não serás atingido.</p>
                    </a>
                </div>
            </main>
        </>
    )
}

/* export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicate.at('document.type', 'posts')
    ], {
        fetch: ['posts.title', 'posts.content'],
        pageSize: 100,
    })

    console.log(response)

    return {
        props: {}
    }
} */

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
    const pages = await client.getAllByType('page', {
        orderings: {
            field: 'document.first_publication_date',
            direction: 'desc',
        },
        lang: 'en-us',
    })
    console.log(JSON.stringify(pages, null, 2))
}

init()