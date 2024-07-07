import * as React from 'react';
import MenuBar from '../common/menu-bar';
import Footer from '../common/footer';
import { Box, Button, Container, Typography } from '@mui/material';

const GearRental: React.FC = () => {
    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth="lg">
                <Box my={4}>
                    <Typography variant="h3" gutterBottom>
                        Gear Rental
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Need equipment for your event? CD Entertainment offers a range of gear rental options, including sound systems, lighting, and more. Our high-quality, well-maintained equipment will help you create a professional and polished event, whether you need a full setup or just a few pieces.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Our Gear Rental Services Include:
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <ul>
                            <li>Sound Systems: High-quality audio equipment for clear and powerful sound.</li>
                            <li>Lighting: Dynamic lighting options to enhance your event's atmosphere.</li>
                            <li>Microphones: Wired and wireless microphones for speeches and performances.</li>
                            <li>Technical Support: Assistance with setup and troubleshooting.</li>
                            <li>Custom Packages: Tailored rental packages to suit your specific needs.</li>
                        </ul>
                    </Typography>
                    <Button variant="contained" color="primary" href="/contact">
                        Rent Equipment
                    </Button>
                </Box>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default GearRental;