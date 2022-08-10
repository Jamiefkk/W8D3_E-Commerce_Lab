import React from "react";
import Item from "./Item";

const ShoppingList = ({item, handleItemSelected, addItemToBasket}) => {
    return (
        <>

        <Item addItemToBasket={addItemToBasket} handleItemSelected={handleItemSelected} item={item}/>
        </>
    )
}

export default ShoppingList