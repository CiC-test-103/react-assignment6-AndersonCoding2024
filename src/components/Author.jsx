import styles from './Author.module.css';

const Author = ({ person, date }) => {
  return (
    <div className={styles['card-author']}>
      <img src={person.avatar} className={styles['card-author_avatar']} />
      <div className={styles['card-author_details']}>
        <span className={styles['card-author_name']}>{person.name}</span>
        <span className={styles['card-author_date']}>{date}</span>
      </div>
    </div>
  );
};

export default Author;
