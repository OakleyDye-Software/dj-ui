
import * as React from 'react';
import { TextField, Button, MenuItem } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDJContext } from '../../logic/state/GlobalContext';
import eventService from '../../services/eventService';
import { IContactFormSubmission } from '../../interfaces/IContactFormSubmission';
import dayjs from 'dayjs';
import { useState } from 'react';
import contactService from '../../services/contactService';
import notify from '../common/snackbarConfig';

interface ContactFormProps {
    setWidth: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({ setWidth }) => {
    const { isMobile, eventTypes, dispatch } = useDJContext();
    const [eventDate, setEventDate] = React.useState<Date | null>(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [eventType, setEventType] = useState<number | null>(null);
    const [location, setLocation] = useState("");
    const [message, setMessage] = useState("");

    React.useEffect(() => {
        const getEventTypes = async () => {
            await eventService.getEventTypes().then((data) => {
                dispatch!({ type: 'SET_EVENT_TYPES', eventTypes: data });
            });
        };

        if (eventTypes.length === 0) {
            getEventTypes();
        }
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const submission: IContactFormSubmission = {
            firstName,
            lastName,
            email,
            phoneNumber: phone,
            eventTypeId: eventType ? eventType : 0,
            venueLocation: location,
            dateOfEvent: eventDate ? dayjs(eventDate).format('YYYY-MM-DD') : '',
            eventDescription: message
        };

        (async () => {
            await contactService.sendContactFormSubmissionAsync(submission).then((response) => {
            if (response) {
                notify.success('Your message has been sent successfully!');
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setEventType(null);
                setLocation("");
                setEventDate(null);
                setMessage("");
            } else {
                notify.error('There was an error sending your message. Please try again later.');
            }
        });
        })();
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit} style={{ margin: '1rem', padding: '1rem', width: setWidth ? '75%' : undefined }}>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                    <TextField 
                        label="First Name" 
                        id='firstName' 
                        variant="outlined" 
                        fullWidth 
                        required
                        sx={{ mr: '1rem', mb: '1rem' }} 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField 
                        label="Last Name" 
                        id='lastName' 
                        variant="outlined" 
                        fullWidth 
                        required
                        sx={{ mb: '1rem' }} 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                    <TextField 
                        label="Email" 
                        id='email' 
                        variant="outlined" 
                        fullWidth 
                        required
                        sx={{ mr: '1rem', mb: '1rem' }} 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField 
                        label="Phone Number" 
                        id='phone' 
                        variant="outlined" 
                        fullWidth 
                        sx={{ mb: '1rem' }} 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <TextField 
                    select 
                    label="Event Type" 
                    id='eventType' 
                    variant="outlined" 
                    fullWidth 
                    required
                    sx={{ mb: '1rem' }}
                    value={eventType}
                    onChange={(e) => setEventType(Number(e.target.value))}
                >
                    {eventTypes.map((type) => (
                        <MenuItem key={type.id} value={type.id}>
                            {type.name}
                        </MenuItem>
                    ))}
                </TextField>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                    <div style={{ flex: 1, marginRight: isMobile ? undefined : '0.5rem', marginBottom: '1rem' }}>
                        <TextField 
                            label="Venue Location" 
                            id='location' 
                            variant="outlined" 
                            fullWidth 
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div style={{ flex: 1, marginLeft: isMobile ? undefined : '0.5rem', marginBottom: '1rem' }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker 
                                label="Date of Event" 
                                value={eventDate ? dayjs(eventDate) : undefined} 
                                onChange={(date) => setEventDate(date ? date?.toDate() : null)} 
                                sx={{ width: '100%' }} 
                            />
                        </LocalizationProvider>
                    </div>
                </div>
                <TextField 
                    label="Tell me about your event" 
                    id='message' 
                    variant="outlined" 
                    fullWidth 
                    required
                    multiline 
                    rows={4} 
                    sx={{ mb: '1rem' }} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type="submit" variant="contained" color="primary" sx={{ width: isMobile ? '100%' : undefined, borderRadius: 0 }}>Submit</Button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default ContactForm;