import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from '@mui/system';
import React from "react";

const FooterContainer = styled(Container)({
  backgroundColor: "#212121",
  color: "#ffffff",
  width: "100%",
  position: "fixed",
  bottom: 0,
  padding: "1rem 0",
});

const Footer = () => {
  return (
    <FooterContainer maxWidth="xl">
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">You are Logged in as User</Typography>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
         
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>© All Rights Reserved - Code Comprehension Assessment Portal </Typography>
        </Grid>
      </Grid>
    </FooterContainer>
  );
}

export default Footer;
