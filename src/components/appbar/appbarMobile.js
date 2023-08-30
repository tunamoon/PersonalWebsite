import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search"
import Actions from "./actions";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";


export default function AppbarMobile({matches}) {

    const { setDrawerOpen, setShowSearchBox } = useUIContext()

    return (
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <AppbarHeader 
                textAlign={"center"} 
                style={{
                    fontSize: '3em',
                }}
            >
                A Personal Blog
            </AppbarHeader>
            <IconButton >
                <SearchIcon 
                    style = {{ 
                        color: Colors.darkGreen}}
                    onClick={() => setShowSearchBox(true)}
                />
            </IconButton>
            
            <Actions matches={matches} /> {/* used so heart icon goes to the bottom when mobile form*/}
        </AppbarContainer>
    );
}