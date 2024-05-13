import styles from './InfoItem.module.scss';
import classNames from 'classnames';
import {InfoItemProps} from '../../types/infoProps'



export const InfoItem = ({ icon, isLink, text }: InfoItemProps) => {
  const currentText = text || 'Not Available';
  let currentHref = '';

  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://twitter.com/${text}`;
  }

  return (
    <div className={classNames(styles.infoItem, text ? false : styles.empty)}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            target="_blank"
            className={styles.link}
          >
            {currentText}
          </a>
        ) : currentText}
      </div>
    </div>
  )
};