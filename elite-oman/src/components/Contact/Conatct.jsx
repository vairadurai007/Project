import React from 'react';
import { Box, Grid, TextField, Container, Button} from '@mui/material';

export const Contact = () => {
  return (
    <React.Fragment>
      <Box my={5}>
        <Container maxWidth="lg" sx={{ boxShadow: 3, p: 5 }}>
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
        </Container>
      </Box>
    </React.Fragment>
  )
}
