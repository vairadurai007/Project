import { Box, CardMedia, useTheme, Container, Grid, Typography, Stack } from "@mui/material";
import React from "react";
import Pic from '../../assert/images/gas.jpg';
import LabelIcon from '@mui/icons-material/Label';

export default function Banner() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Stack
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100vh"
                bgcolor={theme.palette.secondary.main}
            >
                <Box width="100%">
                    <Container maxWidth='xl'  >
                        <Grid container my={1} py={5} spacing={3}>
                            <Grid item xs={12} md={6}  >
                                <Box sx={{ borderRadius: "8px", overflow: 'hidden' }}>
                                    <CardMedia
                                        component="img"
                                        image={Pic}
                                        alt="oil image"
                                        height={430}
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6} sx={{ px: 6 }}>
                                <Typography variant="subtitle1" pt={1} pb={1} sx={{ fontSize: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                <Typography variant="subtitle1" sx={{ textIndent: "50px", fontSize: 19 }}><LabelIcon style={{ color: "#ce1212" }} /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                <Typography variant="subtitle1" sx={{ textIndent: "50px", fontSize: 19 }}><LabelIcon style={{ color: "#ce1212" }} />  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                <Typography variant="subtitle1" sx={{ textIndent: "50px", fontSize: 19 }}><LabelIcon style={{ color: "#ce1212" }} />  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                <Typography variant="subtitle1" pt={1} sx={{ fontSize: 20 }}>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

            </Stack>
        </React.Fragment>
    );
}