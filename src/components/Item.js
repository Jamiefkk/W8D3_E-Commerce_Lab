import React from "react";

const Item = ({item, handleItemSelected}) => {

    const handleClick = () => {
        // handleItemSelected(event.target.value);
        handleItemSelected(item)
        console.log("Bob");
    }

    return (
        <div onClick={handleClick}>
        <p>Name: {item.name}</p>
        <p>Price: £{item.price}</p>
        <p>Section: {item.section}</p>
        <button />
        </div>
    )
}

export default Item