import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'


function ItemDetail({ item }) {

    const [cant, setCant] = useState(0)

    const onAdd = (cantidad) => {
        setCant(cantidad);
    }

    return (
        <div>
            <h1> {item.name} </h1>
            <p> {item.description} </p>
            <p> $ {item.precio}</p>
            {
                cant === 0
                ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                : <Link to='/cart'>Ir al carrito</Link>
            }
            
            
        </div>
    )
}

export default ItemDetail