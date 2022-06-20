import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import { productos } from '../mock/products'
import ItemDetail from './ItemDetail'
// import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer(props) {

  const [product, setProduct] = useState({})
  const { id } = useParams();
  console.log("parametros:", id);


  useEffect(() => {
    const traerProducto = new Promise((res, rej) => {
      setTimeout(() => {
        let idNum = parseInt(id);
        const itemFound = productos.find( detalle => {
          return detalle.id === parseInt(id)
        })
        res(itemFound)
      }, 2000)
    })
    traerProducto.then((res) => {
      //console.log(res);
      setProduct(res);
    })
  }, [id])

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
