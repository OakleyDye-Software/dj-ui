import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import * as React from 'react';
import hero from '../../images/hero_image.jpg';
import NavBar from './nav-bar';

const HeroSection: React.FC = () => {
    return (  
        <Box 
            sx={{ 
                h: '100vh', 
                w: '100vw', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '100vh',
                background: 'black'
            }}
        >
            <NavBar />
            <Box
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    minHeight: '80vh',
                    width: 'calc(100vw - 50px)',
                    mx: 10,
                    px: 10,
                    background: 'white',
                    borderRadius: '20px'
                }}
            >
                <Box>
                    <Typography variant='h1'>DJ Services</Typography>
                </Box>
                <Box>
                    <Typography variant='h4'>Book today!</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <ButtonGroup>
                        <Button variant='outlined'>Register</Button>
                        <Button variant='contained' sx={{ color: 'primary' }}>Contact</Button>
                    </ButtonGroup>
                </Box>
            </Box>
        </Box>
    );
}
 
export default HeroSection;