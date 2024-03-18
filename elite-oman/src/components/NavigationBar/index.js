import React, { useState } from "react";
import { default as Logo } from "../../assert/images/logo.png.png";
import { Box, Link, Stack, Typography, useTheme } from "@mui/material";

const sourceList = [
    [
        { id: 1, name: "company", click: true },
        { id: 2, name: "banner", click: false },
        { id: 3, name: "equipments", click: false },
        { id: 4, name: "products", click: false },
        { id: 5, name: "service", click: false },
        { id: 6, name: "contact", click: false }
    ]
];

export default function NavigationBar(props) {
    const {handleScroll} = props;
    const theme = useTheme();

    const [navbarList, setNavbarList] = useState(...sourceList);

    const handleNavbar = (item, index) => {
        handleScroll(item);
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
                position='sticky'
                top="0"
                zIndex="997"
                height="100px"
            >
                <Box
                    width="40%"
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
                    width="60%"
                    direction="row"
                    alignItems="center"
                    justifyContent="space-evenly"
                >
                    {navbarList.map((source, index) => (
                        <Link to={"/" + source.name} key={index} style={{ textDecoration: 'none' }}>
                            <Typography
                                key={index}
                                fontSize={15}
                                fontWeight={600}
                                onClick={() => { handleNavbar(source.name, index) }}
                                sx={{
                                    cursor: 'pointer',
                                    textTransform: "uppercase",
                                    ":hover": { color: theme.palette.primary.main },
                                    color: source.click ? theme.palette.primary.main : "#0303037d" 
                                }}
                            >
                                {source.name}
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