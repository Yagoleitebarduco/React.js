import { catalogIndexById } from "../../util/catalog"
import { useState, useContext, useEffect } from "react"
import { CartContext } from "../../context/CartContext"


function calculateTotalPrice(cartObject) {
    let price = 0

    for (const cartItemsId in cartObject) {
        price += catalogIndexById[cartItemsId].price * cartObject[cartItemsId]
    }

    return price
}

const TotalPricecell = () => {
    const { cartItems } = useContext(CartContext);
    const totalPrice = calculateTotalPrice(cartItems);


    return (
        <section className="flex bg-slate-100 p-1 text-green-700 rounded-md justify-evenly">
            <p>Total: </p>
            <p>{`$ ${totalPrice}`}</p>

        </section>
    )
}

export default TotalPricecell