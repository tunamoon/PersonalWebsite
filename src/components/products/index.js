import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { products} from '../../data';
import SingleProduct from "./SingleProduct";
import { ProductsContainer } from "../../styles/products";
import SingleProductDesktop from "./SingleProductDesktop";


//default is mobile
//grid: there's a container grid, then an item grid
export default function Products() {

    const theme = useTheme();
    const matches = 
        useMediaQuery(theme.breakpoints.down('md'));

    const renderProducts = products.map(products => (
        <ProductsContainer>

        <Grid 
            item 
                key={products.id} 
                //changes grid layout depending on screen size
                /* xs={2} 
                sm={4}
                md={4} */
            display="flex" 
            flexDirection={"column"}
            alignItems="center"
        >
            {matches ? <SingleProduct products={products} matches={matches} />
            : (
                <SingleProductDesktop products={products} matches={matches} />
            )}

        
        </Grid>
        </ProductsContainer>
        
    ));

    return (
        <Container>
            <Grid
                container
                //spacing={{ xs: 2, md: 3}} spacing between images
                justifyContent={"center"}
                    sx={{ margin: '20px 4px 10px 4px'}}
                    columns={{xs: 4, sm: 8, md: 12}}
                >
                    {renderProducts}
                </Grid>
        </Container>
    );
}

