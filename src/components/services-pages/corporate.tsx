import * as React from 'react';
import MenuBar from '../common/menu-bar';
import { Box, Button, Container, Typography } from '@mui/material';
import Footer from '../common/footer';

const Corporate: React.FC = () => {
    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth="lg">
                <Box my={4}>
                    <Typography variant="h3" gutterBottom>
                        Corporate Events
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Make your corporate event stand out with CD Entertainment. Whether you're planning a holiday party, a product launch, or a company picnic, our DJs will provide the perfect musical backdrop. We offer professional sound systems and lighting to create an engaging atmosphere that reflects your company's brand and style.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Our Corporate Event Services Include:
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <ul>
                            <li>Consultation: We discuss your event goals and musical preferences.</li>
                            <li>Custom Playlists: Music selections that align with your event theme and company culture.</li>
                            <li>Professional Equipment: High-quality sound systems and lighting to enhance the atmosphere.</li>
                            <li>MC Services: Professional announcements and event coordination.</li>
                            <li>Flexible Setup: We adapt to various event formats and venues.</li>
                        </ul>
                    </Typography>
                    <Button variant="contained" color="primary" href="/contact">
                        Book Your Corporate Event DJ
                    </Button>
                </Box>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default Corporate;