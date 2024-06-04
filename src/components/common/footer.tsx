import { Box, Divider, Link, List, ListItem, Typography } from '@mui/material';
import * as React from 'react';
import { useDJContext } from '../../logic/state/GlobalContext';

const Footer: React.FC = () => {
    const { isMobile } = useDJContext();

    return (  
        <React.Fragment>
            <Divider sx={{ my: 5 }} />
            <footer className='footer'>
                <div className='footer-content'>
                    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row',  mb: '1rem', justifyContent: 'space-between', gap: 5, mx: 5 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className='footer-section'>
                            <Link href={`/`}><img src="/disk_logo.png" alt="CD ENTERTAINMENT" width={150} /></Link>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }} className='footer-section'>
                            <Typography variant='h6'>Company</Typography>
                            <ul>
                                <Link href={`/about`}><li>About Us</li></Link>
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
                                <Link href={'tel:+14355571427'}><li>435-557-1427</li></Link>
                                <Link href={'mailto:dj@oakleydye.com'}><li>dj@oakleydye.com</li></Link>
                                <li>Hyrum, UT</li>
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