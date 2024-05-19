import { Grid } from "@mui/material";
import { Product } from "../../app/models/Product";
import ProductCard from "./ProductCard";

type productList = {
    products: Product[];
}

export default function ProductList({products}: productList){
    return (
        <>
            <Grid container spacing={4}>
                {products.map(product => (
                    <Grid item xs={3} key={product.id}>
                        <ProductCard key={product.id} product={product}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}