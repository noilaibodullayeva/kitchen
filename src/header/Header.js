import Logo from "../img/logo.png.webp"
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { Facebook, Twitter } from '@mui/icons-material';
import { Box, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Drawercomponent from './Drawer';


const Pages = ["HOME", "MENU", "RESERVATION", "GALLERY", "ABOUT", "BLOG", "CONTACT"]

export default function Header() {

    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch)

    return (
        <Box sx={styles.boxHeader}>
            <Box sx={styles.boxHeaderLogo}>
                <img src={Logo} alt="" />
            </Box>
            <Box sx={styles.boxHeaderMenuList}>
                {
                    isMatch ? (
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
                            <Box sx={styles.boxHeaderIcons}>
                                <AllInclusiveIcon sx={{ color: '#fff' }} />
                                <Facebook sx={{ color: '#fff' }} />
                                <Twitter sx={{ color: '#fff' }} />
                            </Box>
                            <Drawercomponent />
                        </Box>
                    ) : (
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', gap: '150px' }}>
                            <Tabs
                                sx={{ marginLeft: 'auto', color: 'white',  }}
                                textColor='#fff'
                                value={value}
                                onChange={(e, value) => setValue(value)}
                                >
                                {
                                    Pages.map((page, index) => (
                                        <Tab key={index} label={page} sx={{  color: 'white', "&:hover": {color: '#ec1d25'} }} />
                                    ))
                                }
                                {/* <Tab label='Products' />
                                    <Tab label='Services' />
                                    <Tab label='ContactUs' />
                                    <Tab label='AboutUs' /> */}
                            </Tabs>
                            <Box sx={styles.boxHeaderIcons}>
                                <AllInclusiveIcon sx={styles.iconn} />
                                <Facebook sx={styles.iconn} />
                                <Twitter sx={styles.iconn} />
                            </Box>
                        </Box>
                    )
                }
            </Box>

        </Box>
    )
}

const styles = {
    boxHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: { md: '10px 90px', xs: '10px 20px' },
        backgroundColor: '#222222'
    },
    boxHeaderIcons: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        alignItems: 'baseline'
    },
    iconn: {
        color: '#fff',
        "&:hover": {
            color: '#ec1d25'
        }
    }
}
