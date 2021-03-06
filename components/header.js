import { Breadcrumb } from 'antd';
import { HomeOutlined, ProjectOutlined, BranchesOutlined } from '@ant-design/icons';
import styles from '../styles/Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Breadcrumb separator=''>
        <Breadcrumb.Item href='#home'>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href='#experience'>
          <BranchesOutlined />
          <span>Experience</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item href=''>
          <ProjectOutlined />
          <span>Projects</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Header;
