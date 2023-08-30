import styled from "@emotion/styled";
import theme, { Colors } from "../theme";
import { Box, IconButton } from "@mui/material";
import { slideInRight } from "../../animation";



export const Product = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'left',
    alignItems: "center",
    flexDirections: 'vertical',
    [theme.breakpoints.up('md')]: {
        position: 'relative' //make relative to product, not page size

    },
    padding: '10px 30px 10px 30px',
    flexDirection: "column",
    
}));

export const ProductImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '80%',
    background: Colors.white,
    padding: '0px',
    [theme.breakpoints.down('md')]: {
        width: '40%',
        padding: '0px',
    },
}));

export const ProductActionButton = styled(IconButton)(() => ({
    margin: 4,
}));

//not actually fav button, will use this button for food blog though
export const ProductFavButton = styled(ProductActionButton, {
    shouldForwardProp: (prop) => prop !== 'isFav'
})(({ isFav, theme }) => ({
    color: isFav ? Colors.darkGreen : Colors.white,
    [theme.breakpoints.up("md")]: {
        position: "absolute",
        right: 28,
        top: 0,
    },
}));

//don't need to add to cart

export const ProductMetaWrapper = styled(Box)(({theme}) => ({
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

export const ProductActionWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme}) => ({
    [theme.breakpoints.up('md')]: {
        display: show ? 'visible' : 'none',
        position: 'absolute',
        right: 0,
        top: '20%',
        animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },
}));

export const ProductsContainer = styled(Box)(() => ({
    //background:  "url('images/products/product_bg.png')",
}));