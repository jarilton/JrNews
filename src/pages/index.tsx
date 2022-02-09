import { GetStaticProps } from 'next';

import styles from './Home.module.scss'

import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {

  return (
    <>
      <Head>
        <title>Home | Jr News</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, <br/> Bem vindos!</span>
          <h1>Dicas do Jamal sobre <span>React</span>.</h1>
          <p>
            Tenha acesso a todas as publicações <br />
            <span>por {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId}/>

        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />

      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {  
  const price = await stripe.prices.retrieve('price_1KQyyPKy7VauIiKOsZBumYBe')
  //usar quando usar o nome do produto
  /* {
     expand: ['product']
  } */



  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return{
    props: {
      product,
    },
    revalidate: 60  * 60 * 24, //24 horas
  }
}
