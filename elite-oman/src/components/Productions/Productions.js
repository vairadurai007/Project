import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import productionImg from '../../assert/images/Company/fuelgize-67-1080x1047.webp';
import productionImg2 from '../../assert/images/Company/fuelgize-68-1080x1047.webp';
import productionImg3 from '../../assert/images/Company/fuelgize-69-1080x1047.webp';

const Productions = () => {

    const theme = useTheme();

    const productionList = [
        { productionImg: productionImg, title: "Exploration & Development", link: "Learn More +", text: "From exploration and production to transportation and refining, we offer a wide range of products." },
        { productionImg: productionImg2, title: "Transportation & Distribution", link: "Learn More +", text: " From exploration and production to transportation and refining, we offer a wide range of products." },
        { productionImg: productionImg3, title: "Research & Innovation", link: "Learn More +", text: "From exploration and production to transportation and refining, we offer a wide range of products." },
    ];

    return (
        <React.Fragment>
            <Box>
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
                            Production
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
                            FUELING YOUR SUCCESS: OIL & GAS SOLUTIONS
                        </Typography>
                    </Box>
                </Box>

                <Box width={"100%"} display={'flex'} justifyContent={"center"}>
                    <Stack direction="row" justifyContent="space-evenly" width="90%" pb={4} >
                        {
                            productionList.map((production, index) => (
                                <Box
                                    key={index}
                                    width="30%"
                                    height={300}
                                    sx={{
                                        bgcolor: theme.palette.primary.main,
                                        color: theme.palette.secondary.main,
                                        p: 4,
                                        background: `url(${production.productionImg})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "100% 100%"
                                    }
                                    }>
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: "25px"
                                        }}
                                    >
                                        {production.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            lineHeight: 1.5
                                        }}
                                    >
                                        {production.text}
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
                                            {production.link}
                                        </Typography>
                                    </Link>
                                </Box>
                            ))
                        }
                    </Stack>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Productions;