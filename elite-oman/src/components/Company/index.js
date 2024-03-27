import React from "react";
import { Box, Typography, Button, Stack } from '@mui/material'
import companyPic from '../../assert/images/Company/companyPic1.webp';
import companyPic2 from '../../assert/images/Company/companyPic2.webp';
import companyPic3 from '../../assert/images/Company/companyPic3.webp';
import companyPic4 from '../../assert/images/Company/companyPic4.webp';
import { useTheme } from "@emotion/react";
import About from "../About/About";

const companyServices = [
    { image: companyPic2, title: "Drilling", link: "Go to services" },
    { image: companyPic3, title: "Transportation", link: "Go to services" },
    { image: companyPic4, title: "Transportation", link: "Go to services" },
]

export default function Company() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Box
                width="100%"
                height="100vh"
                sx={{
                    background: `url(${companyPic})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <Box
                    width="100%"
                    height="100%"
                    sx={{
                        bgcolor: "#080808a6",
                        color: theme.palette.secondary.main,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Box width="85%">
                        <Typography
                            sx={{
                                lineHeight: "1.1",
                                fontWeight: "700",
                                fontSize: "80px",
                                letterSpacing: "-1px"
                            }}
                        >
                            ENERGY EVALUTION: POWERING THE FUTHURE WITH OIL & GAS.
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "18px",
                                pt: 6,
                                width: "60%"
                            }}
                        >
                            At our company, we are dedicated to providing innovative solutions for the oil & gas industry. Our team of experts has extensive experience in the field, allowing us to offer cutting-edge technologies.
                        </Typography>

                        <Button
                            variant="contained"
                            sx={{
                                color: theme.palette.secondary.main,
                                py: 1.5,
                                px: 2,
                                mt: 5
                            }}
                        >
                            Discover Our Services
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Stack direction="row" justifyContent="space-between" width="100%" my={6}>
                {
                    companyServices.map((company, index) => (
                        <Box
                            key={index}
                            width="32%"
                            height="270px"
                            sx={{
                                background: `url(${company.image})`,
                                color: theme.palette.secondary.main,
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat"
                            }
                            }>
                            <Box
                                width="100%"
                                height="100%"
                                sx={{ bgcolor: "rgba(0, 0, 0, 0.5)" }}>
                                <Typography
                                    sx={{
                                        lineHeight: 2,
                                        fontWeight: "700",
                                        fontSize: "25px",
                                        pt: "150px",
                                        pl: 3
                                    }}
                                >
                                    {company.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontWeight: "700",
                                        fontSize: "21px",
                                        pl: 3
                                    }}
                                >
                                    {company.link}
                                </Typography>
                            </Box>
                        </Box>
                    ))
                }
            </Stack>
            <About/>
        </React.Fragment>
    );
}