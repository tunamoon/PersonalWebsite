import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { 
    MyList,  
    ActionIconsContainerMobile,
    ActionIconsContainerDesktop} from "../../styles/appbar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { Colors } from "../../styles/theme";

export default function Actions({matches}) {

    const Component = matches 
    ? ActionIconsContainerMobile 
    : ActionIconsContainerDesktop;

    //used for icons, "action items" which moves depending what mode
    //default is column, need to specify row
    return (
        <Component>
            <MyList type="row">
            <ListItemButton 
                sx={{
                    justifyContent: 'center',
                }}
            >
                <ListItemIcon
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: matches ? Colors.green : Colors.darkGreen
                    }}
                >
                    <FavoriteBorderIcon />
                </ListItemIcon>
            </ListItemButton>
            </MyList>
        </Component>
    )
}