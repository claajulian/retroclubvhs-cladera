import React from 'react'

function ItemDetail({ item }) {
    return (
        <div>
            <h1> {item.name} </h1>
            <p> {item.description} </p>
            <p> $ {item.precio}</p>
        </div>
    )
}

export default ItemDetail