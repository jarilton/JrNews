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
                </div>
            </main>
        </>
    )
}