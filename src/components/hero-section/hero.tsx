import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import * as React from 'react';
import hero from '../../images/hero_image.jpg';
import NavBar from './nav-bar';

const HeroSection: React.FC = () => {
    return (  
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }}
            />
            <Box sx={{ zIndex: 1, ml: 10, textAlign: 'left' }}>
                <Typography variant="h1" component="h1" gutterBottom>
                    Elevate your event with DJ OXLEY
                </Typography>
                <Typography variant="h4" component="h2" gutterBottom>
                    Discover the amazing features of our website
                </Typography>
                <ButtonGroup>
                    <Button variant="contained" color="primary">
                        Get Started
                    </Button>
                    <Button variant="outlined" color="primary">
                        Learn More
                    </Button>
                </ButtonGroup>
            </Box>
            <NavBar />
        </Box>
    );
}
 
export default HeroSection;