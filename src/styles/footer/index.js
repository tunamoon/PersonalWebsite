import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";
import { Colors } from "../theme";


export const FooterTitle = styled(Typography)(() => ({
    textTransform: 'uppercase',
    marginBottom: '1em',
}));

export const SubscribeTf = styled(TextField)(() => ({
    '.MuiInputLavel-root': {
        color:Colors.darkGreen
    },
//used to retrieve info, in this case email addresses
    ':-khtml-any-link.MuiInput-root::before': {
        borderBottom: `1px solid ${Colors.darkGreen}`
    },
}));