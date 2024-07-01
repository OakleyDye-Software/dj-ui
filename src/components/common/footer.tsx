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
                                <Link sx={{ color: 'white' }} href={`/about`}><li>About Us</li></Link>
                                <Link sx={{ color: 'white' }} href={`/services`}><li>Services</li></Link>
                                <Link sx={{ color: 'white' }} href={`/portfolio`}><li>Portfolio</li></Link>
                                <Link sx={{ color: 'white' }} href={`/testimonials`}><li>Testimonials</li></Link>
                                <Link sx={{ color: 'white' }} href={`/contact`}><li>Contact Us</li></Link>
                            </ul>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }} className='footer-section'>
                            <Typography variant='h6'>Services</Typography>
                            <ul>
                                <Link sx={{ color: 'white' }} href={`/services/weddings`}><li>Weddings</li></Link>
                                <Link sx={{ color: 'white' }} href={`/services/dances`}><li>Dances</li></Link>
                                <Link sx={{ color: 'white' }} href={`/services/parties`}><li>Parties</li></Link>
                                <Link sx={{ color: 'white' }} href={`/services/corporate-events`}><li>Corporate Events</li></Link>
                                <Link sx={{ color: 'white' }} href={`/services/live-sound`}><li>Live Sound</li></Link>
                                <Link sx={{ color: 'white' }} href={`/services/gear-rental`}><li>Gear Rental</li></Link>
                            </ul>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }} className='footer-section'>
                            <Typography variant='h6'>Legal</Typography>
                            <ul>
                                <Link sx={{ color: 'white' }} href={`/legal/privacy-policy`}><li>Privacy Policy</li></Link>
                                <Link sx={{ color: 'white' }} href={`/legal/terms-and-conditions`}><li>Terms & Conditions</li></Link>
                                <Link sx={{ color: 'white' }} href={`/legal/cookie-policy`}><li>Cookie Policy</li></Link>
                                <Link sx={{ color: 'white' }} href={`/legal/disclaimer`}><li>Disclaimer</li></Link>
                            </ul>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }} className='footer-section'>
                            <Typography variant='h6'>Contact Us</Typography>
                            <ul>
                                <Link sx={{ color: 'white' }} href={'tel:+14355571427'}><li>435-557-1427</li></Link>
                                <Link sx={{ color: 'white' }} href={'mailto:dj@oakleydye.com'}><li>dj@oakleydye.com</li></Link>
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