import { ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { ActionIconesContainerDesktop, ActionIconesContainerMobile, ActionIconsContainerDesktop, ActionIconsContainerMobile, AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import { Colors } from "../../styles/theme";
import Actions from "./actions";
import Typewriter from "typewriter-effect";
import { useState } from 'react';
import { useUIContext } from "../../context/ui";

export default function AppbarDesktop({matches}) {
    //for home
    const [isHover1, setIsHover1] = useState(false);

    const handleMouseEnter1 = () => {
      setIsHover1(true);
    };

    const handleMouseLeave1 = () => {
      setIsHover1(false);
    };

   //for projects
   const [isHover2, setIsHover2] = useState(false);

   const handleMouseEnter2 = () => {
     setIsHover2(true);
   };

   const handleMouseLeave2 = () => {
     setIsHover2(false);
   };

   //for food
   const [isHover3, setIsHover3] = useState(false);

   const handleMouseEnter3 = () => {
     setIsHover3(true);
   };

   const handleMouseLeave3 = () => {
     setIsHover3(false);
   };
   //for resources

   const [isHover4, setIsHover4] = useState(false);

   const handleMouseEnter4 = () => {
     setIsHover4(true);
   };

   const handleMouseLeave4 = () => {
     setIsHover4(false);
   };

   const { setShowSearchBox } = useUIContext();
    return (

        //typography overwrites my font, so to change font i have to manually disable typography
        <AppbarContainer> 
            <AppbarHeader>            
                <Typewriter
 
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Hi Hello Hey...")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("A Personal Blog")
                            .start();
                    }}
                />
        </AppbarHeader>
            <MyList type="row"> 
                <ListItemText 
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                    disableTypography
                    primary={<Typography variant="h6" 
                                        style={{ color: isHover1 ? Colors.green : Colors.darkGreen}} 
                                        fontFamily={"Dosis"}
                                        >
                                            &nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;</Typography>}
                />
                <ListItemText 
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                    disableTypography
                    primary={<Typography variant="h6" 
                                        style={{ color: isHover2 ? Colors.green : Colors.darkGreen }} 
                                        fontFamily={"Dosis"}
                                        >
                                            &nbsp;&nbsp;&nbsp;Projects&nbsp;&nbsp;&nbsp;</Typography>}
                />
                <ListItemText 
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                    disableTypography
                    primary={<Typography variant="h6" 
                                        style={{ color: isHover3 ? Colors.green : Colors.darkGreen }} 
                                        fontFamily={"Dosis"}>
                                            &nbsp;&nbsp;&nbsp;Food&nbsp;&nbsp;&nbsp;</Typography>}
                />
                <ListItemText 
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                    disableTypography
                    primary={<Typography variant="h6" 
                                        style={{ color: isHover4 ? Colors.green : Colors.darkGreen }} 
                                        fontFamily={"Dosis"}>
                                            &nbsp;&nbsp;&nbsp;Resources&nbsp;&nbsp;&nbsp;</Typography>}
                />
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon 
                            style = {{color: Colors.darkGreen}}
                            onClick={() => setShowSearchBox(true)}    
                        /> 
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches}/>
        </AppbarContainer>
    );
}