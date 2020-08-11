import Head from 'next/head';
import styles from '../styles/main/Main.module.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import Description from '../components/main/description';
import Picture from '../components/main/picture';

export default function Main() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baraffe Robin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.grid}>
          <Description />
          <Picture />
        </div>
      </main>

      <Footer />
    </div>
  );
}
