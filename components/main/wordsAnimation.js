import styles from '../../styles/main/WordsAnimation.module.scss';
var ReactRotatingText = require('react-rotating-text');

export const WordsAnimation = () => {
  return (
    <div className={styles.words}>
      <ReactRotatingText
        className={styles.ReactRotatingText}
        items={[
          '#Golang',
          '#Python',
          '#Web',
          '#Docker',
          '#Agile',
          '#API',
          '#ReactJS',
          '#JavaScript',
          '#SQL',
          '#OpenSource',
          '#Scrum',
        ]}
      />
    </div>
  );
};
export default WordsAnimation;
