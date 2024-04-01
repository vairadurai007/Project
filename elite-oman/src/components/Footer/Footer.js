import React from 'react';
import CopyRights from './CopyRights';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Logo from '../../assert/images/Company/logo.webp';

const Footer = () => {
    const theme = useTheme();

    const footerPages = [
        {
            title: "Pages",
            links: [
                { label: "About us" },
                { label: "Blog" },
                { label: "Careers" },
                { label: "Jobs" },
                { label: "Team" }
            ]
        },
        {
            title: "Support",
            links: [
                { label: "Careers" },
                { label: "Social media" },
                { label: "Support" },
                { label: "Team" }
            ]
        },
        {
            title: "Contact",
            links: [
                { label: "FAQ" },
            ]
        },
    ]

    const contactDetails = [
        { logo: <EmailIcon sx={{ color: theme.palette.primary.main }} />, lable: "onlineedu@examplemail.com" },
        { logo: <PhoneIcon sx={{ color: theme.palette.primary.main }} />, lable: "(405) 555-0128" },
        { logo: <LocationOnIcon sx={{ color: theme.palette.primary.main }} />, lable: "82706 Keneth Plains, New Jackson, GA 91098" },
    ]

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

                <Stack
                    width="100%"
                    direction="row"
                    justifyContent="space-evenly"
                    py={3}
                >
                    <Box
                        width="30%"
                    >
                        <img
                            src={Logo}
                            width={100}
                        />
                        <Typography
                            pb={5}
                        >
                            Education is a fundamental human right.
                        </Typography>
                        {
                            contactDetails.map((contactDetails, index) => (
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                >
                                    <Box>{contactDetails.logo}</Box>
                                    <Typography
                                        sx={{
                                            py: 2,
                                            px: 2
                                        }}
                                    >
                                        {contactDetails.lable}
                                    </Typography>
                                </Stack>
                            ))
                        }
                    </Box>


                    {
                        footerPages.map((footerpage, index) => (
                            <Box
                                width="13%"
                                borderLeft="1px solid #373636"
                                pl={8}
                            >
                                <Typography
                                    sx={{
                                        color: "#bfbfbf",
                                        pb: 1
                                    }}
                                >
                                    {footerpage.title}
                                </Typography>
                                {
                                    footerpage.links.map((footerLinks, index) => (
                                        <Link to={"#"}
                                            style={{
                                                textDecoration: "none",

                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: theme.palette.secondary.main,
                                                    lineHeight: 2,
                                                    fontSize: 17,
                                                    '&:hover': {
                                                        color: theme.palette.primary.main
                                                    }
                                                }}
                                            >
                                                {footerLinks.label}
                                            </Typography>
                                        </Link>
                                    ))
                                }
                            </Box>
                        ))
                    }

                    <Box
                        width="30%"
                        borderLeft="1px solid #373636"
                        pl={8}
                    >

                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 700,
                                pb: 3
                            }}
                        >
                            Subscribe To Newsletter
                        </Typography>
                        <Box >
                            <TextField
                                label="Enter Your Email"
                                variant="outlined"
                                sx={{
                                    color: theme.palette.secondary.main,
                                    "& .MuiInputLabel-outlined": {
                                        color: "#fff"
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#fff",
                                        borderWidth: "1px",
                                    }
                                }}
                            />
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.secondary.main,
                                px: 4,
                                py: 1,
                                mt: 2,
                                ":hover": { bgcolor: "#ff5252", color: "#fff" }
                            }}
                        >
                            Subscripe
                        </Button>
                    </Box>
                </Stack>

                <Box
                    sx={{
                        pt: 12
                    }}
                >
                    <CopyRights />
                </Box>

            </Box>
        </React.Fragment>
    )
}

export default Footer;