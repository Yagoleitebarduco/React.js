import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext(null)

export const getAmountOfItemsInCart = (cartItemsObj) => {
    let amount = 0

    for (const productId in cartItemsObj) {
        amount += cartItemsObj[productId]
    }
    return amount
}

const CartContextProvaider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = (productID) => {
        const updatedCart = { ...cartItems, [productID]: (cartItems[productID] ?? 0) + 1 }

        setCartItems(updatedCart);
    }

    const toggleCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }

    const decreaseUnit = (productId) => {
        if (cartItems[productId] > 1) {
            setCartItems({
                ...cartItems, [productId]: cartItems[productId] - 1
            })
        } else {
            removeFromCart(productId)
        }
    }

    const removeFromCart = (productId) => {
        const cartItemsCopy = { ...cartItems }
        delete cartItemsCopy[productId]

        setCartItems(cartItemsCopy)
    }


    return <CartContext.Provider value={{ isCartOpen, setIsCartOpen, cartItems, addToCart, toggleCartOpen, decreaseUnit, removeFromCart }}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvaider