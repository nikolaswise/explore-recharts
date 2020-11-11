import Head from 'next/head'
import Sales from '../components/sales'
import Activity from '../components/activity'
import Views from '../components/views'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Let's Explore Charting
        </h1>

        <p className={styles.description}>
          With <a className={styles.link}href="https://recharts.org/en-US">Recharts</a>
        </p>

        <div className={styles.grid}>
          <Sales />

          <div className={styles.subgrid}>
            <Activity />

            <Views />
          </div>

        </div>
      </main>
    </div>
  )
}
