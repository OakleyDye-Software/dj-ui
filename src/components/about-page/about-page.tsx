import { Typography } from '@mui/material';
import * as React from 'react';
import MenuBar from '../common/menu-bar';
import Footer from '../common/footer';
import Container from '../common/container';

const AboutPage: React.FC = () => {
    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container>
                <Typography variant="h1" component="h1" color="primary" sx={{ textAlign: 'center' }}>
                    About Page
                </Typography>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default AboutPage;