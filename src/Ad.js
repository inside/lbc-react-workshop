import React from 'react'

const Ad = ({subject, images_thumbs, price}) => (
  <li>
    <img src={images_thumbs[0]} className="ad-image" alt="" />
    <span className="subject">{subject}</span>
    <span className="price">{price}</span>
  </li>
)

export default Ad
