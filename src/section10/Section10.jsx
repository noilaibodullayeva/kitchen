import { Box } from '@mui/material'
import React from 'react'
import ImportBg from "../img/bg-cover-video-02.jpg.webp"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import video from "../../src/img/video.mp4"
import { PlayCircle } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '10%',
    left: '10%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    heigth: '400px',
    p: 10,
};

export default function Section10() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${ImportBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: '600px',
            backgroundAttachment: 'fixed'

        }}>
            <Box>
                <Typography sx={styles.discover22}>Customers Say</Typography>
                <Typography sx={styles.menuu22}>OUR MENU</Typography>
            </Box>
            <Box>
                <div>
                    <Button onClick={handleOpen}>
                        <PlayCircle sx={{
                            color: '#fff',
                            width: '70px',
                            height: '70px',
                            "&:hover": {
                                color: '#d61c22'
                            },
                            mt: '10px',
                            alignSelf: 'center'
                        }} />
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <video src={video} autoPlay="true" />
                        </Box>
                    </Modal>
                </div>
            </Box>
        </Box>
    )
}

const styles = {
    discover22: {
        fontFamily: 'Courgette',
        fontSize: '30px',
        lineHeight: 1.2,
        color: '#d61c22',
        textAlign: 'center'
    },
    menuu22: {
        fontFamily: 'Poppins',
        fontWeight: 700,
        fontSize: '50px',
        lineHeight: 1.2,
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '10px',
        wordSpacing: '8px',
    },
}
