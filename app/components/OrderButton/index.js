/**
*
* OrderButton
*
*/

import React from 'react';


import styles from './styles.css';
import classNames from 'classnames';

function OrderButton({toggleOrderShots, isOrderDesc}) {
  return (
    <div className={styles.orderButton} onClick = { toggleOrderShots }>
    	<span className = {classNames(styles.orderAsc, {[styles.orderDesc] : isOrderDesc })}> Order:</span>
    </div>
  );
}

export default OrderButton;
