import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Box, Button, Typography } from '@mui/material';
import IMG6 from "../img/master-slides-01.jpg.webp"
import IMG7 from "../img/master-slides-02.jpg.webp"
import IMG8 from "../img/slide1-01.jpg.webp"

export default function Home() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${IMG6})`,
            width: '100%',
            height: '670px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
            <Typography sx={styles.welcome}>Welcome to</Typography>
            <Typography sx={styles.pato}>PATO PLACE</Typography>
            <Button sx={styles.buttonSlide}>LOOK MENU</Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${IMG7})`,
            width: '100%',
            height: '670px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
            <Typography sx={styles.welcome}>Welcome to</Typography>
            <Typography sx={styles.pato}>PATO PLACE</Typography>
            <Button sx={styles.buttonSlide}>LOOK MENU</Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${IMG8})`,
            width: '100%',
            height: '670px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
            <Typography sx={styles.welcome}>Welcome to</Typography>
            <Typography sx={styles.pato}>PATO PLACE</Typography>
            <Button sx={styles.buttonSlide}>LOOK MENU</Button>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

const styles = {
  welcome: {
    fontFamily: 'Courgette',
    fontSize: '60px',
    lineHeight: 1.1,
    color: 'white',
    animationDuration: '1s',
    animationFillMode: 'both',
  },
  buttonSlide: {
    backgroundColor: 'white',
    color: '#ec1d25',
    padding: '10px 25px',
    borderRadius: '15px',
    "&:hover": {
      backgroundColor: '#ec1d25',
      color: 'white',
    }
  },
  pato: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '90px',
    lineHeight: 1.1,
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '10px',
    wordSpacing: '10px',
  }
}