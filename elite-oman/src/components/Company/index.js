import React from "react";
import { default as CompanyImage } from "../../assert/images/company.png";
import { Container, Box, CardMedia, Grid, Typography, Stack, Button } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function Company() {
    return (
        <React.Fragment>
            <Box>
                <Box
                    width="100%"
                    height="100vh"

                    style={{
                        marginTop: "90px"

                    }}
                >
                    <Container maxWidth="lg">
                        <Grid container height="100vh" justifyContent="center" alignItems="center" spacing={3} >
                            <Grid item sm={6} >
                                <Typography variant="h3" width={400}>Enjoy Your Healthy Delicious Food</Typography>
                                <Typography variant="body1" width={500} fontSize={20}>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</Typography>
                                <Stack direction="row" alignItems="center" spacing={2} my={5}>
                                    <Button variant="contained" sx={{ px: 4, fontSize: 18 }}>Book a Table </Button>
                                    <Button variant="text" sx={{ fontSize: 18 }}><PlayCircleIcon sx={{ fontSize: 40 }} />Watch Video</Button>
                                </Stack>

                            </Grid>
                            <Grid item sm={6}>
                                <Box sx={{ borderRadius: "8px", overflow: 'hidden' }}>
                                    <CardMedia
                                        component="img"
                                        image={CompanyImage}
                                        alt="oil image"
                                        height={430}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </React.Fragment>
    );
}