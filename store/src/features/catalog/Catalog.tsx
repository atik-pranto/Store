import { Button } from "@mui/material";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";

type catalog = {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: catalog) {
    return (
        <>
            <ProductList products = {products}/>
            <Button variant= 'contained' onClick={addProduct}>Add Product</Button> 
        </>
    )
}