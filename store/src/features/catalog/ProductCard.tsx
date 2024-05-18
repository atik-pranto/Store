import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/Product";

type Card = {
    product: Product;
}

export default function ProductCard({product}: Card){
    return (
            
        <ListItem key={product.id}>
            <ListItemAvatar>
                <Avatar src = {product.pictureUrl}/>
            </ListItemAvatar>
            <ListItemText>{product.name} + {product.price}</ListItemText>
        </ListItem>
    )
}