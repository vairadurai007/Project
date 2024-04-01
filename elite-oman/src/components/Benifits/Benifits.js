import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import BenifitsPic from '../../assert/images/Company/fuelgize-08.webp';
import BenifitsPic2 from '../../assert/images/Company/fuelgize-09.webp';
import BuildIcon from '@mui/icons-material/Build';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';
import InventoryIcon from '@mui/icons-material/Inventory';
import HardwareIcon from '@mui/icons-material/Hardware';
import { useTheme } from '@emotion/react';

const Benifits = () => {

    const theme = useTheme();

    const futureData = [
        { icon: <BuildIcon />, title: "High Demand" },
        { icon: <SignLanguageIcon />, title: "Strategic Importance" },
        { icon: <InventoryIcon />, title: "Economic Impact" },
        { icon: <HardwareIcon />, title: "Global Market" },
    ]
    return (
        <React.Fragment>
            <Box
                width="100%"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    py: 12
                }}
            >
                <Stack
                    width="90%"
                    direction="row"
                    justifyContent="space-around"
                >
                    <Box
                        width="45%"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position:"relative"
                        }}
                    >
                        <Box
                            sx={{
                                width: "80%",
                                height: 430,
                                background: `url(${BenifitsPic})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100% 100%",
                            }}
                        >

                        </Box>

                        <Box
                            sx={{
                                width: 180,
                                height: 180,
                                background: `url(${BenifitsPic2})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100% 100%",
                                position: "absolute",
                                bottom: "40px",
                                left: 1
                            }}
                        >

                        </Box>
                    </Box>

                    <Box
                        width="45%"
                    >
                        <Typography
                            sx={{
                                lineHeight: 1.1,
                                pb: 2,
                            }}
                        >
                            Our Benefits
                        </Typography>

                        <Typography
                            sx={{
                                lineHeight: 1.1,
                                fontWeight: 700,
                                fontSize: 44,
                                pb: 2,
                            }}
                        >
                            THE FUTURE OF OIL & GAS IS HERE
                        </Typography>
                        <Typography
                            sx={{
                                lineHeight: 1.1,
                                pb: 2,
                            }}
                        >
                            From exploration and production to transportation and refining,
                            we offer a wide range of products and services that meet the unique
                            needs of the oil & gas industry.
                        </Typography>
                        <Stack
                            width="100%"
                            direction="row"
                            justifyContent="space-between"
                            flexWrap="wrap"
                        >
                            {
                                futureData.map((futuredata, index) => (
                                    <Box
                                        width="45%"
                                        sx={{
                                            py: 4
                                        }}
                                    >
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                        >
                                            <Box
                                                p={1}
                                                sx={{
                                                    bgcolor: theme.palette.primary.main,
                                                    color: "#fff"
                                                }}

                                            >
                                                {futuredata.icon}
                                            </Box>
                                            <Typography
                                                sx={{
                                                    pl: 3,
                                                    fontWeight: 700,
                                                    fontSize: 20
                                                }}
                                            >
                                                {futuredata.title}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                ))
                            }
                        </Stack>
                    </Box>
                </Stack>
            </Box >
        </React.Fragment >
    )
}

export default Benifits;