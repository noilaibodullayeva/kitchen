import { Email, LocationCity, Phone, Twitter } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Img1 from "../img/gallarey1.webp"
import Img2 from "../img/gallarey2.webp"
import Img3 from "../img/gallarey3.webp"
import Img4 from "../img/gallarey4.webp"
import Img5 from "../img/gallarey5.webp"
import Img6 from "../img/gallarey6.webp"
import Img7 from "../img/gallarey7.webp"
import Img8 from "../img/gallarey8.webp"
import Img9 from "../img/gallarey9.webp"

export default function Section13() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            alignItems: 'baseline',
            justifyContent: 'center',
            p: '70px 25px',
            backgroundColor: '#222',
            gap:'30px'
        }}>
            <Box>
                <Typography sx={styles.contact}>CONTACT US</Typography>
                <Typography sx={styles.lorems}>
                    <LocationCity sx={{
                        mb: '-10px',
                        color: '#999'
                    }} /> 8th floor, 379 Hudson St, New York, NY 10018
                </Typography>
                <Typography sx={styles.lorems}>
                    <Phone sx={{
                        mb: '-10px',
                        color: '#999'
                    }} /> (+1) 96 716 6879
                </Typography>
                <Typography sx={styles.lorems}>
                    <Email sx={{
                        mb: '-10px',
                        color: '#999'
                    }} /> contact@site.com
                </Typography>

                <Typography sx={styles.contact}>OPENING TIMES</Typography>
                <Typography sx={styles.lorems}>09:30 AM - 11.00 PM</Typography>
                <Typography sx={styles.lorems}>Every Day</Typography>

            </Box>

            <Box>
                <Typography sx={styles.contact}>LATEST TWITTER</Typography>
                <Typography sx={styles.qizil}>
                    <Twitter sx={{
                        color:'#fff',
                        fontSize: '20px',
                        mb:'-7px'
                    }} /> @colorlib
                </Typography>
                <Typography sx={styles.lorems}>
                    Activello is a good option. It has a slider built into that<br /> displays the featured image in the slider.
                </Typography>
                <Typography sx={styles.qizil}>https://buff.ly/2zaSfAQ</Typography>
                <Typography sx={styles.sana}>21 Dec 2017</Typography>
                <Typography sx={styles.qizil}>
                    <Twitter sx={{
                        color:'#fff',
                        fontSize: '20px',
                        mb:'-7px'
                    }} /> @colorlib
                </Typography>
                <Typography sx={styles.lorems}>
                    Activello is a good option. It has a slider built into that<br/> displays
                </Typography>
                <Typography sx={styles.qizil}>https://buff.ly/2zaSfAQ</Typography>
                <Typography sx={styles.sana}>21 Dec 2017</Typography>
            </Box>

            <Box>
                <Typography sx={styles.contact}>GALLERY</Typography>
                <Box sx={styles.galleryDraw2}>
                    <img src={Img1} alt="img1" className="imgG" />
                    <img src={Img2} alt="img1" className="imgG" />
                    <img src={Img3} alt="img1" className="imgG" />
                    <img src={Img4} alt="img1" className="imgG" />
                    <img src={Img7} alt="img1" className="imgG" />
                    <img src={Img2} alt="img1" className="imgG" />
                    <img src={Img5} alt="img1" className="imgG" />
                    <img src={Img1} alt="img1" className="imgG" />
                    <img src={Img6} alt="img1" className="imgG" />
                    <img src={Img7} alt="img1" className="imgG" />
                    <img src={Img8} alt="img1" className="imgG" />
                    <img src={Img9} alt="img1" className="imgG" />
                </Box>
            </Box>
        </Box>
    )
}

const styles = {
    contact: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: '18px',
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        mb: '33px',
    },
    lorems: {
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: '13px',
        color: '#999999',
        lineHeight: 1.7,
        mb: '14px',
        alignItems: 'baseline',
        display: 'flex',
        justifyContent: 'left',
        flexDirection: 'row',
        gap: '3px'
    },
    icon: {
        fontWeight: 400,
        fontSize: '13px',
        color: '#999999',
        lineHeight: 1.7,
        mb: '14px'
    },
    qizil: {
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: '13px',
        color: '#ec1d25',
        lineHeight: 1.7,
    },
    sana: {
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: '12px',
        color: '#555555',
        m:'20px 0 20px 0'
    },
    galleryDraw2: {
        display: 'grid',
        gridTemplateColumns: ' auto auto auto auto',
        gap: '10px',
        margin: '10px 0'
    }
}
