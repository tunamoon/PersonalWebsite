import { createTheme } from "@mui/material/styles";
import { lighten } from "polished";

export const Colors = {
    bg: "#EEE2DF",
    green: "#7A9E7E",
    darkGreen: "#31493C",
    purple: "#726DA8",
    black: "#001A23",
    white: "#F8F8F8",
    lightGreen: "#cce0cc",
    beige: "#faf0e6",
};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.bg
        },
        secondary: {
            main: Colors.green,
            secondary: Colors.darkGreen
            
        }
    },

    components: {
        MuiButton: {
            defaultProps: {
                disabledRipple: true,
                disabledElevation: true
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: 250,
                    background: Colors.lightGreen,
                    color: Colors.darkgreen,
                    borderRadius: '0px 100px 0px 0px',
                    borderRight: `1px solid ${Colors.darkGreen}`
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: lighten(0.3, Colors.darkGreen) //not sure why it's not working but ohwell
                }
            }
        },
    },
});

export default theme;