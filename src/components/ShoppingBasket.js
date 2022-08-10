import React from 'react'
import BasketItem from './BasketItem'

function ShoppingBasket({basket}) {

    const total = basket.reduce((total, item) => {
        return total + item.price
      }, 0)

    const cards = basket.map((shopItemsObj, i) => {
        return(
            <BasketItem key={i}
            item={shopItemsObj}
            >
            {shopItemsObj.name}
            </BasketItem>
        )
    })


    
  return (
    <>
    <h1>Basket</h1>
    <div>{cards}</div>
    <p>Basket total = £{total}</p>
    </>
  )
}

export default ShoppingBasket