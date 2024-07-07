import * as React from 'react';
import MenuBar from '../common/menu-bar';
import { Box, Button, Container, Typography } from '@mui/material';
import Footer from '../common/footer';

const Weddings: React.FC = () => {
    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth="lg" sx={{ mt: 12 }}>
                <Box my={4}>
                    <Typography variant="h3" gutterBottom>
                        Weddings
                    </Typography>
                    <Typography variant="body1" paragraph>
                        At CD Entertainment, we understand that your wedding day is one of the most important days of your life. Our experienced DJs work closely with you to create the perfect soundtrack for your special day. From the ceremony to the reception, we provide customized playlists, professional sound equipment, and seamless transitions to ensure that every moment is memorable.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Our Wedding Services Include:
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <ul>
                            <li>Pre-Wedding Consultation: We meet with you to understand your musical preferences and event timeline.</li>
                            <li>Custom Playlists: We curate playlists that reflect your taste, including your favorite songs and genres.</li>
                            <li>Ceremony Music: From the processional to the recessional, we provide the perfect musical accompaniment.</li>
                            <li>Reception Entertainment: We keep the dance floor packed with music that gets everyone moving.</li>
                            <li>Professional Equipment: High-quality sound systems and lighting to create an unforgettable atmosphere.</li>
                            <li>MC Services: We handle announcements and keep your event running smoothly.</li>
                        </ul>
                    </Typography>
                    <Button variant="contained" color="primary" href="/contact">
                        Book Your Wedding DJ
                    </Button>
                </Box>
                </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default Weddings;