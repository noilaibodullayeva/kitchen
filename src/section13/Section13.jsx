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
            alignItems: 'center',
            justifyContent: 'center',
            p: '25px 25px'
        }}>
            <Box>
                <Typography sx={styles.contact}>CONTACT US</Typography>
                <Typography sx={styles.lorems}>
                    <LocationCity /> 8th floor, 379 Hudson St, New York, NY 10018
                </Typography>
                <Typography sx={styles.lorems}>
                    <Phone /> (+1) 96 716 6879
                </Typography>
                <Typography sx={styles.lorems}>
                    <Email /> contact@site.com
                </Typography>

                <Typography sx={styles.contact}>OPENING TIMES</Typography>
                <Typography sx={styles.lorems}>09:30 AM - 11.00 PM</Typography>
                <Typography sx={styles.lorems}>Every Day</Typography>

            </Box>

            <Box>
            <Typography sx={styles.contact}>LATEST TWITTER</Typography>
                <Typography sx={styles.qizil}>
                    <Twitter /> @colorlib
                </Typography>
                <Typography sx={styles.lorems}>
                    Activello is a good option. It has a slider built into that<br /> displays the featured image in the slider.
                </Typography>
                <Typography sx={styles.qizil}>https://buff.ly/2zaSfAQ</Typography>
                <Typography sx={styles.sana}>21 Dec 2017</Typography>
                <Typography sx={styles.qizil}>
                    <Twitter /> @colorlib
                </Typography>
                <Typography sx={styles.lorems}>
                    Activello is a good option. It has a slider built into that<br /> displays
                    <Typography sx={styles.qizil}>https://buff.ly/2zaSfAQ</Typography>
                </Typography>
                <Typography sx={styles.sana}>21 Dec 2017</Typography>
            </Box>

            <Box>
                <Typography sx={styles.contact}>GALLERY</Typography>

            </Box>
        </Box>
    )
}
