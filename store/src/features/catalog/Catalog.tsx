import httpAgent from "../../app/api/httpAgent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        httpAgent.Catalog.list()
        .then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, []);

    if(loading) return <LoadingComponent />

    return (
        <>
         <ProductList products = {products}/>
        </>
    )
}