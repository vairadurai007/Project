import { Box } from "@mui/material";
import React from "react";
import { default as CompanyImage } from "../../assert/images/company.png";

export default function Company() {
    return (
        <React.Fragment>
            <Box>
                <Box
                    width="100%"
                    height="100vh"
                    style={{
                        backgroundColor: "red"
                    }}
                >
                    <img
                        src={CompanyImage}
                        alt="company"
                        style={{
                            width: "100%",
                            height: "100%"  
                        }}
                    />
                </Box>
            </Box>
        </React.Fragment>
    );
}