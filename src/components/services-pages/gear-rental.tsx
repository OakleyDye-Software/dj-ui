import * as React from 'react';
import MenuBar from '../common/menu-bar';
import Footer from '../common/footer';
import Container from '../common/container';
import { Typography } from '@mui/material';

const GearRental: React.FC = () => {
    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container>
                <Typography variant="h1" component="h1" color="primary" sx={{ textAlign: 'center' }}>
                    Gear Rental
                </Typography>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default GearRental;