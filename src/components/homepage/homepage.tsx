import * as React from 'react';
import HeroSection from './hero-section/hero';
import MenuBar from '../common/menu-bar';
import '../common/menu-bar.css';
import ServicesSection from './services-section/services';

const Homepage: React.FC = () => {
    const [currentSection, setCurrentSection] = React.useState<string>('hero');

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCurrentSection(entry.target.id);
                    console.log(entry.target.id);
                }
            });
        },
        { threshold: 0.7 });
        const sections = document.querySelectorAll('section');
        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection={currentSection} />
            <div id="hero" className='section'><HeroSection /></div>
            <div id="service" className='section'><ServicesSection /></div>
        </React.Fragment>
    );
}
 
export default Homepage;