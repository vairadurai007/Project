import { Box } from "@mui/material";
import React from "react";
import NavigationBar from "../NavigationBar";
import Banner from "../Banner/banner";
import Company from "../Company";
// import Banner from "../Banner";

export default function Home() {

    return (
        <React.Fragment>
            <Box
            style={{
                width:"100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
            >
                <Box>
                    <NavigationBar />
                </Box>

                <Box>
                    {/* <Company /> */}
                </Box>

                <Box>
                    {/* <Banner/> */}
                </Box>
            </Box>
        </React.Fragment>
    );
}