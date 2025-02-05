
import { Container, Stack, Box, Typography } from '@mui/material';
import { Grid } from "@mui/system";
import React from 'react';


function Technology1(){
    return(
        <Container sx={{height:'575px',marginTop:'60px'}}>
            <Box>
                <Stack sx={{ }}>
                    <Typography  marginTop={2}  textAlign={'center'} border={'1px solid blue'} borderRadius='24px' marginLeft={55} marginRight={55} fontSize='18px'
                    sx={{ background: 'linear-gradient(90deg, #00008B, #0000FF)', 
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '600',
                        paddingLeft:'5px',
                        paddingRight:'5px',
                        paddingTop:'7px',
                        paddingBottom:'7px',
                        // WebkitTextStroke: '1px', 
                        WebkitTextStrokeColor: '#0000FF', // Border color (Blue)
                        }}>
                       Service and Expertise
                    </Typography>
                    <Stack>
                        <Typography sx={{height:'65px',lineHeight:'40px',fontFamily:'Figtree',fontSize:'48px',fontWeight:'700',textAlign:'center',marginTop:'20px',marginLeft:'20px'}}>
                        Technology that drive business growth
                        </Typography>
                        <Stack>
                            <Typography sx={{fontFamily:'Figtree',textAlign:'center',lineHeight:'30px',fontSize:'20px',marginLeft:'180px',marginRight:'140px'}}>
                            We provide development solutions to product companies startups to 
                            maximize engineering and design values across full cycle and product development
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
            
            <Grid container sx={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
    
    <Box sx={{ fontFamily: 'Figtree',}}>
    <Box
        component="img"
        src="/images/icon.png"
        alt="Icon"
        sx={{ width: '58px', height: '52px', marginLeft: '50px',marginBottom:'10px' }} 
    />
    <Typography

        sx={{
            fontFamily: 'Figtree',
            fontSize: '20px',
            lineHeight: '32px',
            fontWeight: 550,
           paddingTop:'40px',
            marginLeft: '80px',
            padding: '10px',
            maxWidth: '45%',
            paddingLeft:'20px',
            
             
        }}
    >
       
     We are Experts in areas like mobile and web development
    </Typography>
</Box>
    
    <Box
        component="img"
        src="./images/Tabs.png"
        alt="Linkme"
        sx={{
            width: '100%', 
            maxWidth: '400px', 
            height: 'auto',
            marginRight: '70px',
        
        }}
    />
</Grid>

        </Container>
    );
}
export default Technology1;