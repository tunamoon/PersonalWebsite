//use for when i post photos
import theme, { Colors } from "../theme";
import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";


export const PromotionsContainer = styled(Box)(() => ({
    //otherwise if item goes off of screen, causes screen to create scrollbars that are ugly
    [theme.breakpoints.up('md')]: {
        width: '45px 0px 100px 0px',
        padding: '5px 20px 10px 0px',
    },
    display: 'flex',
    //vertically aligns
    justifyContent: 'center',
    //horizontally aligns
    alignItems: 'center',
    padding: '45px 20px 10px 0px',
    overflow:'hidden',
    //background:  "url('images/promotions/My project-1 (9).png')",
    //borderRadius: '16px',

    //need to make border bottom appear and centered
    borderBottom: '1px solid',
    borderBottomColor: Colors.darkGreen,
    width: '400px',
    left: 0,
  right: 0,
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up('md')]: {
    width: '600px',
},
}));

export const MessageText = styled(Typography)(({theme}) => ({
    fontFamily: '"Merriweather", "cursive"',
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',

    },
    color: Colors.darkGreen,
    fontSize: '.8rem'
}));

