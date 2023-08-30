//keep this, will be used for photos, not used for now


import { Box } from "@mui/system";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { useEffect, useRef, useState } from "react";
import { Slide, useMediaQuery } from "@mui/material";
import theme from "../../styles/theme";



const messages = [
    //"Currently..."
];


export default function Promotions() {
    const containerRef = useRef();
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true);
    const matches1 = useMediaQuery(theme.breakpoints.down('sm'));

    //hook
    useEffect(() => {
        //make animation of sliding
        setTimeout(() => {
            setShow(false)
        }, 10000);
        //want to cancel if I leave component, don't save memory
        const intervalId = setInterval(() => {
            setMessageIndex((i) => (i + 1) % messages.length);
            //need to continuously make true/false 
            setShow(true);

            setTimeout(() => {
                setShow(false)
            }, 10000);
        }, 11000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return(
        <PromotionsContainer ref={containerRef}
        >
            
            <Slide
            container={containerRef.current}
            //slide animation, start from left, go to right
            direction={show ? "left" : "right"}
            in={show}
            
            timeout={({
                enter: 500,
                exit: 100
            })}
            
            >
            
            <Box 
                display={"center"} 
                justifyContent="center" 
                alignItems={"center"}
                
                >
                <MessageText>
                    {messages[messageIndex]}
                </MessageText>
            
            </Box>
            </Slide>
            
        </PromotionsContainer>
    );
}
