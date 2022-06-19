import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import { productos } from '../mock/products'
import ItemDetail from './ItemDetail'
// import ItemList from './ItemList'

export default function ItemDetailContainer(props) {

  const [product, setProduct] = useState({})


  useEffect(() => {
    const traerProducto = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos[0])
      }, 2000)
    })
    traerProducto.then((res) => {
      //console.log(res);
      setProduct(res);
    })
  }, [])

//   console.log(products);

  return (

    <div>{props.greeting}
      <br></br>
      <ItemCount stock={5} initial={1} />
      {/* <ItemList items={products} /> */}
      <ItemDetail item={product} />
    </div>
  )
}
