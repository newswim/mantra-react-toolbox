import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Helmet from 'react-helmet'

const Layout = ({content = () => null }) => (
  <div>
    <Helmet
        link={[
            {"rel": "stylesheet", "href": "https://fonts.googleapis.com/icon?family=Material+Icons"}
        ]}
    />
    <AppBar relative flat>
    </AppBar>
    <div>
        {content()}
    </div>
  </div>
);

export default Layout;
