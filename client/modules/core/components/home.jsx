import React from 'react'
import { Meteor } from 'meteor/meteor'
import {Button, IconButton} from 'react-toolbox/lib/button'
import { BaseComponent } from '/client/modules/react_utils'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card'
import HomeRightBar from './home_right'

import styles from './home.m.styl'

// NEW QUOTE | VIEW/EDIT EXISTING PRICESHEET | SOME OTHER THING

class Home extends BaseComponent {
  render() {
    const { error } = this.props;

    return (
      <div>
        <div className={styles.cardWrapper}>
          <Card raised style={{
              width: '46%',
              backgroundColor: '#68C6BE',
              display: 'inline-block',
              margin: '10px'
            }} >
           <div className={styles.cardText}>
             <h4>New Quote</h4>
           </div>
         </Card>
          <Card raised style={{
              width: '46%',
              backgroundColor: '#6D94C7',
              display: 'inline-block',
              margin: '10px'
            }} >
           <div className={styles.cardText}>
             <h4>View/Edit<br />Existing Pricesheet</h4>
           </div>
         </Card>
          <Card raised style={{
              width: '46%',
              backgroundColor: '#9292C7',
              display: 'inline-block',
              margin: '10px'
            }} >
           <div className={styles.cardText}>
             <h4>Some Other Thing</h4>
           </div>
         </Card>
        </div>
        <HomeRightBar />
      </div>
    );
  }
}

export default Home
