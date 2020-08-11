import styles from '../styles/Footer.module.scss';
import { CopyrightCircleOutlined } from '@ant-design/icons';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made by
      <a href='https://twitter.com/RobinBaraffe'>
        {' '}
        <span> Baraffe Robin </span>
      </a>{' '}
      <CopyrightCircleOutlined /> <a> - 2020 </a>
    </footer>
  );
};

export default Footer;
