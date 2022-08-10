import React from "react";

const Item = ({item, handleItemSelected, addItemToBasket}) => {

    const handleClick = () => {
        // handleItemSelected(event.target.value);
        handleItemSelected(item)
        console.log("Bob");
    }
    
    return (
        <div>
            <div onClick={handleClick}>
                <p>Name: {item.name}</p>
                <p>Price: £{item.price}</p>
                <p>Section: {item.section}</p>
            </div>
            <button onClick={()=> addItemToBasket(item)} >Add to Basket</button>
        </div>
    )
}

export default Item