import styles from '../../styles/main/Picture.module.scss';
import { LinkedinFilled, TwitterSquareFilled, GithubFilled } from '@ant-design/icons';
import { Avatar } from 'antd';

export const Picture = () => {
  return (
    <div className={styles.picture}>
      <Avatar src='./photo.jpg' />
      <div className={styles.socials}>
        <LinkedinFilled />
        <TwitterSquareFilled />
        <GithubFilled />
      </div>
    </div>
  );
};
export default Picture;
