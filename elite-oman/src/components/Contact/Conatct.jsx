import React from 'react';
import { Box, Grid, TextField, Button, Stack, Typography, useTheme} from '@mui/material';

export const Contact = () => {
  const theme = useTheme();

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
    </React.Fragment>
  )
}
