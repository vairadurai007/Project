import React from 'react';
import { Box, Grid, Paper, TextField, Button, Stack, Typography, Container, useTheme } from '@mui/material';
// import { styled } from "@mui/material/styles";
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import ShareIcon from '@mui/icons-material/Share';
// import { MailIcon, CallIcon, HomeIcon, ShareIcon } from '@mui/material';

export const Contact = () => {
  const theme = useTheme();

  const contactData = [
    { id: 1, icon: <HomeIcon />, title: "Our Address", subject: "A108 Adam Street, New York, NY 535022" },
    { id: 2, icon: <CallIcon />, title: "Email Us", subject: "contact@example.com" },
    { id: 3, icon: <MailIcon />, title: "Call Us", subject: "+1 5589 55488 55" },
    { id: 4, icon: <ShareIcon />, title: "Opening Hours", subject: "Mon-Sat: 11AM - 23PM; Sunday: Closed" }
  ]

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  return (
    <React.Fragment>
      <Stack
      height="100vh"
      justifyContent="center"
      alignItems="center" 
      >
        <Typography
          fontSize={48}
          fontWeight={600}
          color={theme.palette.primary.main}
        >
          Contact
        </Typography>

        <Box>
          <Grid container spacing={2} my={5} px={4} >
            <Grid item xs={12} sm={6}>
              <TextField id="Contact_name" label="Name" variant="outlined" style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="Contact_email" label="Email" variant="outlined" type='email' style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12}>
              <TextField id="Contact_phone" label="Phone" variant="outlined" type='tel' style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} >
              <TextField id="Contact_comment" label="Comment" variant="outlined" style={{ width: "100%" }} inputProps={{ style: { height: "70px" } }} />
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Grid item>
              <Button variant="contained">Sent Message</Button>
            </Grid>
          </Grid>
        </Box>
      </Stack>


      {/* <Stack direction="row" sx={{ justifyContent: 'space-evenly', flexWrap: "wrap" }} >
        {
          contactData.map((item, index) => (
            <Stack direction='row' spacing={2} sx={{ alignItems: 'center', p: 4, m: 4, bgcolor: theme.palette.secondary.main }} width={500}>
              <Box>
                {
                  item.icon
                }
              </Box>
              <Box>
                <Typography sx={{ fontSize: 17, fontWeight: 600, pb: 1 }}>{item.title}</Typography>
                <Typography sx={{ fontSize: 15, pb: 1 }}>{item.subject}</Typography>
              </Box>
            </Stack>
          ))
        }
      </Stack> */}
    </React.Fragment>
  )
}
