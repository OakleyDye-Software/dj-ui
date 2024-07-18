import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import * as React from 'react';
import BouncingIcon from '../common/bounce-icon';
import { useDJContext } from '../../logic/state/GlobalContext';

const HeroSection: React.FC = () => {
    const { isMobile } = useDJContext();
    const [isHeroVisible, setIsHeroVisible] = React.useState<boolean>(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsHeroVisible(true);
            const heroSection = document.querySelector('.hero-section') as HTMLElement;
            window.scrollTo({ top: heroSection.offsetTop, behavior: 'smooth' });
        }, 250);

        return () => clearTimeout(timer);
    }, []);

    return (  
        <div className={`hero-section ${isHeroVisible ? 'visible' : ''}`}>
            <Box
                sx={{
                    position: 'relative',
                    height: '100vh',
                    width: '100vw',
                    boxSizing: 'border-box',
                    backgroundImage: `url(/images/hero_image.jpg)`,
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
                        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0))',
                    }}
                />

                <Box sx={{ zIndex: 1, textAlign: 'center', mx: isMobile ? 2 : undefined }}>
                    <Typography variant={isMobile ? "h4" : "h1"} component="h1" gutterBottom>
                        Elevate your event with CD ENTERTAINMENT
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        sx={{ 
                            px: 3, 
                            py: 1.2, 
                            fontSize: isMobile ? '1rem' : '1.5rem', 
                            borderRadius: 0 
                        }}
                        onClick={() => {
                            const contactSection = document.getElementById('contact') as HTMLElement;
                            window.scrollTo({ top: contactSection.offsetTop, behavior: 'smooth' });
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
                    <Typography variant="body2" component="p">
                        Scroll down
                    </Typography>
                    <ButtonGroup variant="text" color="primary" aria-label="scroll down">
                        <Button onClick={() => {
                            const aboutSection = document.getElementById('about') as HTMLElement;
                            window.scrollTo({ top: aboutSection.offsetTop, behavior: 'smooth' });
                        }}>
                            <BouncingIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
            </Box>
        </div>
    );
}
 
export default HeroSection;