import { Icon, IconButton, Slide } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { SearchBoxContainer, SearchField } from "../../styles/search";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";


export default function SearchBox() {

    const { showSearchBox, setShowSearchBox } = useUIContext();

    return (
        <Slide direction="down" in={showSearchBox} timeout={500}>
            <SearchBoxContainer>
                <SearchField
                color="secondary"
                variant="standard"
                fullWidth
                placeholder="Search..." />
            <IconButton>
                <SearchIcon 
                    sx={{
                    fontSize: {xs: '2rem', md: '3rem'}
                }}
                    color= "secondary" />
            </IconButton>
            <IconButton
                onClick={() => setShowSearchBox(false)}
                sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10
                }}>
                <CloseIcon sx={{fontSize: '2rem'}} color="secondary" />
            </IconButton>
            </SearchBoxContainer>
        </Slide>
    )
}