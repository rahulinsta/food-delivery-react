import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) =>{

        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev, [itemId]:1}))
        }else{

            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        }
    }

    const removeCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}))
    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    const storeValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeCart
    }

    return (
        <StoreContext.Provider value={storeValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;