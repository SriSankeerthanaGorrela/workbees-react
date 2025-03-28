
// import { Box, Container, Stack, Typography } from "@mui/material";
// import { Grid } from "@mui/system";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import React from "react";

// function Slogan() {
//   return (
//     <Container maxWidth="lg" sx={{ textAlign: "center", mt: 6, fontFamily: "Figtree" }}>
//       <Stack spacing={3} alignItems="center">
//         <Stack direction="row" spacing={1} alignItems="center">
//           <Typography variant="h4" fontWeight="700" fontSize="48px" fontFamily="Figtree">
//             We do more for your Technical
//           </Typography>
//           <Box
//             component="span"
//             sx={{
//               backgroundColor: "#DFF5D6",
//               fontSize: "48px",
//               fontWeight: "700",
//               border: "1.5px solid green",
//               px: 1.5,
//               fontFamily: "Figtree",
//               position: "relative"
//             }}
//           >
//             Success
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: "50px",
//                 right: "-80px",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "4px",
//                 left:'200px'
                
//               }}
//             >
//                <ArrowRightAltIcon sx={{ marginBottom:"30px",color: "green", transform: "rotate(-155deg)", marginRight:'30px'}} />
//               <Typography
//                 sx={{
//                   fontSize: "12px",
//                   lineHeight: "17px",
//                   textAlign: "center",
//                   borderRadius: "2px",
//                   border: "1.5px solid green",
//                   background: "green",
//                   color: "white",
//                   px: 1,
//                   py: 0.2,
//                   marginLeft:'-40px',
                  
                  
                  
                  
//                 }}
//               >
//                 Clients
//               </Typography>
//               {/* <ArrowRightAltIcon sx={{ color: "green", transform: "rotate(45deg)" }} /> */}
//             </Box>
//           </Box>
//         </Stack>

//         <Stack direction="row" spacing={1} alignItems="center" fontSize="48px">
//           <Typography
//             sx={{
//               fontFamily: "Figtree",
//               fontWeight: "700",
//               lineHeight: "17.07px",
//               alignItems: "center",
//               color: "#000000",
//               fontSize: "48px"
//             }}
//           >
//             We're
//           </Typography>
//           <Box
//             component="span"
//             sx={{
//               backgroundColor: "#E3E1FF",
//               border: "1.5px solid #3F51B5",
//               px: 1.5,
//               fontWeight: "700",
//               fontFamily: "Figtree",
//               fontSize: "48px"
//             }}
//           >
//             Technical
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: "250px",
//                 right: "1000px",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "4px",
//                 marginRight:'-60px'
                
//               }}
//             >
//                {/* <ArrowRightAltIcon sx={{ color: "green", transform: "rotate(-155deg)" }} /> */}
//               <Typography
//                 sx={{
//                   fontSize: "12px",
//                   lineHeight: "17px",
//                   textAlign: "center",
//                   borderRadius: "2px",
//                   border: "1.5px solid #261D8C",
//                   background: "#261D8C",
//                   color: "white",
//                   px: 1,
//                   py: 0.2,
//                   marginRight:'-150px'
                  
//                 }}
//               >
//                 Clients
//               </Typography>
//               <ArrowRightAltIcon sx={{ marginBottom:"30px",borderRadius:'2px',color:"#261D8C", transform: "rotate(-55deg)",marginLeft:'137px'}}/>
//             </Box>
//           </Box>

//           <Typography variant="h4" fontWeight="700" fontFamily="Figtree" fontSize="48px">
//             Bees as well
//           </Typography>
//         </Stack>

//         <Typography
//           variant="body1"
//           color="#000000 70%"
//           sx={{
//             fontFamily: "Figtree",
//             width: "693px",
//             height: "68px",
//             marginLeft: "550px",
//             lineHeight: "34px",
//             textAlign: "center",
//             fontSize: "20px",
//             paddingTop:'30px'
//           }}
//         >
//           We’re a full-cycle web and mobile application development company that creates software solutions tailored to the demands of businesses.
//         </Typography>
//       </Stack>

//       <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ mt: 5 }}>
//         <Grid xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
//           <Box component="img" src="./images/device.png" alt="Desktop UI" sx={{ width: "1086px", marginLeft: "100px", height: "285px" }} />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default Slogan;



// import React from "react";
// import styles from "./Slogan.module.css";

// function Slogan() {
//   return (
//     <div className={styles.slogancontainer}>
//       <div className={styles.slogancontent}>
//         <div className={styles.slogantitle}>
//           <h1 className={styles.maintext}>We do more for your Technical</h1>
//           <span className={styles.highlightedtext}>
//             Success
//             <div className={styles.arrowbox}>
//               <span className={styles.arrow}>➜</span>
//               <span className={styles.clientslabel}>Clients</span>
//             </div>
//           </span>
//         </div>

//         <div className={styles.slogantitle}>
//           <h1 className={styles.maintext}>We're</h1>
//           <span className={styles.technical}>
//             Technical
//             <div className={styles.arrowboxright1}>
//               <span className={styles.clientslabel1}>Workbees</span>
//               <span className={styles.arrow1}>➜</span>
//             </div>
//           </span>
//           <h1 className={styles.maintext}>Bees as well</h1>
//         </div>

//         <p className={styles.description}>
//           We’re a full-cycle web and mobile application development company that creates software solutions tailored to the demands of businesses.
//         </p>
//       </div>

//       <div className={styles.sloganimage}>
//         <img src="./images/device.png" alt="Desktop UI" className={styles.deviceimage} />
//       </div>
//     </div>
//   );
// }

// export default Slogan;


import React from "react";
import styles from "./Slogan.module.css";

function Slogan() {
  return (
    <div className={styles.slogancontainer}>
      <div className={styles.slogancontent}>

        {/* First Sentence Block */}
        <div className={styles.slogantitle}>
          <h1 className={styles.maintext}>We do more for your Technical</h1>
          <h1 className={styles.highlightedtext}>Success</h1>
        </div>

        {/* Second Sentence Block */}
        <div className={styles.slogantitle}>
          <h1 className={styles.maintext}>We're Technical Bees</h1>
          <h1 className={styles.maintext}>as well</h1>
        </div>

        <p className={styles.description}>
          We’re a full-cycle web and mobile application development company that creates software solutions tailored to the demands of businesses.
        </p>
      </div>

      <div className={styles.sloganimage}>
        <img src="./images/device.png" alt="Desktop UI" className={styles.deviceimage} />
      </div>
    </div>
  );
}

export default Slogan;

