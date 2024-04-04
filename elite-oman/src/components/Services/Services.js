import { useTheme } from '@emotion/react';
import { Box, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import servicesPic from '../../assert/images/Company/servicesPic.webp';
import servicesPic2 from '../../assert/images/Company/servicesPic2.webp';
import servicesPic3 from '../../assert/images/Company/servicesPic3.webp';
import servicesPic4 from '../../assert/images/Company/servicesPic4.webp';
import servicesPic5 from '../../assert/images/Company/servicesPic5.webp';
import servicesPic6 from '../../assert/images/Company/servicesPic6.webp';
import servicesPic7 from '../../assert/images/Company/servicesPic7.webp';
import servicesPic8 from '../../assert/images/Company/servicesPic8.webp';

const Services = () => {
    const theme = useTheme();

    const innovationOilGas = [
        { inovationPic: servicesPic, heading: "OIL & GAS", title: "Exploration And Development", link: "Learn More +" },
        { inovationPic: servicesPic2, heading: "OIL & GAS", title: "Production And Operations", link: "Learn More +" },
        { inovationPic: servicesPic3, heading: "OIL & GAS", title: "Transportation And Distribution", link: "Learn More +" },
        { inovationPic: servicesPic4, heading: "OIL & GAS", title: "Marketing And Sales", link: "Learn More +" },
        { inovationPic: servicesPic5, heading: "OIL & GAS", title: "Research And Innovation", link: "Learn More +" },
        { inovationPic: servicesPic6, heading: "OIL & GAS", title: "Environmental Management", link: "Learn More +" },
        { inovationPic: servicesPic7, heading: "OIL & GAS", title: "Workforce Development & Training", link: "Learn More +" },
        { inovationPic: servicesPic8, heading: "OIL & GAS", title: "Digital Transformation & Technology", link: "Learn More +" },
    ]
    return (
        <>
            <Box
                sx={{
                    bgcolor: "#242424",
                    color: theme.palette.secondary.main,
                    py: 6,
                }}
            >
                <Typography
                    sx={{
                        lineHeight: 1.1,
                        pb: 2,
                        textAlign: "center",
                    }}
                >
                    Services We Provide
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
                    INNOVATING FOR A SUSTAINABLE TOMORROW IN OIL & GAS
                </Typography>
                <Stack
                    direction='row'
                    flexWrap='wrap'
                    justifyContent='space-evenly'
                >
                    {
                        innovationOilGas.map((innovationOil, index) => (
                            <Box
                                key={index}
                                width="23%"
                                height={350}
                                my={2}
                                sx={{
                                    background: `url(${innovationOil.inovationPic})`,
                                    backgroundSize: "100% 100%",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <Box
                                    width="100%"
                                    height="100%"
                                    sx={{
                                        bgcolor: "rgba(0, 0, 0, 0.5)",
                                    }}
                                >
                                    <Stack
                                        p={4}
                                        width="100%"
                                        height="100%"
                                        direction="column"
                                        justifyContent="end"
                                    >
                                        <Typography

                                        >
                                            {innovationOil.heading}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: "20px",
                                                py: 1
                                            }}
                                        >
                                            {innovationOil.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: "15px"
                                            }}
                                        >
                                            {innovationOil.link}
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        ))
                    }
                </Stack>
                <Stack
                    direction={'row'}
                    justifyContent={'center'}
                >
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.secondary.main,
                            px: 4,
                            py: 2,
                            mt: 2,
                            ":hover": { bgcolor: "#ff5252", color: "#fff" }
                        }}
                    >
                        Discover Our Services +
                    </Button>
                </Stack>
            </Box>
        </>
    )
}

export default Services;