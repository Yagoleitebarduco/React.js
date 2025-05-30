import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

import CartProduct from "./CartProduct"
import TotalPricecell from "./TotalPriceCell"

const CartOverlay = () => {

    const { toggleCartOpen, isCartOpen } = useContext(CartContext)

    return (
        <div className={`h-screen w-screen fixed top-0 left-0 flex z-50 ease-in-out duration-200 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <section id="outside-of-cart" className="w-3/4 bg-slate-950 opacity-50" onClick={toggleCartOpen}></section>

            <section id="cart" className="w-1/4 bg-slate-950 min-w-96 border-1-4 border-slate-400 p-5 flex flex-col justify-between text-white">
                <div className="flex justify-between border-b border-slate-50 px-4 py-2">
                    <p>Minha Sacola</p>

                    <button className="cursor-pointer" onClick={toggleCartOpen}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                </div>

                <CartProduct />

                <TotalPricecell />
                <Link to='/checkout' className="bg-slate-100 text-slate-950 rounded-sm p-1 hover:bg-slate-300 text-center">
                    Finalizar Compra
                </Link>
            </section>
        </div>
    )

}

export default CartOverlay