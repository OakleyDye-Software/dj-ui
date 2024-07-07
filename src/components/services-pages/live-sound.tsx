import * as React from 'react';
import MenuBar from '../common/menu-bar';
import { Box, Button, Container, Typography } from '@mui/material';
import Footer from '../common/footer';

const LiveSound: React.FC = () => {
    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth="lg">
                <Box my={4}>
                    <Typography variant="h3" gutterBottom>
                        Live Sound
                    </Typography>
                    <Typography variant="body1" paragraph>
                        In addition to our DJ services, CD Entertainment specializes in live sound engineering. Our expertise ensures that any live performance or speech is heard clearly and professionally. We provide top-of-the-line sound equipment and technical support for concerts, conferences, and other events.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Our Live Sound Services Include:
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <ul>
                            <li>Pre-Event Consultation: We discuss your event needs and technical requirements.</li>
                            <li>Sound System Setup: Professional-grade sound equipment tailored to your venue.</li>
                            <li>Live Sound Engineering: Expert sound management to ensure optimal audio quality.</li>
                            <li>Technical Support: On-site support throughout the event to handle any issues.</li>
                            <li>Custom Solutions: Tailored sound solutions for concerts, conferences, and more.</li>
                        </ul>
                    </Typography>
                    <Button variant="contained" color="primary" href="/contact">
                        Book Your Live Sound Service
                    </Button>
                </Box>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default LiveSound;