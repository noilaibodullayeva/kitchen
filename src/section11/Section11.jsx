import { Box, Typography } from '@mui/material'
import React from 'react'
import blog1 from "../img/blog-01.jpg.webp"
import blog2 from "../img/blog-02.jpg.webp"
import blog3 from "../img/blog-03.jpg.webp"
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt'

export default function Section11() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff'
        }}>
            <Box>
                <Typography sx={styles.discover222}>Customers Say</Typography>
                <Typography sx={styles.menuu222}>OUR MENU</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: { md: 'row', xs: 'column' },
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: { md: '50px 0', xs: '20px 10px' }
            }}>
                <Box sx={styles.box1}>
                    <Box sx={styles.demo1}>
                        <Box sx={styles.boxImg11}>
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
                        <Box sx={styles.boxImg22}>
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
                        <Box sx={styles.boxImg33}>
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
        </Box>
    )
}

const styles = {
    discover222: {
        fontFamily: 'Courgette',
        fontSize: '30px',
        lineHeight: 1.2,
        color: '#d61c22',
        textAlign: 'center',
        mt: '10%'
    },
    menuu222: {
        fontFamily: 'Poppins',
        fontWeight: 700,
        fontSize: '50px',
        lineHeight: 1.2,
        color: '#222',
        textTransform: 'uppercase',
        letterSpacing: '10px',
        wordSpacing: '8px',
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
    boxImg11: {
        width: '100%',
        backgroundImage: `url(${blog1})`,
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
        backgroundImage: `url(${blog2})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    boxImg33: {
        width: '100%',
        backgroundImage: `url(${blog3})`,
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
        pl: '13px'
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
