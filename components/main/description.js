import styles from '../../styles/main/Description.module.scss';
import WordsAnimation from './wordsAnimation';

export const Description = () => {
  return (
    <div className={styles.description}>
      <h1>
        {' '}
        Hello, I'm <a>Robin</a>
      </h1>
      <h2>
        <a>Full Stack Engineer</a>
      </h2>
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
      <WordsAnimation />
    </div>
  );
};

export default Description;
