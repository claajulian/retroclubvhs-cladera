import React from 'react'

function Item({item}) {
    console.log(item);
  return (
    <div>
        <div>
                <img src={item.img} alt="" />
        </div>
        <div>
            <h2>{item.name}</h2>
            <h2> $ {item.precio}</h2>
        </div>
    </div>
  )
}

export default Item