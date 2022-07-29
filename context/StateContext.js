import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const context = createContext()


export const StateContext = ({ children }) => {
    const [showCart, setshowCart] = useState(false)
    const [cartItems, setcartItems] = useState()
    const [totalPrice, settotalPrice] = useState()
    const [totalQuantities, settotalQuantities] = useState()
    const [qty, setqty] = useState(1)

    return (
        <context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty
            }}
        >
            {children}
        </context.Provider>
    )
}