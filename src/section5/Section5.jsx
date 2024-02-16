import React from 'react'
import "./section5.css"
import Img10 from "../img/intro-01.jpg.webp"
import Img11 from "../img/intro-02.jpg.webp"
import Img12 from "../img/intro-03.jpg"
import { Box, Typography } from '@mui/material'
import { ArrowRightAlt } from '@mui/icons-material'

export default function Section5() {
    return (
        <Box sx={styles.boxSection5}>
            <Box sx={styles.box1}>
                <Box sx={styles.demo1}>
                    <Box sx={styles.boxImg1}>
                    </Box>
                </Box>
                <Box sx={styles.words}>
                    <Typography sx={styles.romantic}>ROMANTIC RESTAURANT</Typography>
                    <Typography sx={styles.lorem1}>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</Typography>
                    <Typography sx={styles.story1}>
                        OUR STORY <ArrowRightAlt />{' '}
                    </Typography>
                </Box>
            </Box>
            <Box sx={styles.box1}>
                <Box sx={styles.demo1}>
                    <Box sx={styles.boxImg2}>
                    </Box>
                </Box>
                <Box sx={styles.words}>
                    <Typography sx={styles.romantic}>ROMANTIC RESTAURANT</Typography>
                    <Typography sx={styles.lorem1}>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</Typography>
                    <Typography sx={styles.story1}>
                        OUR STORY <ArrowRightAlt />{' '}
                    </Typography>
                </Box>
            </Box>
            <Box sx={styles.box1}>
                <Box sx={styles.demo1}>
                    <Box sx={styles.boxImg3}>
                    </Box>
                </Box>
                <Box sx={styles.words}>
                    <Typography sx={styles.romantic}>ROMANTIC RESTAURANT</Typography>
                    <Typography sx={styles.lorem1}>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</Typography>
                    <Typography sx={styles.story1}>
                        OUR STORY <ArrowRightAlt />{' '}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

const styles = {
    boxSection5: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: {md: '50px 0', xs: '20px 10px'}
    },
    demo1: {
        borderRadius: '15px',
        width: '350px',
        overflow: 'hidden',
        height: '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        margin: { md: '20px 10px', xs: '10px' }
    },
    boxImg1: {
        width: '100%',
        backgroundImage: `url(${Img10})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    boxImg2: {
        width: '100%',
        backgroundImage: `url(${Img11})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    boxImg3: {
        width: '100%',
        backgroundImage: `url(${Img12})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    words: {
        width: '350px',
        pl:'13px'
    },
    romantic: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: '22px',
        color: ' #333333',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        "&:hover": {
            color: '#ec1d25'
        }
    },
    lorem1: {
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: '15px',
        lineHeight: 1.7,
        color: '#666666',
        mb: '20px',
        width: '350px'
    },
    story1: {
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: '12px',
        color: '#222222',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        display: 'flex',
        flexDirection: 'row',
        padding: '10px 0',
        "&:hover": {
            color: '#d61c22',
            fontWeight: 400,
            cursor: 'pointer'
        }
    },
}
