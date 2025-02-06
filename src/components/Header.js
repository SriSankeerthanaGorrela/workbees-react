import React from "react";
import { AppBar,Toolbar,Box, Stack, Typography,Container,Button } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
function Header() {
    return(
        <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" ,height:'35px'}}>
        
             <Container maxWidth="lg">
          <Toolbar sx={{display:'flex',alignItems: 'center',justifyContent: 'space-between'}}>
            <Box sx={{display:'flex',width:'167px',height:'90px',gap:'12px',alignItems:'center'}} >
             <img
             src="/images/logo.png"
             alt="logo"
             style={{width:'59px', height:'45.18px',marginBottom:10}}
             />
             
             <Stack direction={"column"} gap={'2px'} width={'96px'} height={'38px'} >
                <Typography sx={{width:"96px",height:'18px', fontFamily:"Figtree",fontWeight:"400",fontSize:"16px", lineHeight:'17.07px',color:'#000000'}} >
                    Workbees
                </Typography>
                <Typography sx={{
                    width:"96px",height:'18px', fontFamily:"Figtree",fontWeight:'600',fontSize:'16px',lineHeight:'17.07px',color:'#000000'
                }}>
                    Technologies
                </Typography>
             </Stack>
            </Box>
                    <Stack direction={"row"} spacing={4} sx={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Typography
                        sx={{
                            fontFamily: "Figtree",
                            cursor: "pointer",
                            color: "black",
                            fontWeight: "500",
                            lineHeight: "17.07px",
                            width: "97px",
                            height: "18px",
                            display: "flex",        // Align text and icon in a row
                            alignItems: "center",   // Vertically center the icon
                        }}
                        >
                        Development
                        <ExpandMoreOutlinedIcon
                            sx={{
                            width: "20px",       
                            height: "20px",      
                            marginLeft: "5px",   
                            transform: "rotate(0deg)",  
                            }}
                        />
                        </Typography>


                        <Typography sx={{cursor:'pointer',fontSize:'16px',fontFamily:"Figtree",fontWeight:500,lineHeight:'17.07px',color:'black',pl:'20px'}}>
                            Our Products
                        </Typography >
                        <Typography sx={{cursor:'pointer',fontSize:'16px',fontFamily:"Figtree",fontWeight:500,lineHeight:'17.07px',color:'black'}}>
                            About
                        </Typography>
                        
                    </Stack>
                    <Button variant="contained" sx={{
                            backgroundColor: '#105BFF',
                            color: 'white',
                            borderRadius: '32px',
                            
                            pt:'12px',
                            pr:"24px",
                            pb:'12px',
                            pl:'24px',
                            width:'142px',
                            height:'48px'
                            
                            
                        }} >Contact Us</Button>
            </Toolbar> 
            </Container> 
        </AppBar>
    );
    
}
export default Header;

