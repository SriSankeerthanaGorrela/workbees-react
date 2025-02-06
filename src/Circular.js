import oneImg from './Assets/one.png';
import twoImg from './Assets/two.png';
import threeImg from './Assets/three.png';
import fourImg from './Assets/four.png';
import fiveImg from './Assets/five.png';
import sixImg from './Assets/six.png';
import sevenImg from './Assets/seven.png';
import eightImg from './Assets/eight.png';
import astronautImg from './Assets/astronaut.png';

import React from 'react';
import { Box, Typography } from '@mui/material';

function Circular() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '120vh',
        bgcolor: '#061345',
        padding: '66px 0 0 0',
        position: 'relative',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Figtree',
          fontSize: '48px',
          fontWeight: '700',
          lineHeight: '58px',
          textAlign: 'center',
          width: '953px',
          height: '94px',
          color: '#FFFFFF',
          margin: '0 auto',
        }}
      >
        Top 8 Reasons Why Clients Choose Us
      </Typography>


      <Box
        component="img"
        src={astronautImg}
        alt="Astronaut"
        sx={{
          width: '110px',
          height: '155px',
          position: 'absolute',
          top: '52%',
          left: '49%',
          transform: 'translate(-50%, -50%)', 
        }}
      />
      
      
<Box
  component="div"
  sx={{
    position: 'absolute',
    top: '52%',
    right: '35%',
    transform: 'translateY(-50%)',
    textAlign: 'center',
  }}
>
 
  <Box
    component="img"
    src={oneImg}
    alt="one"
    sx={{
      width: '75px',
      height: '40px',
      position: 'absolute', 
      left: '50%', 
      top: '0', 
      transform: 'translateX(-50%)', 
    }}
  />

  
  <Box
    sx={{
      position: 'absolute',
      top: '-35px',
      left: '185px', 
      transform: 'translateX(-50%)',
      textAlign: 'left', 
    }}
  >
    <Typography
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Figtree',
        fontSize: '20px',
        fontWeight: '600',
        width: '277px',
        height: '40px',
      }}
    >
  Certified Professionals
    </Typography>
    <Typography
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Figtree',
        fontSize: '14px',
        fontWeight: '500',
        width: '210px',
        height: '54px',
      }}
    >
  Teams with certifications in cutting-edge technologies (AWS, Google Cloud, and more).
    </Typography>
  </Box>
</Box>


      
<Box
  component="div"
  sx={{
    position: 'absolute',
    top: '65%',
    right: '40%',
    transform: 'translateY(-50%)',
    textAlign: 'center',
  }}
>

  <Box
    component="img"
    src={twoImg}
    alt="two"
    sx={{
      width: '45px',
      height: '45px',
      position: 'absolute', 
      left: '50%', 
      top: '0', 
      transform: 'translateX(-50%)', 
    }}
  />


  <Box
    sx={{
      position: 'absolute',
      top: '0px', 
      left: '210px', 
      transform: 'translateX(-50%)',
      textAlign: 'left',
    }}
  >
    <Typography
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Figtree',
        fontSize: '20px',
        fontWeight: '600',
        width: '350px',
        height: '35px',
      }}
    >
  Post-Development Support
    </Typography>
    <Typography
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Figtree',
        fontSize: '14px',
        fontWeight: '500',
        width: '200px',
        height: '54px',
      }}
    >
  Continued assistance and updates even after project completion to ensure success.
    </Typography>
  </Box>
</Box>


     


 
<Box
  component="div"
  sx={{
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
  }}
>
 
  <Box
    component="img"
    src={threeImg}
    alt="three"
    sx={{
      width: '50px',
      height: '50px',
      position: 'absolute', 
      left: '50%',
      transform: 'translateX(-50%)', 
    }}
  />
  

  <Box
    sx={{
      position: 'absolute',
      top: '55px', 
      left: '50%', 
      transform: 'translateX(-50%)',
      textAlign: 'left', 
    }}
  >
    <Typography
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Figtree',
        fontSize: '20px',
        fontWeight: '600',
        width: '177px',
        height: '35px',
      }}
    >
      Tailored Attention
    </Typography>
    
    <Typography
      sx={{
        color: '#DBDBDB',
        fontFamily: 'Figtree',
        fontSize: '14px',
        fontWeight: '500',
        width: '200px',
        height: '54px',
      }}
    >
      Personalized solutions that focus on your unique business challenges and goals.
    </Typography>
  </Box>
</Box>



      
<Box
  component="div"
  sx={{
    position: 'absolute',
    top: '65%',
    left: '40%',
    transform: 'translateY(-50%)',
    textAlign: 'center', 
  }}
>

  <Box
    component="img"
    src={fourImg}
    alt="four"
    sx={{
      width: '36px',
      height: '36px',
      position: 'absolute', 
      left: '50%', 
      transform: 'translateX(-50%)', 
    }}
  />
  
  <Box
    sx={{
      position: 'absolute',
      top: '0px', 
      right: '-50px', 
      transform: 'translateX(-50%)',
      textAlign: 'left', 
    }}
  >
    <Typography
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Figtree',
        fontSize: '20px',
        fontWeight: '600',
        width: '177px',
        height: '65px',
      }}
    >
      Transparent Communication
    </Typography>
    
    <Typography
      sx={{
        color: '#DBDBDB',
        fontFamily: 'Figtree',
        fontSize: '14px',
        fontWeight: '500',
        width: '200px',
        height: '54px',
      }}
    >
      Clear, jargon-free discussions throughout all stages of development.
    </Typography>
  </Box>
</Box>





      
      <Box
  component="div"
  sx={{
    position: 'absolute',
    top: '52%',  
    left: '35%', 
    transform: 'translateY(-50%)', 
    textAlign: 'center', 
  }}
>
 
  <Box
    component="img"
    src={fiveImg}
    alt="five"
    sx={{
      width: '35px',
      height: '35px',
      position: 'absolute', 
      left: '50%', 
      transform: 'translateX(-50%)', 
    }}
  />

 
  <Box
    sx={{
      position: 'absolute',
      top: '-35px',
      left: '-150px',
      transform: 'translateX(-50%)', 
      textAlign: 'left', 
    }}
  >
   <Typography
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Figtree',
        fontSize: '20px',
        fontWeight: '600',
        width: '250px',
        height: '35px',
      }}
    >
  Reliable Responsibility
    </Typography>
    <Typography
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Figtree',
        fontSize: '14px',
        fontWeight: '500',
        width: '200px',
        height: '54px',
      }}
    >
  Dedicated to delivering high-quality solutions while maintaining accountability.
    </Typography>

  </Box>
</Box>


  
      <Box
  component="div"
  sx={{
    position: 'absolute',
    top: '39%', 
    left: '40%', 
    transform: 'translateY(-50%)', 
    textAlign: 'center', 
  }}
>
 
  <Box
    component="img"
    src={sixImg}
    alt="six"
    sx={{
      width: '45px',
      height: '45x',
      position: 'absolute', 
      left: '50%', 
      transform: 'translateX(-50%)', 
    }}
  />

 
  <Box
    sx={{
      position: 'absolute',
      bottom: '-35px', 
      right: '-50px', 
      transform: 'translateX(-50%)', 
      textAlign: 'left', 
    }}
  >
    <Typography
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Figtree',
        fontSize: '20px',
        fontWeight: '600',
        width: '177px',
        height: '40px',
      }}
    >
  Free Consultation
    </Typography>
    <Typography
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Figtree',
        fontSize: '14px',
        fontWeight: '500',
        width: '210px',
        height: '54px',
      }}
    >
  Complimentary project analysis and first iteration planning before any commitments.
    </Typography>

  </Box>
</Box>


   
      <Box
  component="div"
  sx={{
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
  }}
>

  <Box
    component="img"
    src={sevenImg}
    alt="seven"
    sx={{
      width: '36px',
      height: '36px',
      position: 'absolute', 
      left: '50%', 
      top:'140px',
      transform: 'translateX(-50%)', 
    }}
  />

  <Box
    sx={{
      position: 'absolute',
      top: '15px', 
      left: '50%', 
      transform: 'translateX(-50%)',
      textAlign: 'left', 
    }}
  >
    <Typography
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Figtree',
        fontSize: '20px',
        fontWeight: '600',
        width: '177px',
        height: '65px',
      }}
    >
  Expert Recommendations
    </Typography>
    <Typography
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Figtree',
        fontSize: '14px',
        fontWeight: '500',
        width: '250px',
        height: '54px',
      }}
    >
  Trusted by industry leaders; most of our clients recommend us to their peers.
    </Typography>
  </Box>
</Box>

     
<Box
  component="div"
  sx={{
    position: 'absolute',
    top: '39%',
    right: '40%',
    transform: 'translateY(-50%)',
    textAlign: 'center',
  }}
>
  
  <Box
    component="img"
    src={eightImg}
    alt="eight"
    sx={{
      width: '35px',
      height: '35px',
      position: 'absolute', 
      left: '50%', 
      top: '0', 
      transform: 'translateX(-50%)', 
    }}
  />

  
  <Box
    sx={{
      position: 'absolute',
      bottom: '-35px', 
      left: '180px', 
      transform: 'translateX(-50%)',
      textAlign: 'left', 
    }}
  >
    <Typography
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Figtree',
        fontSize: '20px',
        fontWeight: '600',
        width: '177px',
        height: '45px',
      }}
    >
  Unmatched Speed
    </Typography>
    <Typography
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Figtree',
        fontSize: '14px',
        fontWeight: '500',
        width: '240px',
        height: '54px',
      }}
    >
  Rapid project initiation and swift responses to client requests, ensuring timely delivery.
    </Typography>

  </Box>
</Box>

    </Box>
  );
}

export default Circular;


