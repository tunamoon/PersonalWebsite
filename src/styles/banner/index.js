import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme, { Colors } from "../theme";
import { Typography } from "@mui/material";

//passed theme in, don't need to do anything else
export const BannerContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0px 0px',
    background: Colors.white,
    // in mobile devices want picture on top, otherwise bottom of appheader
    [theme.breakpoints.down('sm')] : {
        flexDirection: 'column',
        alignItems: 'center'
    },
}));

export const BannerImage = styled('img')(({scrollbarColor, theme }) => ({
    src: 'url(${src})',
    width: '250px',
    [theme.breakpoints.down('md')]: {
        width: '200px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100px',
    },
}));

export const BannerContent = styled(Box)(()  => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
    maxWidth: 420,
    padding: '30px'
}));

export const BannerTitle = styled(Typography)(({theme}) => ({
    lineHeight:1.5,
    fontSize: '72 px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px'
    },
}));

export const BannerDescription = styled(Typography)(({theme}) => ({
    lineHeight: 1.35,
    letterSpacing: 1.25, 
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBotto: "1.5em",
    },
}));

