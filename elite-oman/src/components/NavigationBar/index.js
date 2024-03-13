import React, { useState } from "react";
import { default as Logo } from "../../assert/images/logo.png.png";
import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import { styles } from "../styles";
import { red } from "@mui/material/colors";

// const sourceList = [
//     "Home",
//     "About",
//     "Service",
//     "Contact",
// ];

export default function NavigationBar() {
    const theme = useTheme();

    const [navbarList, setNavbarList] = useState([
        { id: 1, name: "Home", click: false },
        { id: 2, name: "About", click: false },
        { id: 3, name: "Service", click: false },
        { id: 4, name: "Contact", click: false }
    ]
    );

    const handleNavbar = (item, index) => {
        setNavbarList(items =>
            items.map(item =>
                item.id === index + 1 ? { ...item, click: true } : { ...item, click: false }
            )
        );
    }

    return (
        <React.Fragment>
                <Stack
                    container
                    width="100%"
                    borderBottom="1px solid #dedede"
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    position= 'sticky'
                    top = "0"
                    zIndex= "997"
                >
                    <Box
                        width="20%"
                    >
                        <img
                            src={Logo}
                            alt="logo"
                            style={{
                                width: "100px"
                            }}
                        />
                    </Box>

                    <Stack
                        width="80%"
                        direction="row"
                        alignItems="center"
                        justifyContent="space-evenly"
                    >
                        {navbarList.map((item, index) => (
                            <Link to={"/" + item.name} key={index} style={{ textDecoration: 'none' }}>
                                <Typography
                                    key={index}
                                    onClick={() => { handleNavbar(item.name, index) }}
                                    sx={{ cursor: 'pointer', ":hover": { color: theme.palette.primary.main }, color: item.click ? theme.palette.primary.main : "#030202" }}
                                >
                                    {item.name}
                                </Typography>
                            </Link>
                            // <Box key={index}>
                            //     <Typography
                            //         style={{
                            //             ...styles.navContent,
                            //             // color: theme.palette.primary.main
                            //             // color:"#7f7f90",
                            //             cursor:"pointer"
                            //         }}
                            //     >
                            //         {item.name}
                            //     </Typography>
                            // </Box>
                        ))}
                    </Stack>
                </Stack>
        </React.Fragment>
    );
};