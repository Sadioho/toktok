import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c84c303977de94268b3a2b30244ca4f6~c5_100x100.jpeg?x-expires=1657249200&x-signature=I5M5o7BCqOzZPyCKaTzh7h8fp0Q%3D" alt="userName" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          Ho Xanh
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>sadioho.23411</span>
      </div>
    </div>
  );
};

export default AccountItem;
