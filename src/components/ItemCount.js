import React, { useState } from 'react'

function ItemCount({ stock, initial, onAdd }) {

    const [cantidad, setCantidad] = useState(initial)

    function sumar() {
        if (cantidad < stock) setCantidad(cantidad + 1)
    }

    function restar() {
        if (cantidad > initial) setCantidad(cantidad - 1)
    }

    // function agregarCarrito() {
    //     console.log(`Se agregó al carrito ${cantidad} unidades`);
    //     alert(`Se agregó al carrito ${cantidad} unidades`)
    // }

    return (
        <div>
            <button onClick={restar}>-</button>
            <span>{cantidad}</span>
            <button onClick={sumar}>+</button>
            {/* <button onClick={agregarCarrito}>Agregar al carrito</button> */}
            <button onClick={() => onAdd(cantidad)}> Add to cart </button>
        </div>
    )
}

export default ItemCount