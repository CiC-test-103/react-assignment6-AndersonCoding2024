import Picture from './Picture';
import Title from './Title';
import Info from './Info';
import Footer from './Footer';
import styles from './Card.module.css';

const Card = () => {
  return (
    <article className={styles['card']}>
      <div className={styles['container']}>
        <Picture />
        <section className={styles['card-content']}>
          <Title />
          <Info />
          <Footer />
        </section>
      </div>
    </article>
  );
};
export default Card;
