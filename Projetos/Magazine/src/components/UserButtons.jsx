import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { CartContext, getAmountOfItemsInCart } from "../context/CartContext";

const UserButtons = () => {
    const {toggleCartOpen, cartItems} = useContext(CartContext);
    const amountOfItems = getAmountOfItemsInCart(cartItems)

    return <div>
        <div>
            <button className="px-2 relative cursor-pointer" onClick={toggleCartOpen}>
                <FontAwesomeIcon icon={faBagShopping} />

                {/* !!amountOfitems = ignora 0, null, underfine, false, NaN */}
                {!!amountOfItems && (
                    <div id="cart-amount" className="absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white bg-red-500 border-2 border-white rounded-full -right-2 -top-2">
                        {amountOfItems}
                    </div>
                )}
            </button>
            <Link to=""><FontAwesomeIcon icon={faUser} className="px-2" /></Link>
        </div>
    </div>
}

export default UserButtons;