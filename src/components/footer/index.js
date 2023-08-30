import { Box, Button, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { FooterTitle, SubscribeTf } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

//why is the footer not apearing wtf T-T
//it worked yuh

export default function Footer() {
    return (
        <Box
            sx={{
                background: Colors.green,
                color: Colors.white,
                p: { xs: 4, md: 10},
                pt: 12,
                pb: 12,
                fontSize: { xs: '12px', md: '14px'},
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">About us</FooterTitle>
                    <Typography variant="caption2">
                        Do I need to type studd here or should i delete?
                    </Typography>
                    <Box sx={{
                        mt: 4,
                        color: Colors.darkGreen,
                    }}>
                        <LinkedInIcon sx={{ mr: 1}} />
                        <InstagramIcon sx={{ mr: 1}}/>
                        <EmailIcon />
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1"> Information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                About Us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Order Tracking
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">my account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My cart
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Account
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Wishlist
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">newsletter</FooterTitle>
                    <Stack>
                        <SubscribeTf
                            color="primary"
                            label="Email address"
                            variant="standard" />
                                <Button
                                startIcon={<SendIcon sx={{color:Colors.green }} />}
                                sx={{ mt: 4, mb: 4}}
                                variant="contained"
                                >
                                    Subscribe
                                    </Button>
{/*subscribe not showing ugh */}
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}