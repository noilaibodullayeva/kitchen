import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Img15 from "../img/our-menu-01.jpg.webp"
import Img16 from "../img/our-menu-05.jpg.webp"
import Img17 from "../img/our-menu-08.jpg.webp"
import Img18 from "../img/our-menu-10.jpg.webp"
import Img19 from "../img/our-menu-13.jpg.webp"
import Img20 from "../img/our-menu-16.jpg.webp"

export default function Section6() {
    return (
        <Box sx={styles.boxSection6}>
            <Box sx={styles.words2}>
                <Typography sx={styles.discover}>Discover</Typography>
                <Typography sx={styles.menu}>OUR MENU</Typography>
            </Box>
            <Box sx={styles.imgBoxes}>
                <Box sx={styles.birinchi}>
                    <Box sx={styles.demo4}>
                        <Box sx={styles.boxImg4}>
                            <Button sx={styles.button6}>LUNCH</Button>

                        </Box>
                    </Box>
                    <Box sx={styles.demo4}>
                        <Box sx={styles.boxImg5}>
                            <Button sx={styles.button6}>DINNER</Button>

                        </Box>
                    </Box>
                    <Box sx={styles.demo5}>
                        <Box sx={styles.demo6}>
                            <Box sx={styles.boxImg6}><Button sx={styles.button6}>DRINK</Button></Box>
                        </Box>
                        <Box sx={styles.demo7}>
                            <Box sx={styles.boxImg7}><Button sx={styles.button6}>STARTERS</Button></Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={styles.ikkinchi}>
                    <Box sx={styles.demo8}>
                        <Box sx={styles.boxImg8}><Button sx={styles.button6}>HAAPY HOUR</Button></Box>

                    </Box>
                    <Box sx={styles.demo7}>
                        <Box sx={styles.boxImg9}><Button sx={styles.button6}>DESERTS</Button></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

const styles = {
    boxSection6: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F2EC',
        width: '100%'
    },
    discover: {
        fontFamily: 'Courgette',
        fontSize: '30px',
        lineHeight: 1.2,
        color: '#d61c22',
        textAlign: 'center'
    },
    menu: {
        fontFamily: 'Poppins',
        fontWeight: 700,
        fontSize: '50px',
        lineHeight: 1.2,
        color: '#222222',
        textTransform: 'uppercase',
        letterSpacing: '10px',
        wordSpacing: '8px',
    },
    birinchi: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        alignItems: 'center',
        justifyContent: 'center',
        pt: '50px'
    },
    ikkinchi: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        alignItems: 'center',
        justifyContent: 'center',
        pt: '30px'
    },
    demo4: {
        borderRadius: '15px',
        width: '350px',
        overflow: 'hidden',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        margin: { md: ' 10px', xs: '10px' }
    },
    demo5: {
        width: '350px',
        overflow: 'hidden',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        margin: { md: ' 10px', xs: '10px' },
    },
    demo6: {
        borderRadius: '15px',
        width: '350px',
        overflow: 'hidden',
        height: '240px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        mb: '23px'
    },
    demo7: {
        borderRadius: '15px',
        width: '350px',
        overflow: 'hidden',
        height: '240px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    demo8: {
        borderRadius: '15px',
        width: { md: '720px', xs: '350px' },
        overflow: 'hidden',
        height: '240px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        mr: '20px',
        margin: {xs:'20px 10px'}
    },
    boxImg4: {
        width: '100%',
        backgroundImage: `url(${Img15})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    boxImg5: {
        width: '100%',
        backgroundImage: `url(${Img16})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    boxImg6: {
        width: '100%',
        backgroundImage: `url(${Img17})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    boxImg7: {
        width: '100%',
        backgroundImage: `url(${Img18})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    boxImg8: {
        width: '100%',
        backgroundImage: `url(${Img19})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    boxImg9: {
        width: '100%',
        backgroundImage: `url(${Img20})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    button6: {
        backgroundColor: 'white',
        color: '#ec1d25',
        padding: '15px 25px',
        borderRadius: '15px',
        "&:hover": {
            backgroundColor: '#ec1d25',
            color: 'white',
        },
        position: 'absolute',
        top: '45%',
        left: '35%',
        display: 'block'
    }
}
