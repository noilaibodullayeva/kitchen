import { Box, Typography } from '@mui/material'
import React from 'react'
import { AllInclusive, Facebook, Twitter } from '@mui/icons-material';

export default function Footer() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '30px 100px',
            backgroundColor: '#111111'
        }}>
            <Box>
                <AllInclusive sx={{
                    color: '#fff',
                    fontSize: '20px',
                    ml: '15px'
                }} />
                <Facebook sx={{
                    color: '#fff',
                    fontSize: '20px',
                    ml: '15px'
                }} />
                <Twitter sx={{
                    color: '#fff',
                    fontSize: '20px',
                    ml: '15px'
                }} />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Typography sx={{
                    fontSize: '14px',
                    color: '#999',
                    lineHeight: 1.7,
                    pr: '20px',
                    display: 'flex',
                flexDirection: 'row'
                }}>@2017 Colorib.
                 <Typography href="/" >Get The Theme</Typography>
                </Typography>
            </Box>
        </Box>
    )
}
