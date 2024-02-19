import { Box, TextField, Typography, Button, MenuItem } from '@mui/material'
import React from 'react'
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Img27 from "../img/booking-01.jpg.webp"

const currencies = [
    {
        value: 'people',
        label: '1 person',
    },
    {
        value: 'people',
        label: '2 people',
    },
    {
        value: 'people',
        label: '3 people',
    },
    {
        value: 'people',
        label: '4 people',
    },
    {
        value: 'people',
        label: '5 people',
    },
    {
        value: 'people',
        label: '6 people',
    },
];

export default function Section8() {
    return (
        <Box sx={styles.boxSection8}>
            <Box sx={styles.box8_1}>
                <Box sx={styles.upcoming1}>
                    <Typography sx={styles.discover}>Discover</Typography>
                    <Typography sx={styles.menuu}>OUR MENU</Typography>
                </Box>
                <Box sx={styles.fields}>
                    <Box sx={styles.form1}>
                        <TextField
                            required
                            id="outlined"
                            label="Name"
                        />
                        <TextField
                            required
                            id="outlined"
                            label="Phone"
                        />
                        <TextField
                            required
                            id="outlined"
                            label="Email"
                        />
                    </Box>
                    <Box sx={styles.form1}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Phone"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                        />
                    </Box>
                </Box>
                <Box>
                    <Button sx={styles.buttonSlide1}>BOOK TABLE</Button>
                </Box>
            </Box>
            <Box sx={styles.img8}>
                <Box sx={styles.rasm}></Box>
            </Box>
        </Box>
    )
}

const styles = {
    boxSection8: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: '40px',
        backgroundColor: '#EEEEEE',
        height: {md:'600px', xs: '1000px'}
    },
    box8_1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: '35px',
        lineHeight: 1.2,
        color: '#222',
        textTransform: 'uppercase',
        letterSpacing: '10px',
        wordSpacing: '8px',
    },
    buttonSlide1: {
        backgroundColor: '#222',
        color: '#fff',
        padding: '10px 25px',
        borderRadius: '15px',
        "&:hover": {
            backgroundColor: '#ec1d25',
            color: 'white',
        },
        margin: '0 0 50px 0'
    },
    img8: {
        width: '400px',
        overflow: 'hidden',
        height: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius:'15px'
    },
    rasm: {
        width: '100%',
        backgroundImage: `url(${Img27})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: 'all 0.3s',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    form1: {
        display: 'flex',
        gap: '25px',
        flexDirection: 'column',
    },
    fields: {
        display: 'flex',
        flexDirection: 'row',
        gap: '25px',
        margin: '40px 0 30px 20px'
    },
    upcoming1: {
        mt: '40px'
    }
}