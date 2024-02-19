import { Star } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { Navigation } from 'swiper/modules';
import Img29 from "../img/avatar-01.jpg.webp"
import Img30 from "../img/avatar-04.jpg.webp"
import Img31 from "../img/avatar-05.jpg.webp"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';

export default function Section9() {
  return (
    <Box sx={styles.boxSection9}>
      <Box>
        <Typography sx={styles.discover2}>Customers Say</Typography>
        <Typography sx={styles.menuu2}>OUR MENU</Typography>
      </Box>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '470px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100px',
              height: '100px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              border: '5px solid #d61c22',
              borderRadius: '50%',
              backgroundImage: `url(${Img29})`,
              mb: '50px'
            }}></Box>
            <Typography sx={styles.lorem9}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis atque hic et voluptas excepturi iure ex quidem molestias. Quae, nesciunt deserunt dicta aspernatur tempora inventore.</Typography>
            <Box sx={{
              color: '#d61c22',
              mb: '20px'
            }}>
              <Star /> <Star /> <Star /> <Star /> <Star />
            </Box>
            <Typography>Marie Simmons - New York</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '470px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100px',
              height: '100px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              border: '5px solid #d61c22',
              borderRadius: '50%',
              backgroundImage: `url(${Img30})`,
              mb: '50px'

            }}></Box>
            <Typography sx={styles.lorem9}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis atque hic et voluptas excepturi iure ex quidem molestias. Quae, nesciunt deserunt dicta aspernatur tempora inventore.</Typography>
            <Box sx={{
              color: '#d61c22',
              mb: '20px'
            }}>
              <Star /> <Star /> <Star /> <Star /> <Star />
            </Box>
            <Typography sx={styles.ismm}>Marie Simmons - New York</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '470px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100px',
              height: '100px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              border: '5px solid #d61c22',
              borderRadius: '50%',
              backgroundImage: `url(${Img31})`,
              mb: '50px'

            }}></Box>
            <Typography sx={styles.lorem9}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis atque hic et voluptas excepturi iure ex quidem molestias. Quae, nesciunt deserunt dicta aspernatur tempora inventore.</Typography>
            <Box sx={{
              color: '#d61c22',
              mb: '20px'
            }}>
              <Star /> <Star /> <Star /> <Star /> <Star />
            </Box>
            <Typography>Marie Simmons - New York</Typography>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

const styles = {
  boxSection9: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    pt: '100px',
    backgroundColor: '#fff',
    height: {md:'700px', xs: '800px'}
  },
  discover2: {
    fontFamily: 'Courgette',
    fontSize: '30px',
    lineHeight: 1.2,
    color: '#d61c22',
    textAlign: 'center'
  },
  menuu2: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '50px',
    lineHeight: 1.2,
    color: '#222',
    textTransform: 'uppercase',
    letterSpacing: '10px',
    wordSpacing: '8px',
  },
  lorem9: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '18px',
    color: '#666666',
    lineHeight: 1.7,
    width: { md: '800px', xs: '50%' }
  },
  ismm: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '18px',
    color: '#666666',
    lineHeight: 1.7,
  }
}
