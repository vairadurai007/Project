import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import NavigationBar from "../NavigationBar";
import Banner from "../Banner/banner";
import Company from "../Company";
import { Contact } from "../Contact/Conatct";

export default function Home() {
    const bannerRef = useRef(null);
    const contactRef = useRef(null);
    const companyRef = useRef(null);

    const handleScroll = (activeSource) => {
        let ref = {
            Company: companyRef,
            Contact: contactRef,
            About: bannerRef
        }
        
        ref[activeSource]?.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <React.Fragment>
            <Box
                display="flex"
                flexDirection="column"
                width="100%"
                height="100%"
                position="relative"
            >
                <Box position="fixed" top={0} left={0} right={0} bgcolor="white">
                    <NavigationBar
                        handleScroll={handleScroll}
                    />
                </Box>

                <Box ref={companyRef}>
                    <Company />
                </Box>

                <Box ref={bannerRef}>
                    <Banner />
                </Box>

                <Box ref={contactRef}>
                    <Contact />
                </Box>
            </Box>
        </React.Fragment>
    );
}