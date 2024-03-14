import { Box } from "@mui/material";
import React from "react";
import {default as CompanyImage} from "../../assert/images/Company.jpg";

export default function Company() {
    return (
        <React.Fragment>
            <Box 
                width="100%"
                height="90vh"
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
        </React.Fragment>
    );
}