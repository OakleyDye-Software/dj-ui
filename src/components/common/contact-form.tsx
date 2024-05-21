
import * as React from 'react';
import { TextField, Button } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDJContext } from '../../logic/state/GlobalContext';

const ContactForm: React.FC = () => {
    const { isMobile } = useDJContext();
    
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit} style={{ margin: '1rem', padding: '1rem', width: '75%' }}>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                    <TextField label="First Name" variant="outlined" fullWidth sx={{ mr: '1rem', mb: '1rem' }} />
                    <TextField label="Last Name" variant="outlined" fullWidth sx={{ mb: '1rem' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                    <TextField label="Email" variant="outlined" fullWidth sx={{ mr: '1rem', mb: '1rem' }} />
                    <TextField label="Phone Number" variant="outlined" fullWidth sx={{ mb: '1rem' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                    <div style={{ flex: 1, marginRight: isMobile ? undefined : '0.5rem', marginBottom: '1rem' }}>
                        <TextField label="Venue Location" variant="outlined" fullWidth />
                    </div>
                    <div style={{ flex: 1, marginLeft: isMobile ? undefined : '0.5rem', marginBottom: '1rem' }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Date of Event" sx={{ width: '100%' }} />
                        </LocalizationProvider>
                    </div>
                </div>
                <TextField label="Tell me about your event" variant="outlined" fullWidth multiline rows={4} sx={{ mb: '1rem' }} />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type="submit" variant="contained" color="primary" style={{ width: isMobile ? '100%' : undefined }}>Submit</Button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default ContactForm;