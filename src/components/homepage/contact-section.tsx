import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ContactForm from '../common/contact-form';
import { useDJContext } from '../../logic/state/GlobalContext';

const ContactSection: React.FC = () => {
    const { isMobile } = useDJContext();

    return (  
        <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <Typography variant={isMobile ? 'h4' : 'h2'} component="h2" sx={{ textAlign: 'center', pt: 10, pb: 5 }}>Contact Us</Typography>
                <ContactForm />
            </Box>
        </React.Fragment>
    );
}
 
export default ContactSection;