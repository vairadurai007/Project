import { useTheme } from '@emotion/react';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import servicePic from '../../assert/images/Company/serviceWeProwide.webp';

const ServiceWeProvite = () => {

    const theme = useTheme();

    const serviceLists = [
        {
            title: "LPG SYSTEM",
            list: [
                { label: "LPG Gas Pipe Line System" },
                { label: "LPG Tank Installation" },
                { label: "Vapouriser" },
                { label: "D Cylinder" },
                { label: "Cryogenic Tanks" },
                { label: "All Gas Related Fittings and Equipments." }
            ]
        },
        {
            title: "DISTRIBUTOR OF GASES",
            list: [
                { label: "Oxygen" },
                { label: "Nitrogen" },
                { label: "Argon" },
                { label: "Corbon DI Oxide" },
                { label: "Acetylene" },
                { label: "Medical Air" },
                { label: "Helium" },
                { label: "Ammonia" },
                { label: "Cholorine" },
                { label: "Nitrous Oxide" },
                { label: "Hydrogen" },
                { label: "Calibration Gases" },
                { label: "Medical Oxygen" },
                { label: "Medical Nitrous Oxide" },
            ]
        },
        {
            title: "DISTRIBUTOR OF EQUIPMENTS",
            list: [
                { label: "cylinder Valves" },
                { label: "Cylinder Cup" },
                { label: "Cylinder Guard" },
                { label: "Welding Electrodes" },
                { label: "Welding/Cutting Set" },
                { label: "Cryogenic Pumps" },
                { label: "Pressure Pumps" },
                { label: "Breathing Apparatus" },
                { label: "Gas Regulators" },
                { label: "All type of Mud Valves" },
                { label: "Nitrogen Vessels" },
                { label: "Vapourizers" },
                { label: "Dry Ice" },
                { label: "Hydraulic Hoses" },
                { label: "Cryogenic Hoses" },
            ]
        },
        {
            title: "VALES/FITINGS",
            list: [
                { label: "Mud Valves" },
                { label: "Flow Valves" },
                { label: "Hydrants" },
                { label: "Pressure Reducing Valves" },
                { label: "Flow Meter" },
                { label: "NRS Valves" },
                { label: "NRV Valves" },
                { label: "GATE Valves" },
                { label: "Butterfly Valves" },
                { label: "Strainer" },
                { label: "Flexible Couplers" },
                { label: "Ball Valves" },
                { label: "Foot Valves" },
                { label: " GI Fittings" },
                { label: "Grooved Fittings" },
                { label: "Welded Fittings" },
                { label: "CS/CI Fittings" },
                { label: "Malleyable Fittings" },
                { label: "Hydraulic Fittings & Accessories" },
                { label: "Prumatic Fittings & Accssories" }
            ]
        },
        {
            title: "FIRE AND SAFETY",
            list: [
                { label: "Fire Alarm System " },
                { label: "Fire Fighting System" },
                { label: "Fire Extinguishers" },
                { label: "Fire Pumps ( UL/Non UL)" },
                { label: "Fire Proof Cables" },
                { label: "Fire Suppression System" },
                { label: "Fire Sprinkler System" },
                { label: "Deluge System" },
                { label: "Fire Hydrant System" },
                { label: "Kitchen Hood System" },
                { label: "Foam Suppression System" },
                { label: "Fire Proof Sealent" },
                { label: "AMC and Installtion" },
                { label: "Spare Parts for Fire Extinguishers" },
                { label: "Spare Parts for Fire Pumps" },
                { label: "HDPE Welding Butt/Electro Fusion" }
            ]
        },
        {
            title: "MAINTENANCE",
            list: [
                { label: "LPG System" },
                { label: "Fire System" },
                { label: "cylinders Painting" },
                { label: " Hydro Testing" },
                { label: "Repairing of Valves" },
                { label: "Reburbishment of Cryogenic Tanks" },
                { label: "Calibration" },
                { label: " Purging Jobs" },
                { label: "PDO Maintenance" },
                { label: "Annual Maintenance Contracts" },
                { label: " Fire Extinguisher Service" },
                { label: "Refilling of FM200 System" },
            ]
        }
    ]


    return (
        <React.Fragment>
            <Box
                width="100%"
                sx={{
                    background: `url(${servicePic})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "100% 100%",
                    color: theme.palette.secondary.main,
                    my: 12
                }}
            >
                <Box
                    sx={{
                        bgcolor: "rgba(0, 0, 0, 0.5)",
                        width: "100%",
                        height: "100%",
                        py: 6
                    }}
                >
                    <Typography
                        sx={{
                            lineHeight: 1.1,
                            fontWeight: 700,
                            fontSize: 44,
                            pb: 2,
                            textAlign: "center",
                        }}
                    >
                        Energy Solution that work
                    </Typography>
                    <Box
                        width="100%"
                        sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <Stack
                            direction="row"
                            flexWrap="wrap"
                            justifyContent="space-around"
                            sx={{
                                width: "100%"
                            }}
                        >
                            {
                                serviceLists.map((servicelist, index) => (
                                    <Box
                                        sx={{
                                            width: "14%"
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: theme.palette.primary.main,
                                                fontSize: "18px",
                                                lineHeight: 2
                                            }}
                                        >
                                            {servicelist.title}
                                        </Typography>
                                        {
                                            servicelist.list.map((list, index) => (
                                                <Typography>
                                                    {list.label}
                                                </Typography>
                                            ))
                                        }
                                    </Box>
                                ))
                            }

                        </Stack>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default ServiceWeProvite;