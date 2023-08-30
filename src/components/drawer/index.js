import { Button, Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { useUIContext } from "../../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../styles/appbar";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";

const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``;
export default function AppDrawer() {

    //state is used to control open and closing of appdrawer
    //but using context instead 
    const { drawerOpen, setDrawerOpen } = useUIContext();

    return (
        <>
        {drawerOpen && (<DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon
                    sx={{
                        fontSize: '2.5rem',
                        color: lighten(0.09, Colors.white)
                    }}
                />
            </DrawerCloseButton>
        )}
        {/*uses state context to open drawer */}
        <Drawer open={drawerOpen}>
    
            <List>
                <ListItemButton>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
                <MiddleDivider />
                <ListItemButton>
                    <ListItemText>Projects</ListItemText>
                </ListItemButton>
                <MiddleDivider />
                <ListItemButton>
                    <ListItemText>Food</ListItemText>
                </ListItemButton>
                <MiddleDivider />
                <ListItemButton>
                    <ListItemText>Resources</ListItemText>
                </ListItemButton>
                <MiddleDivider />
            </List>
        </Drawer>
        </>
    );
}
