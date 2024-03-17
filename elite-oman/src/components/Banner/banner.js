import { Box, CardMedia, useTheme, Container, Grid, Typography, Stack } from "@mui/material";
import React from "react";
import Pic from '../../assert/images/gas.jpg';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function Banner() {
    const theme = useTheme();
    
    return(
        <React.Fragment>
            <Container maxWidth='xl' sx={{bgcolor:theme.palette.secondary.main}}>
                <Grid container my={1} py={5} spacing={4}>
                    <Grid item xs={12} md={6}  >
                        <Box sx={{ borderRadius: "8px", overflow: 'hidden' }}>
                            <CardMedia
                                component="img"
                                image={Pic}
                                alt="oil image"
                                height={430}
                                sx={{ cursor: 'pointer', ":hover": { transform: "scale(1.1)", transition: '1s' } }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Typography variant="subtitle1" pt={5} pb={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                        <Typography variant="subtitle1" sx={{textIndent:"50px"}}><DoneAllIcon/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                        <Typography variant="subtitle1" sx={{textIndent:"50px"}}><DoneAllIcon/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                        <Typography variant="subtitle1" sx={{textIndent:"50px"}}><DoneAllIcon/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                        <Typography variant="subtitle1" pt={5}>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}