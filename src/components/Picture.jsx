import styles from './Picture.module.css';
import drawers from '../../images/drawers.jpg';

const Picture = () => {
  return (
    <section className={styles['card-picture']}>
      <img src={drawers} className={styles['card-image']} />
    </section>
  );
};
export default Picture;
