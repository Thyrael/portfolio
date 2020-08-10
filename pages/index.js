import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Header from '../components/header';
import { CopyrightCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
/*var ReactRotatingText = require('react-rotating-text');
<ReactRotatingText className={styles.ReactRotatingText}
items={['FullStack Engineer', 'Working in Atos', 'Co-founder of Lille Gophers']} /> */

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baraffe Robin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header></Header>

      <main className={styles.main}>
        <div className={styles.grid}>
          Hello, I'm Robin
          <Avatar shape='square' size={300} icon={<UserOutlined />} />
        </div>
      </main>

      <footer className={styles.footer}>
        Made by
        <a href='https://twitter.com/RobinBaraffe'>
          {' '}
          <span> Baraffe Robin </span>
        </a>{' '}
        <CopyrightCircleOutlined /> <a> - 2020 </a>
      </footer>
    </div>
  );
}
