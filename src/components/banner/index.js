import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matches1 = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <BannerContainer>
            {!matches1 && (
                <BannerImage src="/images/banner/bannerPlant (1).png" /> 
            )}
            <BannerContent>
                <Typography variant="h6"></Typography>
                <BannerTitle variant="h2">I'm Luna</BannerTitle>
                <BannerDescription variant="subtitle">
                        
                    aka tunamoon
                </BannerDescription>
            </BannerContent>
            
        </BannerContainer>
        
        
    );
}