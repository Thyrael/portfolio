import styles from '../../styles/main/Picture.module.scss';
import { LinkedinFilled, TwitterSquareFilled, GithubFilled } from '@ant-design/icons';
import { Avatar } from 'antd';

export const Picture = () => {
  return (
    <div className={styles.picture}>
      <Avatar src='./circle-cropped.png' size={400} />
      <div className={styles.socials}>
        <a href=''>
          <LinkedinFilled style={{ color: '#4fc08d', fontSize: '20px' }} />
        </a>
        <a href='https://twitter.com/RobinBaraffe'>
          <TwitterSquareFilled style={{ color: '#4fc08d', fontSize: '20px' }} />
        </a>
        <a href='https://github.com/Thyrael'>
          <GithubFilled style={{ color: '#4fc08d', fontSize: '20px' }} />
        </a>
        <a href='https://keybase.io/thyrael'>
          <img src='./keybase.svg' width='20px' height='20px' />
        </a>
      </div>
    </div>
  );
};
export default Picture;
