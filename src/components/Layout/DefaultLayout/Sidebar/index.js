import React from 'react';
import styles from './Sidebar.module.scss';
import className from 'classnames/bind';
const cx = className.bind(styles);
const Sidebar = () => {
  return (
    <aside className={cx('wrapper')}>
      <h2>sidebar</h2>
    </aside>
  );
};

export default Sidebar;
