import { Product } from "../../app/models/Product";

type catalog = {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: catalog) {
    return (
        <>
            <ul>
                {products.map(product => (
                    <li key={product.id}> {product.name} + {product.price} </li>
                ))}
            </ul>
            <button onClick={addProduct}>Add Product</button> 
        </>
    )
}