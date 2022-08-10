import React from "react";
import Item from "./Item";

const ShoppingList = ({item, handleItemSelected}) => {
    return (
        <>
        <Item handleItemSelected={handleItemSelected} item={item}/>
        </>
    )
}

export default ShoppingList