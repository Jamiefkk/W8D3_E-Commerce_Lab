import React, {useState} from "react";
import ShoppingList from "../components/ShoppingList";


const ShopContainer = () => {

    const [basket, setBasket] =useState([])
    const[item, setItem]= useState(null)
    const[shopItems, setShopItems]= useState([
        {
            name: 'nike boost react',
            price: '10',
            section: 'shoes'
        },
        {
            name: 'nike boost2 react',
            price: '11',
            section: 'boots'
        },
        { name: 'nike boost3 react',
            price: '12',
            section: 'shoes'
        }
        ])

        const handleItemSelected = item => {
            setItem(item)
            console.log();
        }

        

    const cards = shopItems.map((shopItemsObj, i) => {
        return(
            <ShoppingList handleItemSelected={handleItemSelected} key={i}
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
        {cards}
        </>
    )
}

export default ShopContainer