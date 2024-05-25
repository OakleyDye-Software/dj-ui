import { Box, Divider, Link, Typography } from '@mui/material';
import * as React from 'react';

const Footer: React.FC = () => {
    return (  
        <React.Fragment>
            <Divider sx={{ my: 5 }} />
            <footer className='footer'>
                <div className='footer-content'>
                    <Box sx={{ display: 'flex', mb: '1rem', justifyContent: 'space-between', gap: 5, mx: 5 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className='footer-section'>
                            <img src="/logo_white.png" alt="CD ENTERTAINMENT" width={150} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }} className='footer-section'>
                            <Typography variant='h6'>Company</Typography>
                            <ul>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Portfolio</li>
                                <li>Testimonials</li>
                                <li>Contact Us</li>
                            </ul>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }} className='footer-section'>
                            <Typography variant='h6'>Services</Typography>
                            <ul>
                                <li>Weddings</li>
                                <li>Corporate Events</li>
                                <li>Private Parties</li>
                                <li>Concerts</li>
                                <li>Special Events</li>
                            </ul>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }} className='footer-section'>
                            <Typography variant='h6'>Legal</Typography>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Cookie Policy</li>
                                <li>Disclaimer</li>
                            </ul>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }} className='footer-section'>
                            <Typography variant='h6'>Contact Us</Typography>
                            <ul>
                                <li>435-557-1427</li>
                                <li>info@cdentertainment.events</li>
                                <li>572 S 690 E Hyrum, UT 84319</li>
                            </ul>
                        </Box>
                    </Box>
                </div>
                <div className='footer-bottom' style={{ marginTop: 50, marginBottom: 20, marginLeft: 50 }}>
                    <p>&copy; 2024 CD Entertainment. All Rights Reserved. Website by <Link href='https://oakleydye.com'>Oakley Dye Software &amp; Design.</Link></p>
                </div>
            </footer>
        </React.Fragment>
    );
}
 
export default Footer;