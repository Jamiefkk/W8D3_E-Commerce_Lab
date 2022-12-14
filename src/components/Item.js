import React from "react";
import styled from "styled-components";

const Item = ({item, handleItemSelected, addItemToBasket}) => {

    const handleClick = () => {
        // handleItemSelected(event.target.value);
        handleItemSelected(item)
        console.log("Bob");
    }
    
    return (
        <Wrapper>
            <Details onClick={handleClick}>
                
                <p>Name: {item.name}</p>
                <p>Price: £{item.price}</p>
                <p>Section: {item.section}</p>
            </Details>
            <button onClick={()=> addItemToBasket(item)} >Add to Basket</button>
        </Wrapper>
    )
}
const Wrapper = styled.li`
    display: flex;
    margin: 10px auto;
    width: 500px;
    background-color: #efebebeb;
    padding: 10px;
    border-radius: 5px;

`
const Comment = styled.blockquote`
    margin: 10px 0;
    font-size: 1.1rem;
`;

const Info = styled.span`
    color: #5252f9; 
    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    font-size: 0.8rem;
`;

const Details = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;

const UserName = styled.div`
    color: #5252f9; 
    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;


export default Item