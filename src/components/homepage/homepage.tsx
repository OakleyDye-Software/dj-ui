import * as React from 'react';
import HeroSection from './hero';
import MenuBar from '../common/menu-bar';
import '../common/menu-bar.css';
import ServicesSection from './services';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useDJContext } from '../../logic/state/GlobalContext';
import About from './about';
import Counters from './counters';

const Homepage: React.FC = () => {
    const { scrollY } = useScroll();
    const { currentSection, dispatch } = useDJContext();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const heroSection = document.getElementById('hero');
        const aboutSection = document.getElementById('about');
        const serviceSection = document.getElementById('service');

        const heroSectionHeight = heroSection?.offsetHeight || 0;
        const aboutSectionHeight = aboutSection?.offsetHeight || 0;
        const serviceSectionHeight = serviceSection?.offsetHeight || 0;

        const heroSectionThreshold = heroSectionHeight * 0.95;
        const aboutSectionThreshold = heroSectionHeight + (aboutSectionHeight * 0.95);
        const serviceSectionThreshold = heroSectionHeight + aboutSectionHeight + (serviceSectionHeight * 0.95);

        if (latest < heroSectionThreshold) {
            dispatch!({ type: 'SET_CURRENT_SECTION', currentSection: 'hero' });
        } else if (latest < aboutSectionThreshold) {
            dispatch!({ type: 'SET_CURRENT_SECTION', currentSection: 'about' });
        } else if (latest < serviceSectionThreshold) {
            dispatch!({ type: 'SET_CURRENT_SECTION', currentSection: 'service' });
        }
    });

    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection={currentSection} />
            <div id="hero" className='section'><HeroSection /></div>
            <div id="about" className='section'><About /></div>
            <div id="service" className='section'><ServicesSection /></div>
            <div id="counter" className='section'><Counters /></div>
        </React.Fragment>
    );
}
 
export default Homepage;