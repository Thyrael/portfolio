import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Header from '../components/header';
import { CopyrightCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
var ReactRotatingText = require('react-rotating-text');

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
          <div className={styles.content}>
            <h1> Hello, I'm Robin</h1>
            <h2>Full Stack Engineer</h2>
            <span>
              Currently working in <a>Atos</a> (Lille) as <a>Scrum Master</a> & <a>Full Stack Engineer</a>
            </span>
            <span>
              Co-founder of <a href='https://github.com/Lille-Gophers'>Lille Gophers</a> &{' '}
              <a href='https://github.com/Los-Crackitos'>Los-Crackitos</a>
            </span>
            <p>
              {' '}
              Open source lover, i'm trying to promote this mindset through our{' '}
              <a href='https://github.com/Los-Crackitos'>Los-Crackitos</a> repositories
            </p>

            <div className={styles.words}>
              <ReactRotatingText
                className={styles.ReactRotatingText}
                items={['#Golang', '#Python', '#Web', '#Docker', '#API', '#ReactJS', '#JavaScript']}
              />
            </div>
          </div>
          <Avatar src='./photo.jpg' />
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
