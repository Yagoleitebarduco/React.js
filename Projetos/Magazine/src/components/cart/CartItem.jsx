import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

import { useContext } from "react"
import { useState } from "react"

import { catalogIndexById } from "../../util/catalog"
import { CartContext } from "../../context/CartContext"

const CartItem = ({id, amount}) => {
    const {addToCart, decreaseUnit, removeFromCart} = useContext(CartContext);
    const {price, name, image, brand} = catalogIndexById[id];

    return (
        <article className="flex bg-stone-100 p-1 border rounded relative">
            <img src={image} alt={`Imagem do Produto ${id}, ${name}`} className="h-24" />

            <button onClick={() => removeFromCart(id)} className="text-right text-l absolute top-0 right-2 text-slate-950 cursor-pointer">
                <FontAwesomeIcon icon={faXmark} />
            </button>

            <div className="flex flex-col justify-arrounf mx-2">
                <p className="text-slate-950 text-sm">{name}</p>
                <p className="text-slate-400 text-xs">{brand}</p>
                <p className="text-green-700 text-lg">${price}</p>

                <div className="flex text-slate-950 absolute right-2 bottom-0 mb-2">
                    <button onClick={() => decreaseUnit(id)} className="border border-slate-400 rounded p-1 hover:border-slate-900 mb-2 cursor-pointer">
                        <FontAwesomeIcon icon={faMinus} />
                    </button>

                    <p className="p-2 w-8 mx-auto text-xl flex justify-center text-center">{amount}</p>

                    <button onClick={() => addToCart(id)} className="border border-slate-400 rounded p-1 hover:border-slate-900 mb-2 cursor-pointer">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        </article>
    )
}

export default CartItem