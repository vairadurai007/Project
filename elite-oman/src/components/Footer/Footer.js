import React from 'react';
import CopyRights from './CopyRights';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';

const Footer = () => {
    const theme = useTheme();
    return (
        <React.Fragment>
            <Box
                sx={{
                    bgcolor: "#242424",
                    color: theme.palette.secondary.main,
                    pt: 6,
                    pb: 3,
                    px: 12
                }}
            >
                <Box>

                </Box>

                <Box>
                    <CopyRights />
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Footer;