
import { Grid } from '@mui/material'
import { Product } from '../models/Product'
import ProductCard from './ProductCard'
interface Props {
    products: Product[]
}
const ProductsList = ({ products }: Props) => {
    return (
        <Grid container spacing={3}>
            {products?.map((product) => (
                <Grid item xs={12} md={3} sm={6} lg={3} key={product.id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
}

export default ProductsList