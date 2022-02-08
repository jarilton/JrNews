import Head from 'next/head'

import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Jr News</title>
      </Head>

      <h1 className={styles.title}>
      Seja todos <span>bem vindos</span> ao Jr News
    </h1>
    </>
  )
}
