import React from 'react'

import {formatPrice} from './helpers'

const Ad = ({subject, images_thumbs, price}) => (
  <li className="ad">
    <img src={images_thumbs[0]} className="ad-image" alt="" />
    <span className="subject">{subject}</span>
    {
      price !== null &&
      <span className="price">{formatPrice(price)}</span>
    }
  </li>
)

export default Ad
