import {useContext} from 'react'

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.style';

import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  };

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon