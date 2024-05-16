import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import hero from '../../../images/hero_image.jpg';
import BouncingIcon from '../../common/bounce-icon';

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

            <Box sx={{ zIndex: 1, textAlign: 'center' }}>
                <Typography variant="h1" component="h1" gutterBottom>
                    Elevate your event with CD ENTERTAINMENT
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ 
                        px: 3, 
                        py: 1.2, 
                        fontSize: '1.5rem', 
                        borderRadius: 0 
                        }}
                >
                    Book Now
                </Button>
            </Box>

            <Box 
                sx={{ 
                    position: 'absolute', 
                    bottom: '1rem', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    textAlign: 'center' 
                }}
            >
                <Typography variant="body1" component="p">
                    Scroll down
                </Typography>
                <ButtonGroup variant="text" color="primary" aria-label="scroll down">
                    <Button>
                        <BouncingIcon />
                    </Button>
                </ButtonGroup>
            </Box>
        </Box>
    );
}
 
export default HeroSection;