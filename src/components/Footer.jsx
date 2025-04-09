import { useState } from 'react';
import Author from './Author';
import styles from './Footer.module.css';
import avatar from '../../images/avatar-michelle.jpg';
import facebookIcon from '../../images/icon-facebook.svg';
import twitterIcon from '../../images/icon-twitter.svg';
import pinterestIcon from '../../images/icon-pinterest.svg';

const ShareLink = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles['share-link']}>
      <svg className={styles['share-icon']} width="15" height="15">
        <path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
      </svg>
    </button>
  );
};

const ShareTooltip = ({ onClick }) => {
  return (
    <div className={styles['share-tooltip']}>
      <span className={styles['share-tooltip_text']}>Share</span>
      <img src={facebookIcon} className={styles['share-tooltip_icon']} alt="Facebook" />
      <img src={twitterIcon} className={styles['share-tooltip_icon']} alt="Twitter" />
      <img src={pinterestIcon} className={styles['share-tooltip_icon']} alt="Pinterest" />
      <button onClick={onClick} className={styles['share-tooltip-close']}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M1 1L14 14M14 1L1 14" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>
    </div>
  );
};

const Footer = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className={styles['card-footer']}>
      <Author person={{ name: 'Michelle Appleton', avatar }} date="28 Jun 2020" />
      <ShareLink onClick={toggleTooltip} />
      {showTooltip && <ShareTooltip onClick={toggleTooltip} />}
    </div>
  );
};

export default Footer;