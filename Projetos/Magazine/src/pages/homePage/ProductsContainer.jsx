import { catalog } from "../../util/catalog"
import ProductCard from "./ProductCard"

const ProductsContainer = ({ femaleProducts }) => {
    return (
        <>
            <section className="container flex flex-wrap mx-auto p-10 justify-center gap-10">
                {
                    (femaleProducts !== null 
                        ? catalog.filter((p) => p.feminine === femaleProducts) 
                        : catalog).map((product) => (
                        <ProductCard {...product} key={`product_${product.id}_key`} />
                    ))
                }
            </section>
        </>
    )
}

export default ProductsContainer