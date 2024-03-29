import { useTheme } from '@emotion/react';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const CopyRights = () => {
    const theme = useTheme();

    const copyRights = [
        { title: "About us" },
        { title: "Contact" },
        { title: "Privacy policy" },
        { title: "Sitemap" },
        { title: "Terms of Use" }
    ]

    return (
        <React.Fragment>
            <Stack
                direction={'row'}
            >
                <Box
                    sx={{
                        width: '50%'
                    }}
                >
                    <Stack
                        direction={'row'}
                    >
                        {
                            copyRights.map((copyrights, index) => (
                                <Link
                                    key={index}
                                    style={{
                                        textDecoration:'none',
                                        color:theme.palette.secondary.main
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            px:2,
                                            
                                        }}
                                    >
                                        {copyrights.title}
                                    </Typography>
                                </Link>
                            ))
                        }
                    </Stack>
                </Box>

                <Box
                    sx={{
                        width: '50%'
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: 'end'
                        }}
                    >
                        © Promo Theme 2024, All Rights Reserved
                    </Typography>
                </Box>
            </Stack>
        </React.Fragment>
    )
}

export default CopyRights;