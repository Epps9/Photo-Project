import React from 'react';
import PropTypes from 'prop-types';
import { FaBell } from 'react-icons/fa';
import {RiMessage2Fill} from 'react-icons/ri';

import styles from './MainLayout.module.scss';

const Component = ({children}) => (
  <div className={styles.root}>
    <div className={styles.top_bar}>
      <h1>Photo Gallery</h1>
      <input type="text" placeholder="search..."></input>
      <div className={styles.left_side}>
        <FaBell className={styles.icon}/>
        <RiMessage2Fill className={styles.icon}/>
        <p>Log in</p>
      </div>
    </div>
    <div className={styles.wrapper}>
    {children}
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export {
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
