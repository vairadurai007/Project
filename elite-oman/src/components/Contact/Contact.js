import React from 'react';
import contactPic from '../../assert/images/Company/contactpic.webp';
import contactGetIn from '../../assert/images/Company/contactpic2.webp';
import { Box, Stack, Typography ,TextField, Grid, Button} from '@mui/material';
import { useTheme } from '@emotion/react';


const Contact = () => {
    const theme = useTheme();
    return (
        <React.Fragment>
            <Stack
                direction={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                width="100%"
                height="400px"
                sx={{
                    background: `url(${contactPic})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    color: theme.palette.secondary.main,
                    my: 4
                }}
            >
                <Typography
                    sx={{
                        lineHeight: 1.1,
                        pb: 2,
                        fontWeight: 600
                    }}
                >
                    Contact
                </Typography>
                <Typography
                    sx={{
                        lineHeight: 1.1,
                        pb: 2,
                        fontSize: "50px",
                        fontWeight: 600
                    }}
                >
                    GET IN TOUCH
                </Typography>
            </Stack>

            <Stack
                justifyContent="space-around"
                alignItems='center'
                p={6}
                width="100%"
            >
                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems='center'
                >
                    <Box
                        width="40%"
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <img
                            src={contactGetIn}
                            alt='contactPic'
                            height={490}
                        />
                    </Box>
                    <Box
                        width="40%"
                        height="100%"
                    >
                        <Typography
                            sx={{
                                lineHeight: 1.6
                            }}
                        >
                            Get In Touch
                        </Typography>
                        <Typography
                            sx={{
                                lineHeight: 1.1,
                                fontWeight: 700,
                                fontSize: 44,
                                pb: 2
                            }}
                        >
                            GET IN TOUCH
                        </Typography>
                        <Grid container spacing={2} py={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField id="Contact_name" label="Name" variant="outlined" style={{ width: "100%" }} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="Contact_email" label="Email" variant="outlined" type='email' style={{ width: "100%" }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="Contact_phone" label="Phone" variant="outlined" type='tel' style={{ width: "100%" }} />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField id="Contact_comment" label="Your Question" variant="outlined" style={{ width: "100%" }} inputProps={{ style: { height: "70px" } }} />
                            </Grid>
                        </Grid>
                        <Button variant="contained" sx={{ bgcolor: theme.palette.primary.main,color: theme.palette.secondary.main, px: 4, py: 1, ":hover": { bgcolor: "#ff5252", color: "#fff" } }}>SEND</Button>
                    </Box>
                </Stack>
            </Stack>
        </React.Fragment>
    )
}

export default Contact;