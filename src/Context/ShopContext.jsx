import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

// Create a context object which is initialise with null, store it in the shopcontext variable
export const ShopContext = createContext(null);

// It is used to add the products to cart for that first it will initialise the cart with 0 and iterate it thought the number of products
const getDefaultCart = ()=>{
    let cart = {};
    for(let index = 0; index<all_product.length+1; index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    // Using the context we can use the cart utem data into any component
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    // Add to cart the products
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        // Its a type of Link to our Add to cart
        console.log(cartItems); 
    } 
    // Remove the products from the cart
    const removeToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems)
            {
                console.log(cartItems)
            if(cartItems[item]>0)
                {
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            
        }
        return totalAmount;
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems) 
            {
                if(cartItems[item]>0)
                    {
                        totalItem+= cartItems[item];
                    }
            }
            return totalItem;
    }

    // Inside it we will provide the data and function is to be provided in the shopContextProvider as a value and parameter
    // Using that we can access these functions and values in any component
    const ContextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeToCart};

    return(
    <ShopContext.Provider value={ContextValue}>
        {props.children}
    {/* This is a React context provider that makes the ContextValue available to all the child components. */}
    </ShopContext.Provider>
    )
    
}
// in simple terms, ShopContextProvider makes the all_product data accessible to any components inside it.
export default ShopContextProvider;