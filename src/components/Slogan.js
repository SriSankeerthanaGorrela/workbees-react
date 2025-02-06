
import { Box, Container, Stack, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";

function Slogan() {
  return (
    <Box sx={{ backgroundColor: "#F8F8FB", minHeight: "90vh"}}> 
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: 6, fontFamily: "Figtree",paddingTop:'50px' }}>
      <Stack spacing={3} alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="h4" fontWeight="700" fontSize="48px" fontFamily="Figtree">
            We do more for your Technical
          </Typography>
          <Box
            component="span"
            sx={{
              backgroundColor: "#DFF5D6",
              fontSize: "48px",
              fontWeight: "700",
              border: "1.5px solid green",
              px: 1.5,
              fontFamily: "Figtree",
              position: "relative"
            }}
          >
            Success
            <Box
              sx={{
                position: "absolute",
                top: "50px",
                right: "-70px",
                display: "flex",
                alignItems: "center",
                gap: "1px"
              }}
            >
               <ArrowRightAltIcon sx={{ marginBottom:"20px",color: "green", transform: "rotate(-155deg)",height:'29px',width:'29px',marginRight:'-6px' }} />
              <Typography
                sx={{
                  fontSize: "12px",
                  lineHeight: "17px",
                  textAlign: "center",
                  borderRadius: "2px",
                  border: "1.5px solid green",
                  background: "green",
                  color: "white",
                  px: 1,
                  py: 0.2,
          
                }}
              >
                Clients
              </Typography>
              
            </Box>
          </Box>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center" fontSize="48px">
          <Typography
            sx={{
              fontFamily: "Figtree",
              fontWeight: "700",
              lineHeight: "17.07px",
              alignItems: "center",
              color: "#000000",
              fontSize: "48px"
            }}
          >
            We're
          </Typography>
          <Box
            component="span"
            sx={{
              backgroundColor: "#E3E1FF",
              border: "1.5px solid #3F51B5",
              px: 1.5,
              fontWeight: "700",
              fontFamily: "Figtree",
              fontSize: "48px"
            }}
          >
            Technical
            <Box
              sx={{
                position: "absolute",
                top: "280px",
                left: "510px",
                display: "flex",
                alignItems: "center",
                gap: "0px"
              }}
            >
              
              <Typography
                sx={{
                  fontSize: "12px",
                  lineHeight: "17px",
                  textAlign: "center",
                  borderRadius: "2px",
                  border: "1.5px solid #261D8C",
                  background: "#261D8C",
                  color: "white",
                  px: 1,
                  py: 0.2,
                  
                }}
              >
                Clients
              </Typography>
              <ArrowRightAltIcon sx={{ marginBottom:"30px",color:"#261D8C", transform: "rotate(-55deg)",height:'29px',width:'29px',marginLeft:'-6px'}}/>
            </Box>
          </Box>

          <Typography variant="h4" fontWeight="700" fontFamily="Figtree" fontSize="48px">
            Bees as well
          </Typography>
        </Stack>

        <Typography
          variant="body1"
          color="#000000 70%"
          sx={{
            fontFamily: "Figtree",
            width: "693px",
            height: "68px",
            marginLeft: "550px",
            lineHeight: "34px",
            textAlign: "center",
            fontSize: "20px",
            paddingTop:'30px'
          }}
        >
          We’re a full-cycle web and mobile application development company that creates software solutions tailored to the demands of businesses.
        </Typography>
      </Stack>

      <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ mt: 5 }}>
        <Grid xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Box component="img" src="./images/device.png" alt="Desktop UI" sx={{ width: "1086px", marginLeft: "100px", height: "285px" }} />
        </Grid>
      </Grid>
    </Container>
  </Box>  
  );
}

export default Slogan;