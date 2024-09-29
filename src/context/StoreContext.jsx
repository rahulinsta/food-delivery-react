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

    const getTotalCartAmount = () =>{
        let totalCartAmount = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0){
                let foodInfo = food_list.find((product)=> product._id === item);
                totalCartAmount += foodInfo.price * cartItems[item];
                
            }
            
        }
        return totalCartAmount;
    }

    const storeValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={storeValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;