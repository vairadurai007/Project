import { Box } from "@mui/material";
import React from "react";
import NavigationBar from "../NavigationBar";
import Banner from "../Banner";

export default function Home() {
    
    return (
        <React.Fragment>
            <Box
                style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    style={{
                        flex: "1 1 auto",
                        minHeight: 0,
                        overflowY: "auto",
                    }}
                >
                    <Box>
                        <NavigationBar/>
                    </Box>

                    <Box>
                        <Banner/>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
}