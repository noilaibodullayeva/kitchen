import { Box, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Img4 from '../img/our-story-01.jpg.webp';
import './section3.css';

export default function Section3() {
    return (
        <Box sx={styles.boxSection3}>
            <Box sx={styles.boxLi}>
                <Typography sx={styles.italian}>Italian Restaurant</Typography>
                <Typography sx={styles.welcome}>WELCOME</Typography>
                <Typography sx={styles.lorem}>
                    Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed
                    fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
                    facilisis ligula sem id neque.
                </Typography>
                <Typography sx={styles.story}>
                    OUR STORY <ArrowRightAltIcon/>{' '}
                </Typography>
            </Box>
            <Box sx={styles.demo}>
                <Box sx={styles.boxImg}>
                </Box>
            </Box>
        </Box>
    );
}

const styles = {
    boxSection3: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        justifyContent: 'center',
        alignItems: 'center',
        padding: { md: '10px', xs: '20px 15px' },
        gap: '40px',
        bachgroundColor: '#ECECEC',
    },
    boxLi: {
        width: { md: '50%', xs: '100%' },
        height: '300px',
        // marginTop: '-70px',
    },
    boxImg: {
        width: '100%',
        backgroundImage: `url(${Img4})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    italian: {
        fontFamily: 'Courgette',
        fontSize: '30px',
        lineHeight: '1.2',
        color: ' #d61c22',
        textAlign: 'center',
    },
    demo: {
        borderRadius: '15px',
        width: '400px',
        overflow: 'hidden',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        margin: {md:'50px 30px', xs:'10px'}
    },
    welcome: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: '50px',
        lineHeight: '1.2',
        color: ' #222222',
        textTransform: 'uppercase',
        letterSpacing: '6px',
        textAlign: 'center',
    },
    lorem: {
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: '15px',
        lineHeight: 1.7,
        color: '#666666',
        margin: '0px',
        textAlign: 'center',
    },
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
        "&:hover" : {
            color: '#d61c22',
            fontWeight: 700,
            cursor:'pointer'
        }
    },
};