import { Box } from '@mui/material';
import * as React from 'react';
import ContactForm from '../common/contact-form';

const ContactSection: React.FC = () => {
    return (  
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <ContactForm />
            </Box>
        </React.Fragment>
    );
}
 
export default ContactSection;