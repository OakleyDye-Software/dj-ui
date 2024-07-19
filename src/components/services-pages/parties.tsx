import * as React from 'react';
import MenuBar from '../common/menu-bar';
import { Box, Button, Container, Typography } from '@mui/material';
import Footer from '../common/footer';

const Parties: React.FC = () => {
    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth="lg" sx={{ mt: 12 }}>
                <Box my={4}>
                    <Typography variant="h3" gutterBottom>
                        Private Parties
                    </Typography>
                    <Typography variant="body1" paragraph>
                        From birthdays to anniversaries, CD Entertainment offers tailored DJ services for all types of private parties. We’ll work with you to create a personalized playlist that reflects your taste and keeps your guests entertained. Our professional setup ensures that your party runs smoothly, so you can focus on having fun.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Our Private Party Services Include:
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <ul>
                            <li>Consultation: We meet with you to discuss your event and music preferences.</li>
                            <li>Custom Playlists: Personalized music selections tailored to your event.</li>
                            <li>Professional Equipment: High-quality sound systems and lighting to enhance your party.</li>
                            <li>DJ Performance: Engaging and interactive DJ performance to keep your guests entertained.</li>
                            <li>Special Requests: We accommodate special song requests to make your event unique.</li>
                        </ul>
                    </Typography>
                    <Button variant="contained" color="primary" href="/contact">
                    Book Your Private Party DJ
                    </Button>
                </Box>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default Parties;