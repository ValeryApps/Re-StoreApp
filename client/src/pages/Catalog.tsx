
import { useEffect, useState } from 'react';
import ProductsList from '../components/ProductsList';
import { Product } from '../models/Product'

const Catalog = () => {
    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then((data: Product[]) => setProducts(data)
            )
    }, [])
    return (
        <>
            <ProductsList products={products!} />
        </>
    )
}

export default Catalog