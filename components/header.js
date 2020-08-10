import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined, BranchesOutlined } from '@ant-design/icons';
import styles from '../styles/Home.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Breadcrumb separator=''>
        <Breadcrumb.Item href=''>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href=''>
          <UserOutlined />
          <span>About</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item href=''>
          <BranchesOutlined />
          <span>Experience</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Header;
