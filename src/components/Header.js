// import React from "react";
// import { AppBar,Toolbar,Box, Stack, Typography,Container,Button } from "@mui/material";
// import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
// function Header() {
//     return(
//         <AppBar position="static" bg color="white" >
        
//              <Container maxWidth="lg">
//           <Toolbar sx={{display:'flex',alignItems: 'center',justifyContent: 'space-between'}}>
//             <Box sx={{display:'flex',width:'167px',height:'45.1px',gap:'12px',alignItems:'center'}} >
//              <img
//              src="/images/logo.png"
//              alt="logo"
//              style={{width:'59px', height:'45.18px',marginBottom:10}}
//              />
             
//              <Stack direction={"column"} gap={'2px'} width={'96px'} height={'38px'} >
//                 <Typography sx={{width:"96px",height:'18px', fontFamily:"Figtree",fontWeight:"400",fontSize:"16px", lineHeight:'17.07px',color:'#000000'}} >
//                     Workbees
//                 </Typography>
//                 <Typography sx={{
//                     width:"96px",height:'18px', fontFamily:"Figtree",fontWeight:'600',fontSize:'16px',lineHeight:'17.07px',color:'#000000'
//                 }}>
//                     Technologies
//                 </Typography>
//              </Stack>
//             </Box>
//                     <Stack direction={"row"} spacing={4} sx={{ flexGrow: 1, justifyContent: 'center' }}>
//                     <Typography
//                         sx={{
//                             fontFamily: "Figtree",
//                             cursor: "pointer",
//                             color: "black",
//                             fontWeight: "500",
//                             lineHeight: "17.07px",
//                             width: "97px",
//                             height: "18px",
//                             display: "flex",        // Align text and icon in a row
//                             alignItems: "center",   // Vertically center the icon
//                         }}
//                         >
//                         Development
//                         <ExpandMoreOutlinedIcon
//                             sx={{
//                             width: "20px",       
//                             height: "20px",      
//                             marginLeft: "5px",   
//                             transform: "rotate(0deg)",  
//                             }}
//                         />
//                         </Typography>


//                         <Typography sx={{cursor:'pointer',fontSize:'16px',fontFamily:"Figtree",fontWeight:500,lineHeight:'17.07px',color:'black',pl:'20px'}}>
//                             Our Products
//                         </Typography >
//                         <Typography sx={{cursor:'pointer',fontSize:'16px',fontFamily:"Figtree",fontWeight:500,lineHeight:'17.07px',color:'black'}}>
//                             About
//                         </Typography>
                        
//                     </Stack>
//                     <Button variant="contained" sx={{
//                             backgroundColor: '#105BFF',
//                             color: 'white',
//                             borderRadius: '32px',
                            
//                             pt:'12px',
//                             pr:"24px",
//                             pb:'12px',
//                             pl:'24px',
//                             width:'142px',
//                             height:'48px'
                            
                            
//                         }} >Contact Us</Button>
//             </Toolbar> 
//             </Container> 
//         </AppBar>
//     );
    
// }
// export default Header;


//  import React from "react";

// function Header() {
//   return (
//     <header style={{ backgroundColor: 'white',  }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//           <img
//             src="/images/logo.png"
//             alt="logo"
//             style={{ width: '59px', height: '45.18px' }}
//           />
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
//             <p style={{ fontFamily: 'Figtree', fontWeight: '400', fontSize: '16px', lineHeight: '17.07px', color: '#000000' }}>
//               Workbees
//             </p>
//             <p style={{ fontFamily: 'Figtree', fontWeight: '600', fontSize: '16px', lineHeight: '17.07px', color: '#000000', marginTop:'-10px' }}>
//               Technologies
//             </p>
//           </div>
//         </div>

//         <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
//           <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontFamily: 'Figtree', fontWeight: '500', fontSize: '16px', color: 'black' }}>
//             <span>Development</span>
//             {/* <svg style={{ width: '20px', height: '20px', marginLeft: '5px', transform: 'rotate(0deg)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16l4-4h-3V4h-2v8H8l4 4z" /></svg> */}
//           </div>

//           <p style={{ cursor: 'pointer', fontSize: '16px', fontFamily: 'Figtree', fontWeight: '500', lineHeight: '17.07px', color: 'black' }}>
//             Our Products
//           </p>
//           <p style={{ cursor: 'pointer', fontSize: '16px', fontFamily: 'Figtree', fontWeight: '500', lineHeight: '17.07px', color: 'black' }}>
//             About
//           </p>
//         </div>

//         <button style={{
//           backgroundColor: '#105BFF',
//           color: 'white',
//           borderRadius: '32px',
//           padding: '12px 24px',
//           width: '142px',
//           height: '48px',
//           border: 'none',
//           cursor: 'pointer'
//         }}>
//           Contact Us
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Header;


// import React from "react";
// import styles from "./Header.module.css";

// function Header() {
//   return (
//     <header className={styles.header}>
//       {/* <div className={styles.headercontainer}> */}
//         <div className={styles.logosection}>
//           <img src="/images/logo.png" alt="logo" className={styles.logo} />
//           <div className={styles.logotext}>
//             <p className={styles.companyname}>Workbees</p>
//             <p className={styles.companysubtext}>Technologies</p>
//           </div>
//         </div>

//         <nav className={styles.navmenu}>
//           <p className={styles.navitem}>Development</p>
//           <p className={styles.navitem}>Our Products</p>
//           <p className={styles.navitem}>About</p>
//         </nav>

//         <button className={styles.contactbutton}>Contact Us</button>
//       {/* </div> */}
//     </header>
//   );
// }

// export default Header;



// import React, { useState } from "react";
// import styles from "./Header.module.css";
// import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

// function Header() {
//   const [isMobile, setIsMobile] = useState(false);

//   return (
//     <header className={styles.header}>
//       <div className={styles.logosection}>
//         <img src="/images/logo.png" alt="logo" className={styles.logo} />
        
//         {/* Hide company name on mobile */}
//         <div className={styles.logotext}>
//           <p className={styles.companyname}>Workbees</p>
//           <p className={styles.companysubtext}>Technologies</p>
//         </div>
//       </div>

//       {/* Menu Icon - Appears only on mobile */}
//       <div className={styles.menuIcon} onClick={() => setIsMobile(!isMobile)}>
//         {isMobile ? <FaTimes /> : <FaBars />}
//       </div>

//       {/* Navigation Menu */}
//       <nav className={`${styles.navmenu} ${isMobile ? styles.navActive : ""}`}>
//         <p className={styles.navitem}>Development</p>
//         <p className={styles.navitem}>Our Products</p>
//         <p className={styles.navitem}>About</p>
//       </nav>

//       {/* Contact Button - Only visible on desktop */}
//       <button className={styles.contactbutton}>Contact Us</button>
//     </header>
//   );
// }

// export default Header;



import React, { useState } from "react";
import styles from "./Header.module.css";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logosection}>
        <img src="/images/logo.png" alt="logo" className={styles.logo} />
        <div className={styles.logotext}>
          <p className={styles.companyname}>Workbees</p>
          <p className={styles.companysubtext}>Technologies</p>
        </div>
      </div>
      
      <nav className={`${styles.navmenu} ${menuOpen ? styles.showMenu : ""}`}>
        <div className={styles.navcenter}>
          <p className={styles.navitem}>Development</p>
          <p className={styles.navitem}>Our Products</p>
          <p className={styles.navitem}>About</p>
          </div>
          <button className={styles.contactbutton}>Contact Us</button>

        
      </nav>
      
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>
      
    </header>
  );
}

export default Header;
