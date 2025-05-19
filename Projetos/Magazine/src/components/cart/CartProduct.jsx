import CartItem from "./CartItem"
import { use, useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartProduct = () => {
    const {cartItems} = useContext(CartContext);
    const cartItemsArray = []

    for(const itemId in cartItems) {
        cartItemsArray.push({id:Number(itemId), amount:cartItems[itemId]});
    }

    return (
        <section className="flex flex-col justify-start overflow-auto gap-2 h-3/5">
            {cartItemsArray.map((product) => {
                return <CartItem {...product} key={`key_ ${product.id}`} />
            })}
        </section>
    )
}

export default CartProduct