import React from 'react'
import imagen from '../img/cart.png'

function CartWidget() {
  return (
    <div>
      <img src={imagen} width="30px" alt="carrito de compra" />
    </div>
  )
}

export default CartWidget;