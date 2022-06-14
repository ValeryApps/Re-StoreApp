import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { Product } from '../models/Product'
interface Props {
    product: Product
}
const ProductCard = ({ product }: Props) => {
    return (
        <Card >
            <CardHeader avatar={
                <Avatar sx={{ bgcolor: 'secondary.main' }}>{product.name.charAt(0).toUpperCase()}</Avatar>

            }
                title={product.name}
                titleTypographyProps={
                    {
                        sx: { fontWeight: 'bold', color: 'primary.main' }
                    }
                }
            />
            <CardMedia component="img"
                image={product.pictureUrl}
                title={product.name}
                sx={{ backgroundSize: 'contain', bgcolor: 'primary.light' }} />
            <CardContent style={{ padding: '1rem' }}>
                <Typography variant="h6" color='secondary.main'>
                    ${product.price.toFixed(2)}
                </Typography>
                <Typography variant='body2' >
                    {product.brand} - {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button>Add To Cart</Button>
                <Button>View</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard