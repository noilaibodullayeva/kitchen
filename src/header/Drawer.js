import { Box, Button, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React, { useState } from "react";
import { Drawer } from "@mui/material";
import { Menu } from "@mui/icons-material";
   
import "./header.css"

const Pages = ["Services", "Products", "ContactUs", "AboutUs", "LogIn", "LogOut"]

function Drawercomponent() {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <React.Fragment>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {
                        Pages.map((page, index) => (
                            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                                <ListItemIcon>
                                    <ListItemText sx={{alignItems:'center'}}>
                                        {page}
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                    <Button sx={styles.button} >Reservation</Button>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography sx={{color:'#777', fontSize:'25px'}}>Gallary</Typography>
                        <Box sx={styles.galleryDraw}>
                            <img src={Img1} alt="img1" className="imgG" />
                            <img src={Img2} alt="img1" className="imgG" />
                            <img src={Img3} alt="img1" className="imgG" />
                            <img src={Img4} alt="img1" className="imgG" />
                            <img src={Img5} alt="img1" className="imgG" />
                            <img src={Img6} alt="img1" className="imgG" />
                            <img src={Img7} alt="img1" className="imgG" />
                            <img src={Img8} alt="img1" className="imgG" />
                            <img src={Img9} alt="img1" className="imgG" />
                        </Box>
                    </Box>

                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', ml: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <Menu />
            </IconButton>
        </React.Fragment>
    )
}

export default Drawercomponent

const styles = {
    button: {
        width: '150px',
        height: '40px',
        color: 'white',
        backgroundColor: '#222',
        borderRadius: '10px',
        "&:hover": {
            backgroundColor: '#ec1d25'
        },
        margin: '20px'
    },
    galleryDraw: {
        display: 'grid',
        gridTemplateColumns: ' auto auto auto',
        gap: '10px',
        margin: '10px 20px'
    }
}