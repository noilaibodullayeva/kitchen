import { Box, Typography } from '@mui/material'
import React from 'react'
import "./section4.css"
import Img9 from "../img/bg-intro-01.jpg.webp"

export default function Section4() {
    return (
        <Box sx={styles.bg4}>
            <Box>
                <Typography sx={styles.welcome}>Welcome to</Typography>
                <Typography sx={styles.pato}>PATO PLACE</Typography>
            </Box>
        </Box>
    )
}

const styles = {
    welcome: {
        fontFamily: 'Courgette',
        fontSize: '60px',
        lineHeight: 1.1,
        color: '#ec1d25',
        animationDuration: '1s',
        animationFillMode: 'both',
        textAlign: 'center'
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
        textAlign: 'center'
    },
    bg4: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${Img9})`,
        width: '100%',
        height: '470px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    }
}
