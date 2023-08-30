import { Box,styled} from "@mui/system";
import { TextField } from "@mui/material";
import { Colors } from "../theme";
import '@fontsource/dosis';


export const SearchBoxContainer = styled(Box)(({ theme }) => ({

    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: Colors.darkGreen,
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999,
    opacity: 0.9
}));

export const SearchField = styled(TextField)(({theme}) => ({
    
    //targeting stuff by class names
    ".MuiInputLabel-root": {
        color: Colors.purple
    }, 

    ".MuiInput-root": {
        fontSize: '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
            fontFamily: 'Dosis',
        },
        color: Colors.white
        
    },
    ".MuiInput-root::before": {
        borderBottom:  `1px solid ${Colors.green}`
    },

    padding: "0 0 0 40px"

}));
