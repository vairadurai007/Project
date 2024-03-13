import { Box, Stack, CardMedia, useTheme } from "@mui/material";
import React from "react";
import oil from '../../assert/images/oil.jpeg'

export default function Banner() {
    const theme = useTheme();
    return(
        <React.Fragment>
            <Stack 
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                bgcolor={theme.palette.secondary.main}
            >
                <Box sx={{ borderRadius: "8px", overflow: 'hidden',width: "50%" }}>
                    <CardMedia
                        component="img"
                        image={oil}
                        alt="oil image"
                        sx={{ cursor: 'pointer', ":hover": { transform: "scale(1.1)", transition: 'all .2s ease-in-out' } }}
                    />                 
                </Box>
                <Box sx={{ borderRadius: "8px", overflow: 'hidden',width: "50%" }}>
                    
                </Box>
            </Stack>
        </React.Fragment>
    );
}