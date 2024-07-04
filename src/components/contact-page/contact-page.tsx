import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { Container, Typography, Grid, Card, CardContent, TextField, Button, Box, Link } from '@mui/material';
import * as React from 'react';
import ContactForm from '../common/contact-form';
import MenuBar from '../common/menu-bar';
import Footer from '../common/footer';

const ContactPage: React.FC = () => {
    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth="lg" sx={{ mt: 15 }}>
                <Box my={4}>
                    <Typography variant="h3" gutterBottom>
                        Contact Us
                    </Typography>

                    <Grid container spacing={4}>
                        {/* Contact Form */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>
                            Get in Touch
                            </Typography>
                            <Card>
                                <CardContent>
                                    <ContactForm setWidth={false} />
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Contact Information */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>
                                Contact Information
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <strong>Email:</strong>oakley@cdentertainment.co
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <strong>Phone:</strong> (435) 557-1427
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <strong>Address:</strong> Hyrum, UT, USA
                            </Typography>

                            {/* Business Hours */}
                            <Typography variant="h5" gutterBottom>
                                Business Hours
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Monday - Friday: 9:00 AM - 6:00 PM
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Saturday: 10:00 AM - 4:00 PM
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Sunday: Closed
                            </Typography>

                            {/* Social Media Links */}
                            <Typography variant="h5" gutterBottom>
                                Follow Us
                            </Typography>
                            <Box>
                                <Link href="https://facebook.com" target="_blank" rel="noopener">
                                    <Facebook fontSize="large" />
                                </Link>
                                <Link href="https://twitter.com" target="_blank" rel="noopener">
                                    <Twitter fontSize="large" style={{ marginLeft: '10px' }} />
                                </Link>
                                <Link href="https://instagram.com" target="_blank" rel="noopener">
                                    <Instagram fontSize="large" style={{ marginLeft: '10px' }} />
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Newsletter Signup */}
                    <Box my={4}>
                        <Typography variant="h5" gutterBottom>
                            Stay Updated
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Sign up for our newsletter to receive the latest news and updates about our services.
                        </Typography>
                        <form>
                            <TextField fullWidth label="Email" margin="normal" />
                            <Box mt={2}>
                                <Button variant="contained" color="primary" type="submit">
                                    Subscribe
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default ContactPage;