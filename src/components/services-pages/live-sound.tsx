import * as React from 'react';
import MenuBar from '../common/menu-bar';
import Container from '../common/container';
import { Typography } from '@mui/material';
import Footer from '../common/footer';

const LiveSound: React.FC = () => {
    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container>
                <Typography variant="h1" component="h1" color="primary" sx={{ textAlign: 'center' }}>
                    Live Sound
                </Typography>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default LiveSound;