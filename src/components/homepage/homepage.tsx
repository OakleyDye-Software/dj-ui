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

const Homepage: React.FC = () => {
    const { scrollY } = useScroll();
    const { currentSection, dispatch } = useDJContext();

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
            <div id="contact" className='section'><ContactSection /></div>
        </React.Fragment>
    );
}
 
export default Homepage;