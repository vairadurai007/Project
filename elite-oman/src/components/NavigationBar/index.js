import React from "react";
import { default as Logo } from "../../assert/images/logo.png.png";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { styles } from "../styles";

const sourceList = [
    "Home",
    "About",
    "Service",
    "Contact",
];

export default function NavigationBar() {
    const theme = useTheme();

    return (
        <React.Fragment>
                <Stack
                    width="99%"
                    border="1px solid"
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Box
                        width="20%"
                    >
                        <img
                            src={Logo}
                            alt="logo"
                            style={{
                                width: "100px",
                                height: "100px"
                            }}
                        />
                    </Box>

                    <Stack
                        width="80%"
                        direction="row"
                        alignItems="center"
                        justifyContent="space-evenly"
                    >
                        {sourceList.map((source, index) => (
                            <Box key={index}>
                                <Typography
                                    style={{
                                        ...styles.navContent,
                                        color: theme.palette.primary.main
                                    }}
                                >
                                    {source}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Stack>
        </React.Fragment>
    );
};