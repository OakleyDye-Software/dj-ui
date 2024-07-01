import { Container, Typography } from '@mui/material';
import * as React from 'react';
import MenuBar from '../common/menu-bar';
import Footer from '../common/footer';

const Testimonials: React.FC = () => {
    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth="lg" sx={{ mt: 15 }}>
                <Typography variant="h3" gutterBottom>
                    Testimonials Coming Soon!
                </Typography>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default Testimonials;