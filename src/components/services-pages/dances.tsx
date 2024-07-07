import * as React from 'react';
import MenuBar from '../common/menu-bar';
import { Box, Button, Container, Typography } from '@mui/material';
import Footer from '../common/footer';

const Dances: React.FC = () => {
    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth="lg">
                <Box my={4}>
                    <Typography variant="h3" gutterBottom>
                        Dances
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Whether it's a high school prom, a college party, or a community dance, CD Entertainment brings the energy to the dance floor. Our DJs are skilled at reading the crowd and playing the right music to keep everyone dancing all night long. We provide high-quality sound systems and lighting to create an unforgettable experience.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Our Dance Services Include:
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <ul>
                            <li>Pre-Event Consultation: We discuss your event details and musical preferences.</li>
                            <li>Custom Playlists: We tailor our music selection to fit the theme and vibe of your dance.</li>
                            <li>Professional Equipment: Top-notch sound systems and dynamic lighting effects.</li>
                            <li>Interactive DJ Performance: Our DJs engage with the crowd and keep the energy high.</li>
                            <li>Seamless Transitions: Smooth transitions between songs to keep the dance floor alive.</li>
                        </ul>
                    </Typography>
                    <Button variant="contained" color="primary" href="/contact">
                        Book Your Dance DJ
                    </Button>
                </Box>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default Dances;