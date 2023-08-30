import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarMobile from "./appbarMobile";
import AppbarDesktop from "./appbarDesktop";

export default function Appbar() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return ( 
        //if the screen matches, then it's mobile screen, otherwise desktop screen dimensions to show app bar
        <>
            {matches ? (
                <AppbarMobile matches={matches}/> 
            ) : (
             <AppbarDesktop matches={matches}/>
             )} 
        </>
    );
}