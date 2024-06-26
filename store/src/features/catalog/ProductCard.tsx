
import { Card, Avatar, CardMedia, CardContent, Typography, CardActions, Button, CardHeader } from "@mui/material";
import { Product } from "../../app/models/Product";
import { Link } from "react-router-dom";

type Card = {
    product: Product;
}

export default function ProductCard({ product }: Card){
    return (
        <Card>
            <CardHeader 
                avatar={
                    <Avatar>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title = {product.name}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'secondary.main'}
                }}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contained' }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                   {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
            </CardActions>
        </Card>
    )
}