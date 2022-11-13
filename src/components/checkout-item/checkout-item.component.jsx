import { useContext } from 'react';

import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from './checkout-item.style';

import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { price, imageUrl, name, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(cartItem);
  const removeItemFromCartHandler = () => removeItemFromCart(cartItem);
  const clearItemFromCartHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemFromCartHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemFromCartHandler}>&#10005; </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
