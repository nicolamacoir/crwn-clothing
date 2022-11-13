import React from 'react';
import {CartItemDetails, CartItemContainer} from './cart-item.style';


const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
