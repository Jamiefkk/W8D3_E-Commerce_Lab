import React, {useState} from "react";
import ShoppingList from "../components/ShoppingList";
import ShoppingBasket from "../components/ShoppingBasket";


const ShopContainer = () => {

    const[basket, setBasket] =useState([])
    const[checkout, setCheckout]= useState(false)
    const[item, setItem]= useState(null)
    const[shopItems, setShopItems]= useState([
        {
            name: 'nike boost react',
            price: 10,
            section: 'shoes'
        },
        {
            name: 'nike boost2 react',
            price: 11,
            section: 'boots'
        },
        { name: 'nike boost3 react',
            price: 12,
            section: 'shoes'
        }
        ])
        
        const handleItemSelected = item => {
            setItem(item);
        }

        const displayCheckout = () => {
            setCheckout(true)
        }
        
        const addItemToBasket = item => {
            let copyBasket=[...basket];
            copyBasket.push(item);
            setBasket(copyBasket)
        }

    const cards = shopItems.map((shopItemsObj, i) => {
        return(
            <ShoppingList addItemToBasket={addItemToBasket} handleItemSelected={handleItemSelected} key={i}
            item={shopItemsObj}
            // price={shopItemsObj.price}
            // section={shopItemsObj.section} 
            >
            
            {shopItemsObj.name}
            </ShoppingList>
        )
    })




    return (
        <>
        <button onClick={displayCheckout}>{basket.length} item(s) in basket</button>
        {cards}
        <ShoppingBasket basket={basket}/>
        </>
    )
}

export default ShopContainer