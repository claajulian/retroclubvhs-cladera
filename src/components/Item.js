import React from 'react'
import { Link } from 'react-router-dom';

function Item({ item }) {
  console.log(item);

  const urlDetalle = `/detalle/${item.id}`
  return (
    <div>
      <div>
        <img src={item.img} alt="" />
      </div>
      <div>
        <h2>{item.name}</h2>
        <h2> $ {item.precio}</h2>
        <Link to={urlDetalle}>
          <button>Ver detalle</button>
        </Link>
      </div>
    </div>
  )
}

export default Item