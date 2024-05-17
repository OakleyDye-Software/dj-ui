import * as React from 'react';
import HeroSection from './hero/hero';
import MenuBar from '../common/menu/menu-bar';
import '../common/menu/menu-bar.css';
import ServicesSection from './services/services';
import { useMotionValueEvent, useScroll } from 'framer-motion';

const Homepage: React.FC = () => {
    const { scrollY } = useScroll();
    const [currentSection, setCurrentSection] = React.useState<string>('hero');

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const heroSection = document.getElementById('hero');
        const serviceSection = document.getElementById('service');

        const heroSectionHeight = heroSection?.offsetHeight || 0;
        const serviceSectionHeight = serviceSection?.offsetHeight || 0;

        const heroSectionThreshold = heroSectionHeight * 0.95;
        const serviceSectionThreshold = heroSectionHeight + (serviceSectionHeight * 0.95);

        if (latest < heroSectionThreshold) {
            setCurrentSection('hero');
        } else if (latest < serviceSectionThreshold) {
            setCurrentSection('service');
        }
    });

    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection={currentSection} />
            <div id="hero" className='section'><HeroSection /></div>
            <div id="service" className='section'><ServicesSection /></div>
        </React.Fragment>
    );
}
 
export default Homepage;