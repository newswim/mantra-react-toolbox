import React from 'react'
import Helmet from 'react-helmet'
import Menu from '../containers/menu'
import styles from './main_layout.scss'

const Layout = ({content = () => null }) => (
  <div>
    <Helmet
        link={[
            {"rel": "stylesheet", "href": "https://fonts.googleapis.com/icon?family=Material+Icons"}
        ]}
    />
  <div className={styles.topBar}>
        <Menu />
    </div>
    <div>
        {content()}
    </div>
  </div>
);

export default Layout;
