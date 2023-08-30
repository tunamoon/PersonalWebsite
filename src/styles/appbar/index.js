import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/montez";
import '@fontsource/merriweather';
import '@fontsource/dosis';
import { useState } from 'react';

import '@fontsource-variable/karla'
export const AppbarContainer = styled(Box)(() => ({

    //used to fix unexpected behavior in background colors
    display: 'flex',
    marginTop: 4,
    //boxes in the center
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2 pm 8 pm',
}));

// header
export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    //space between the word
    flexGrow: 4,
    fontSize: '4em',
    fontFamily: 'Merriweather',
    color: Colors.darkGreen,
}));


    




export const MyList = styled(List)(({ type }) => ({

    display: type === 'row' ? 'flex' : 'block',
    flexWrap: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
    right: 10,
    
}));

//how the webpage changes when mode is desktop
export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
}))

//how the webpage changes when mode is on mobile
export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.darkGreen,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    //border on the top
    borderTop: '1 px solid ${Colors.darkGreen}'
}))

export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    left: '250px',
    zIndex: 1999 //stays on top of everything
}));