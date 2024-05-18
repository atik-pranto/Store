import { List } from "@mui/material";
import { Product } from "../../app/models/Product";
import ProductCard from "./ProductCard";

type productList = {
    products: Product[];
}

export default function ProductList({products}: productList){
    return (
        <>
            <List>
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </List>
        </>
    )
}