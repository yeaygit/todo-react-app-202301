import React from 'react'

const Item = ({foodInfo}) => {
    // console.log('props: ',foodInfo);

    const {foodName,price:p,quantity}=foodInfo;

  return (
    <li key={foodName}>음식명: {foodName}, 가격: {p}, 수량: {quantity}</li>
  )
}

export default Item