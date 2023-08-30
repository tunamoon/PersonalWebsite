import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/products";
import { products } from "../../data";


export default function ProductMeta({ products, matches}) {
    return (
        <ProductMetaWrapper>
            <Typography variant={matches ? 'h6': 'h5'} lineHeight={2}>
                
                {products.name}
            </Typography>
            <Typography variant={matches ? 'caption' : 'body1'}>
                ${products.price}
            </Typography>
        </ProductMetaWrapper>
    )
} 