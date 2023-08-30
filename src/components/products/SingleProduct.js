//passes in props

import { Divider, Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionWrapper, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./ProductsMeta";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { Colors } from "../../styles/theme";
import FitScreenIcon from "@mui/icons-material/FitScreen"
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SingleProduct({products, matches}) {

        const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog]
        = useDialogModal(ProductDetail);
        return (
            <>
            
            <Product>
                <ProductImage src={products.image} />
                {/*<ProductMeta products={products} matches={matches} /> */}
                <ProductActionWrapper>
                    {/*depends if mobile or desktop */}
                    <Stack 
                        direction="row" >
                        {/*use this for food blog images, hopefully can be in corner, change from border to filled when hovering
                        <ProductFavButton isFav={1}>
                            <FavoriteBorderIcon />
                        </ProductFavButton>*/}
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <FitScreenIcon color="secondary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionWrapper>
            </Product>
            <ProductDetailDialog products={products} />
            </>
    );
}