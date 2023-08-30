import CloseIcon from "@mui/icons-material/Close";
import { Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery } from "@mui/material";
import { Colors } from "../../styles/theme";
import '@fontsource/dosis';
import { Box, styled } from "@mui/system";
import { useTheme } from "@emotion/react";
import { Product, ProductImage } from "../../styles/products";
import { products } from "../../data";
import IncDec from "../ui";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';



function SlideTransition(props) {
    return <Slide direction="down" {...props} />
}

const ProductDetailWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    padding: theme.spacing(4) //consistent spacing around theme
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
}));
export default function ProductDetail({open, onClose, products}) {

    //change image placement
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog
            TransitionComponent={SlideTransition}
            variant="permanat"
            open={open}
            fullScreen
        >
            <DialogTitle sx={{
                background: Colors.beige,
                color: Colors.darkGreen
            }}>
                <Box
                    display={'flex'}
                    alignItems="center"
                    justifyContent={"space-between"}
                    fontFamily={"Dosis"}>
                        {products.name}
                        <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
            </DialogTitle>
            <DialogContent sx={{
                background: Colors.beige,
                color: Colors.darkGreen
            }}>
                <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
                    <Product sx={{ mr: 4 }}>
                        <ProductImage src={products.image1} /> {/*can't get image, 3:14 */}
                    </Product>
                    <ProductDetailInfoWrapper>
                        
                        {/*<Typography sx={{lineHeight: 2}} varaint="h4">
                            {products.name}
        </Typography> */}
                        <Typography variant="body">
                            {products.description}
                        </Typography>
                        {/*<Box 
                            sx = {{mt: 4}}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <IncDec />
                            <Button variant="contained"> Add to Cart</Button>
                        </Box>*/}
                        <Box
                                display="flex"
                                alignItems="center"
                                sx={{
                                    mt: 4,
                                    color: Colors.lightGreen,
                                }}>
                                    <FavoriteBorderIcon sx={{ mr: 1}} />
                                    Favorites
                                </Box>
                                <Box sx={{
                                    mt: 4,
                                    color: Colors.lightGreen
                                }}>
                                    <LinkedInIcon />
                                    <MailOutlineIcon sx={{ pl: 2}}/>
                                    <InstagramIcon sx={{ pl: 2}}/>

                                </Box>
                        
                    </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    )
}