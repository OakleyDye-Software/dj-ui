import * as React from 'react';
import HeroSection from './hero';
import MenuBar from '../common/menu-bar';
import '../common/menu-bar.css';
import ServicesSection from './services';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useDJContext } from '../../logic/state/GlobalContext';
import About from './about';
import Counters from './counters';
import ContactSection from './contact-section';
import Pricing from './pricing';
import FAQ from './faq';
import Footer from '../common/footer';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {
    const { scrollY } = useScroll();
    const { currentSection, isMobile, acceptingRequests, dispatch } = useDJContext();
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        const checkMobile = () => {
            dispatch!({ type: 'SET_IS_MOBILE', isMobile: window.innerWidth <= 768 });
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    React.useEffect(() => {
        if (acceptingRequests) {
            setOpen(true);
        }
    }, [acceptingRequests]);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const heroSection = document.getElementById('hero');
        const aboutSection = document.getElementById('about');
        const serviceSection = document.getElementById('service');
        const pricingSection = document.getElementById('pricing');
        const counterSection = document.getElementById('counter');
        const contactSection = document.getElementById('contact');

        const heroSectionHeight = heroSection?.offsetHeight || 0;
        const aboutSectionHeight = aboutSection?.offsetHeight || 0;
        const serviceSectionHeight = serviceSection?.offsetHeight || 0;
        const pricingSectionHeight = pricingSection?.offsetHeight || 0;
        const counterSectionHeight = counterSection?.offsetHeight || 0;
        const contactSectionHeight = contactSection?.offsetHeight || 0;

        const heroSectionThreshold = heroSectionHeight * 0.95;
        const aboutSectionThreshold = heroSectionHeight + (aboutSectionHeight * 0.95);
        const serviceSectionThreshold = heroSectionHeight + aboutSectionHeight + (serviceSectionHeight * 0.98);
        const pricingSectionThreshold = heroSectionHeight + aboutSectionHeight + serviceSectionHeight + (pricingSectionHeight * 0.95);
        const counterSectionThreshold = heroSectionHeight + aboutSectionHeight + serviceSectionHeight + (counterSectionHeight * 0.95);
        const contactSectionThreshold = heroSectionHeight + aboutSectionHeight + serviceSectionHeight + counterSectionHeight + (contactSectionHeight * 0.95);

        if (latest < heroSectionThreshold) {
            dispatch!({ type: 'SET_CURRENT_SECTION', currentSection: 'hero' });
        } else if (latest < aboutSectionThreshold) {
            dispatch!({ type: 'SET_CURRENT_SECTION', currentSection: 'about' });
        } else if (latest < serviceSectionThreshold) {
            dispatch!({ type: 'SET_CURRENT_SECTION', currentSection: 'service' });
        } else if (latest < pricingSectionThreshold) {
            dispatch!({ type: 'SET_CURRENT_SECTION', currentSection: 'pricing' });
        } else if (latest < counterSectionThreshold) {
            dispatch!({ type: 'SET_CURRENT_SECTION', currentSection: 'counter' });
        } else if (latest < contactSectionThreshold) {
            dispatch!({ type: 'SET_CURRENT_SECTION', currentSection: 'contact' });
        }
    });

    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection={currentSection} />
            <div id="hero" className='section'><HeroSection /></div>
            <div id="about" className='section'><About /></div>
            <div id="service" className='section'><ServicesSection /></div>
            <div id="pricing" className='section'><Pricing /></div>
            <div id="counter" className='section'><Counters /></div>
            <div id="faq" className='section'><FAQ /></div>
            <div id="contact" className='section'><ContactSection /></div>
            <div id='footer' className='section'><Footer /></div>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: isMobile ? '100vw' : '80vw', bgcolor: 'background.paper', border: 0, boxShadow: 24, p: 4, outline: 'none' }}>
                    <div>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                            <Typography variant='h2'>We're Live!</Typography>
                            <Typography variant='body1'>Thanks for joining us for our event! We're currently accepting song requests, click the button below to request a song.</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Button variant='contained' onClick={() => navigate('/request')}>Request a Song</Button>
                            </Box>
                        </Box>
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    );
}
 
export default Homepage;