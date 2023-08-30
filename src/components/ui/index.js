import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { clamp } from "./clamp";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";
import { Colors } from "../../styles/theme";


export default function IncDec() {
    
    const clampV = clamp(1, 10);
    //need a hook for onclick
    const [value, setValue] = useState(1);
    return (
        //used to save how many of each product a person would want, I don't need it
        <Box display="flex">
            <IconButton
                sx={{
                    borderRadius: 0,
                    background: `${Colors.purple}`
                }}
            onClick={() => setValue(clampV(value - 1))}>
                <RemoveIcon />
            </IconButton>
            <Typography 
                variant="h6"
                sx={{
                    border: `1px solid $ {Colors.purple}`,
                    p:2
                }}>
                {value}
            </Typography>
            <IconButton
                sx={{
                    borderRadius: 0,
                    background: `${Colors.purple}`
                }}
            onClick={() => setValue(clampV(value + 1))}>
                <AddIcon />
            </IconButton>
        </Box>
    )
}