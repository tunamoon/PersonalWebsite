//desktop version

import { Divider, Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionWrapper, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./ProductsMeta";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { Colors } from "../../styles/theme";
import ShareIcon from "@mui/icons-material/Share"
import FitScreenIcon from "@mui/icons-material/FitScreen"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";

export default function SingleProductDesktop({products, matches}) {

        //use to slide in cart, expand, and add to cart buttons that I'm not using for products
        const [showOptions, setShowOptions] = useState(false);
        const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog]
        = useDialogModal(ProductDetail);

        const handleMouseEnter = () => {
            setShowOptions(true);
        }

        const handleMouseLeave = () => {
            setShowOptions(false);
        }

        return (
            <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProductImage src={products.image} />
            <ProductFavButton isFav={0} onClick={() => showProductDetailDialog()}>
                <ExpandMoreIcon fontSize="small"/>
            </ProductFavButton>
            {/* {
                showOptions && <ProductAddToCart show={showOptions} variant="contained">
                    Add to Cart
                </ProductAddToCart> 
            can reference add to cart code when adding pictures to hearted page
            } */}

            {/*<ProductMeta products={products} matches={matches} />*/}
            <ProductActionWrapper show={showOptions}>
                {/*depends if mobile or desktop */}
                <Stack 
                    direction="column" >
                    {/*use this for food blog images, hopefully can be in corner, change from border to filled when hovering
                    */}
                    {/* maybe use expand icon, animated text reveal */}
                    </Stack>
            </ProductActionWrapper>
        </Product>
        <ProductDetailDialog products={products} />
            </>
    )
}