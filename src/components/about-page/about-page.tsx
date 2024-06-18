import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import MenuBar from '../common/menu-bar';
import Footer from '../common/footer';
import ContactForm from '../common/contact-form';

const AboutPage: React.FC = () => {
    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth="lg" sx={{ mt: 15 }}>
                <Box my={4}>
                    <Typography variant="h3" gutterBottom>
                        Welcome to CD Entertainment
                    </Typography>
                    <Typography variant="body1" paragraph>
                        At CD Entertainment, we are passionate about creating unforgettable experiences through music. With over eight years of experience in the DJ industry, we have built a reputation for delivering top-notch entertainment for a wide range of events, including weddings, dances, private parties, and corporate functions.
                    </Typography>

                    <Box my={4}>
                        <Card>
                            <CardMedia
                            component="img"
                            height="300"
                            image="./images/about_image1.jpg"
                            alt="DJ Event"
                            />
                        </Card>
                    </Box>

                    <Typography variant="h4" gutterBottom>
                        Our Story
                    </Typography>
                    <Typography variant="body1" paragraph>
                        CD Entertainment was founded with a simple mission: to provide exceptional DJ services that make every event special. Our founder has been immersed in the world of DJing for nearly a decade, honing skills and mastering the art of live sound and audio engineering. This unique blend of expertise ensures that every event we handle sounds perfect, regardless of the venue size or acoustics.
                    </Typography>

                    <Typography variant="h4" gutterBottom>
                        Why Choose Us?
                    </Typography>
                    <Typography variant="body1" paragraph>
                        What sets CD Entertainment apart is our commitment to excellence and our personalized approach to each event. We understand that no two events are the same, and we take the time to get to know our clients, understand their vision, and tailor our services to meet their specific needs. Here’s what you can expect when you choose us:
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Expertise in Live Sound and Audio Engineering</Typography>
                            <Typography variant="body1" paragraph>
                                Our extensive experience in live sound and audio engineering allows us to provide impeccable sound quality for every event. From crystal-clear speeches to perfectly balanced music, we ensure that every detail is heard with clarity and precision.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Curated Playlists</Typography>
                            <Typography variant="body1" paragraph>
                                Music is the heart of any great event, and we pride ourselves on staying up-to-date with the latest trends and timeless classics. We curate playlists that reflect the unique vibe of your event, ensuring that the dance floor is always packed and guests are having a great time.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Professionalism and Reliability</Typography>
                            <Typography variant="body1" paragraph>
                                We take our role in your event seriously. From our punctual arrival to our professional demeanor, we are dedicated to providing a seamless and stress-free experience. You can count on us to handle every aspect of the music and sound, so you can focus on enjoying your event.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Customizable Packages</Typography>
                            <Typography variant="body1" paragraph>
                                Every event is unique, and so are our packages. We offer three customizable packages that can be tailored to fit your specific needs and budget. Whether you need a DJ for a few hours or a full day, we will work with you to create the perfect package.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Box my={4}>
                        <Card>
                            <CardMedia
                            component="img"
                            height="300"
                            image="./images/about_image2.jpg"
                            alt="DJ Equipment"
                            />
                        </Card>
                    </Box>

                    <Typography variant="h4" gutterBottom>
                        Our Services
                    </Typography>
                    <Typography variant="body1" paragraph>
                        At CD Entertainment, we offer a variety of services to cater to all your event needs:
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant="body1">Weddings: Your wedding day is one of the most important days of your life, and we are here to make it unforgettable. From the ceremony to the reception, we provide the perfect soundtrack to celebrate your love story.</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">Dances: Whether it's a school dance, prom, or other social gathering, we keep the energy high and the dance floor moving with a mix of the latest hits and classic favorites.</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">Private Parties: Celebrating a birthday, anniversary, or other special occasion? We’ll bring the party to life with music that matches the mood and keeps everyone dancing.</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">Corporate Events: From holiday parties to product launches, we provide professional DJ services that set the right tone for your business events.</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">Live Sound: Our expertise in live sound engineering ensures that your concerts, shows, and live performances sound amazing. We handle all the technical details so you can focus on performing.</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">Gear Rental: Need high-quality audio equipment for your event? We offer a range of gear rentals, including speakers, mixers, and microphones, to ensure your event sounds great.</Typography>
                        </li>
                    </ul>

                    <Typography variant="h4" gutterBottom>
                        Meet the DJ
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Hi, I'm Oakley, the founder and lead DJ at CD Entertainment. Music has always been my passion, and I’ve spent the last eight years transforming that passion into a career. My journey in the DJ industry started with small gigs, but my commitment to providing high-quality sound and a personalized music experience quickly set me apart. I specialize in live sound and audio engineering, ensuring that every event sounds perfect.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        My favorite genres include country, classic rock, hip-hop, and pop, but I have a deep appreciation for all types of music. I believe that the right playlist can elevate any event, and I work closely with my clients to create the perfect soundtrack for their special occasions. When I'm not DJing, you can find me boating, spending time with my family, or working my day job as a software engineer.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        I look forward to working with you and making your event truly memorable.
                    </Typography>

                    <Box my={4}>
                        <Card>
                            <CardMedia
                            component="img"
                            height="300"
                            image="./images/about_image3.jpg"
                            alt="DJ at Work"
                            />
                        </Card>
                    </Box>

                    <Typography variant="h4" gutterBottom>
                        Join the CD Entertainment Family
                    </Typography>
                    <Typography variant="body1" paragraph>
                        We invite you to become part of the CD Entertainment family. Whether you're planning a wedding, a corporate event, or any other celebration, we are here to provide the perfect soundtrack for your special moments. Contact us today to discuss your event and discover how we can make it an unforgettable experience.
                    </Typography>

                    <Typography variant="h4" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Have questions or ready to book? Get in touch with us today!
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <ContactForm setWidth={true}/>
                    </Box>

                    <Typography variant="body1" paragraph>
                        Thank you for considering CD Entertainment for your DJ needs. We look forward to making your next event truly special.
                    </Typography>
                </Box>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default AboutPage;