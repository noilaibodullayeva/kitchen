import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { Box, Typography } from '@mui/material';
import IMG21B from "../img/bg-event-02.jpg.webp"
import IMG22B from "../img/bg-event-01.jpg.webp"
import IMG23B from "../img/slide1-01.jpg.webp"
import pic1 from "../img/eventP.webp"
import pic2 from "../img/eventP2.webp"
import pic3 from "../img/eventP3.webp"
import { ArrowRightAlt } from '@mui/icons-material';

export default function Section7() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: `url(${IMG21B})`,
                        width: '100%',
                        height: {md:'670px', xs:'900px'},
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        marginTop: '40px'
                    }}>
                        <Box sx={styles.upcoming}>
                            <Typography sx={styles.discover}>Discover</Typography>
                            <Typography sx={styles.menuu}>OUR MENU</Typography>
                        </Box>
                        <Box sx={styles.boxSection7}>
                            <Box sx={styles.chetki}>
                                <Typography sx={styles.chetkiP}>
                                    08:00 PM TUESDAY - 21 NOVEMBER 2018
                                </Typography>
                            </Box>
                            <Box sx={styles.imagee}>
                                <Box sx={styles.boxImg20}></Box>
                            </Box>
                            <Box sx={styles.wordss4}>
                                <Typography sx={styles.wine}>WINES DURING SPECIFIC NIGHTS</Typography>
                                <Typography sx={styles.lorem}>Lorem ipsum, dolor sit amet consectetur magnam! rerum!</Typography>
                                <Typography sx={styles.clocks}>
                                    <Box sx={styles.soat}>
                                        <Typography sx={styles.besh}>25</Typography>
                                        <Typography sx={styles.day}>days</Typography>
                                    </Box>
                                    <Box sx={styles.soat}>
                                        <Typography sx={styles.besh}>12</Typography>
                                        <Typography sx={styles.day}>hours</Typography>
                                    </Box>
                                    <Box sx={styles.soat}>
                                        <Typography sx={styles.besh}>11</Typography>
                                        <Typography sx={styles.day}>minutes</Typography>
                                    </Box>
                                    <Box sx={styles.soat}>
                                        <Typography sx={styles.besh}>38</Typography>
                                        <Typography sx={styles.day}>seconds</Typography>
                                    </Box>
                                </Typography>
                                <Typography sx={styles.story}>
                                    VIEW DETAILS <ArrowRightAlt />{' '}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: `url(${IMG22B})`,
                        width: '100%',
                        height: {md:'670px', xs:'900px'},
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        marginTop: '40px'
                    }}>
                        <Box sx={styles.upcoming}>
                            <Typography sx={styles.discover}>Discover</Typography>
                            <Typography sx={styles.menuu}>OUR MENU</Typography>
                        </Box>
                        <Box sx={styles.boxSection7}>
                            <Box sx={styles.chetki}>
                                <Typography sx={styles.chetkiP}>
                                    08:00 PM TUESDAY - 21 NOVEMBER 2018
                                </Typography>
                            </Box>
                            <Box sx={styles.imagee}>
                                <Box sx={styles.boxImg21}></Box>
                            </Box>
                            <Box sx={styles.wordss4}>
                                <Typography sx={styles.wine}>WINES DURING SPECIFIC NIGHTS</Typography>
                                <Typography sx={styles.lorem}>Lorem ipsum, dolor sit amet consectetur magnam! rerum!</Typography>
                                <Typography sx={styles.clocks}>
                                    <Box sx={styles.soat}>
                                        <Typography sx={styles.besh}>25</Typography>
                                        <Typography sx={styles.day}>days</Typography>
                                    </Box>
                                    <Box sx={styles.soat}>
                                        <Typography sx={styles.besh}>12</Typography>
                                        <Typography sx={styles.day}>hours</Typography>
                                    </Box>
                                    <Box sx={styles.soat}>
                                        <Typography sx={styles.besh}>11</Typography>
                                        <Typography sx={styles.day}>minutes</Typography>
                                    </Box>
                                    <Box sx={styles.soat}>
                                        <Typography sx={styles.besh}>38</Typography>
                                        <Typography sx={styles.day}>seconds</Typography>
                                    </Box>
                                </Typography>
                                <Typography sx={styles.story}>
                                    VIEW DETAILS <ArrowRightAlt />{' '}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: `url(${IMG22B})`,
                        width: '100%',
                        height: {md:'670px', xs:'900px'},
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        marginTop: '40px'
                    }}>
                        <Box sx={styles.upcoming}>
                            <Typography sx={styles.discover}>Discover</Typography>
                            <Typography sx={styles.menuu}>OUR MENU</Typography>
                        </Box>
                        <Box sx={styles.boxSection7}>
                            <Box sx={styles.chetki}>
                                <Typography sx={styles.chetkiP}>
                                    08:00 PM TUESDAY - 21 NOVEMBER 2018
                                </Typography>
                            </Box>
                            <Box sx={styles.imagee}>
                                <Box sx={styles.boxImg22}></Box>
                            </Box>
                            <Box sx={styles.wordss4}>
                                <Typography sx={styles.wine}>WINES DURING SPECIFIC NIGHTS</Typography>
                                <Typography sx={styles.lorem}>Lorem ipsum, dolor sit amet consectetur magnam! rerum!</Typography>
                                <Typography sx={styles.clocks}>
                                    <Box sx={styles.soat}>
                                        <Typography sx={styles.besh}>25</Typography>
                                        <Typography sx={styles.day}>days</Typography>
                                    </Box>
                                    <Box sx={styles.soat}>
                                        <Typography sx={styles.besh}>12</Typography>
                                        <Typography sx={styles.day}>hours</Typography>
                                    </Box>
                                    <Box sx={styles.soat}>
                                        <Typography sx={styles.besh}>11</Typography>
                                        <Typography sx={styles.day}>minutes</Typography>
                                    </Box>
                                    <Box sx={styles.soat}>
                                        <Typography sx={styles.besh}>38</Typography>
                                        <Typography sx={styles.day}>seconds</Typography>
                                    </Box>
                                </Typography>
                                <Typography sx={styles.story}>
                                    VIEW DETAILS <ArrowRightAlt />{' '}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

const styles = {
    story: {
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: '12px',
        color: '#222222',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0',
        "&:hover": {
            color: '#d61c22',
            fontWeight: 700,
            cursor: 'pointer'
        }
    },
    boxSection7: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        mt:'30px',
        borderRadius:'15px',
    },
    discover: {
        fontFamily: 'Courgette',
        fontSize: '30px',
        lineHeight: 1.2,
        color: '#d61c22',
        textAlign: 'center'
    },
    menuu: {
        fontFamily: 'Poppins',
        fontWeight: 700,
        fontSize: '50px',
        lineHeight: 1.2,
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '10px',
        wordSpacing: '8px',
    },
    chetki: {
        backgroundColor: '#cf2227',
        opacity: 0.9,
        position: 'relative',
        width: '50px',
        height: '100%',
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: '12px',
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textAlign: 'center',
        display: {md: 'flex', xs: 'none'}
    },
    chetkiP: {
        width: '390px',
        height: '50px',
        transformOrigin: 'center center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotateZ(90deg)',
        textAlign: 'center'
    },
    imagee: {
        width: '500px',
        overflow: 'hidden',
        height: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    boxImg20: {
        width: '100%',
        backgroundImage: `url(${pic1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    boxImg21: {
        width: '100%',
        backgroundImage: `url(${pic2})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    boxImg22: {
        width: '100%',
        backgroundImage: `url(${pic3})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    wordss4: {
        backgroundColor: '#fff',
        padding: '40px 30px'
    },
    wine: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: '22px',
        lineHeight: 1.2,
        color: '#222222',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        textAlign: 'center',
        mb: '10px'
    },
    lorem: {
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: '15px',
        lineHeight: 1.7,
        color: '#666666',
        textAlign: 'center',
        marginTop: '20px',
        width: '400px'
    },
    clocks: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        mt: '20px'
    },
    besh: {
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: '50px',
        color: '#ec1d25',
        lineHeight: 1.1,
        textTransform: 'uppercase',
        letterSpacing: '3px',
    },
    day: {
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: '12px',
        color: '#999999',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    }
}