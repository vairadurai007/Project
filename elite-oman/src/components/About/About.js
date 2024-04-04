import { Stack, Box, Typography, Link } from '@mui/material';
import React from 'react';
import aboutPic from '../../assert/images/Company/aboutPic.webp';
import fixedbackground from '../../assert/images/Company/servicefixedbackground.webp'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { useTheme } from '@emotion/react';

const servicesList = [
    { icon: <PrecisionManufacturingIcon />, title: "Exploration & Development", link: "Learn More +", text: "From exploration and production to transportation and refining, we offer a wide range of products." },
    { icon: <PrecisionManufacturingIcon />, title: "Transportation & Distribution", link: "Learn More +", text: " From exploration and production to transportation and refining, we offer a wide range of products." },
    { icon: <PrecisionManufacturingIcon />, title: "Research & Innovation", link: "Learn More +", text: "From exploration and production to transportation and refining, we offer a wide range of products." },
];

const About = () => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Stack
                justifyContent="space-around"
                alignItems='center'
                p={6}
                width="100%"
                spacing={10}
            >
                <Typography
                    sx={{
                        lineHeight: 1.1,
                        pb: 2,
                        fontSize: "50px",
                        fontWeight: 600
                    }}
                >
                    About Us
                </Typography>

                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems='center'
                >
                    <Box
                        width="40%"
                        height="100%"
                    >

                        <Typography
                            sx={{
                                lineHeight: 1.1,
                                fontWeight: 700,
                                fontSize: 44,
                                pb: 2
                            }}
                        >
                            OIL & GAS INNOVATORS: DRIVING PROGRESS IN THE INDUSTRY
                        </Typography>

                        <Typography
                            sx={{
                                lineHeight: 1.6
                            }}
                        >
                            From exploration and production to transportation and refining, we offer a wide range of products and services that meet the unique needs of the oil & gas industry. Our commitment to excellence and customer satisfaction is reflected in our rigorous quality control processes.
                        </Typography>

                        <Typography
                            sx={{
                                lineHeight: 1.1,
                                pt: 2
                            }}
                        >
                            <Link
                                sx={{
                                    cursor: "pointer",
                                    textDecoration: "none"
                                }}
                            >
                                Learn More +
                            </Link>
                        </Typography>
                    </Box>

                    <Box
                        width="40%"
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <img
                            src={aboutPic}
                            alt='aboutImage'
                            height={490}
                        />
                    </Box>
                </Stack>
            </Stack>

            {/* WHAT WE DO PAGE*/}
            <Box
                width={"100%"}
                py={6}
                display={"flex"}
                justifyContent={"center"}
            >
                <Box width={"70%"}>
                    <Typography
                        sx={{
                            lineHeight: 1.1,
                            pb: 2,
                            textAlign: "center",
                        }}
                    >
                        What We Do
                    </Typography>

                    <Typography
                        sx={{
                            lineHeight: 1.1,
                            fontWeight: 700,
                            fontSize: 44,
                            pb: 2,
                            textAlign: "center",
                            px: 12
                        }}
                    >
                        GAS GURUS: YOUR TRUSTED ADVISORS FOR OIL & GAS OPPORTUNITIES
                    </Typography>
                </Box>
            </Box>

            <Box width={"100%"} display={'flex'} justifyContent={"center"}>
                <Stack direction="row" justifyContent="space-evenly" width="90%" pb={4} >
                    {
                        servicesList.map((service, index) => (
                            <Box
                                key={index}
                                width="30%"
                                sx={{
                                    bgcolor: theme.palette.primary.main,
                                    color: theme.palette.secondary.main,
                                    p: 4
                                }
                                }>
                                <Box
                                    sx={{ fontSize: "50px" }}
                                >
                                    {service.icon}
                                </Box>

                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "25px"
                                    }}
                                >
                                    {service.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        lineHeight: 1.5
                                    }}
                                >
                                    {service.text}
                                </Typography>

                                <Link to=""
                                    sx={{
                                        color: "#fff",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Typography
                                        variant='span'
                                        sx={{
                                            display: 'inline-block',
                                            fontSize: "16px",
                                            pt: 4,
                                            fontWeight: 500,
                                            '&:hover': {
                                                textDecoration: "underline",
                                            }

                                        }}
                                    >
                                        {service.link}
                                    </Typography>
                                </Link>
                            </Box>
                        ))
                    }
                </Stack>
            </Box>

            <Box
                width="100%"
                height="250px"
                sx={{
                    background: `url(${fixedbackground})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "100% 100%",
                    color: theme.palette.secondary.main,
                    backgroundAttachment:"fixed",
                    my:6
                }}
            >

            </Box>
        </React.Fragment>
    )
}

export default About;