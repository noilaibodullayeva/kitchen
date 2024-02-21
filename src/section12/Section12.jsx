import { Email } from '@mui/icons-material'
import { Box, Button, FormControl, IconButton, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';

export default function Section12() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#EFEFEF',
            width: { md: '400px', xs: '600px' },
            padding: '40px 0',
            width: '100%',
            gap: '10px'
        }}>
            <Typography sx={styles.typoSign}>SPECIALS SIGN UP</Typography>
            <FormControl sx={{ m: 1, width: '250px', borderRadius: '10px' }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-password"
                    type='text'
                    placeholder='Email Adrress'
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                <Email />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Button sx={{
                background: '#111111',
                borderRadius: '10px',
                "&:hover": {
                    background: '#ec1d25'
                },
                color: '#fff',
                width: '160px',
                height: '40px',
                margin: '10px',
                fontFamily: 'Montserrat',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: 1.1,
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '1px',
            }} href='/'>SIGN-UP</Button>
        </Box>
    )
}

const styles = {
    typoSign: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: '22px',
        color: '#333333',
        textTransform: 'uppercase',
        letterSpacing: '3px',
    }
}
