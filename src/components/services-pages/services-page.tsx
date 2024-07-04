import * as React from 'react';
import MenuBar from '../common/menu-bar';
import { Box, Container, Typography } from '@mui/material';
import Footer from '../common/footer';
import { useDJContext } from '../../logic/state/GlobalContext';
import serviceService from '../../services/serviceService';
import { IServiceSummary } from '../../interfaces/IServiceSummary';

const ServicesPage: React.FC = () => {
    const { isMobile, services, dispatch } = useDJContext();

    React.useEffect(() => {
        if (services.length === 0){
            (async () => {
                await serviceService.getServiceSummaries().then((data) => {
                    dispatch!({ type: 'SET_SERVICES', services: (data as IServiceSummary[]).sort((a, b) => a.id < b.id ? -1 : 1) });
                });
            })();
        }
    })

    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='service' />
                <Box sx={{ 
                    position: 'relative',
                    boxSizing: 'border-box',
                    backgroundColor: "#FFFFFF", 
                    width: '100vw', 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    pt: 10
                }}>
                    <Typography variant="h3" component="h3" gutterBottom color="primary" sx={{ textAlign: 'center' }}>
                        Services
                    </Typography>
                    <Typography variant='body1' component='p' gutterBottom color="#000000" sx={{ textAlign: 'center' }}>
                        Explore our services 
                    </Typography>
                    <Box 
                        sx={{ 
                            backgroundColor: '#FFFFFF', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            gap: 5, 
                            py: 5 
                        }}    
                    >
                        <Box 
                            sx={{ 
                                display: 'flex', 
                                flexDirection: 'row', 
                                flexWrap: 'wrap', 
                                justifyContent: 'center', 
                                gap: 5,
                                px: '10%'
                            }}
                        >
                            {services.map((service) => (
                                <Box
                                    sx={{
                                        backgroundColor: '#000000',
                                        backgroundImage: `url(/images/${service.imageUrl})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        color: '#FFFFFF',
                                        px: 2,
                                        py: 10,
                                        width: ['90%', '45%'],
                                        aspectRatio: '1/1',
                                        justifyContent: 'center',
                                        position: 'relative'
                                    }}
                                >
                                    <Typography variant='h4' component='h4' gutterBottom sx={{ textAlign: 'center' }}>
                                        {service.name}
                                    </Typography>
                                    <Typography variant='body1' component='p' sx={{ textAlign: 'center' }}>
                                        {service.description}
                                    </Typography>

                                    <Box 
                                        sx={{ 
                                            position: 'absolute', 
                                            bottom: 0, 
                                            left: 0, 
                                            right: 0, 
                                            height: '100%',
                                            backgroundColor: 'rgba(0,0,0,0.2)', 
                                            color: '#FFFFFF', 
                                            transition: '0.3s', 
                                            overflow: 'hidden', 
                                            px: 2
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            <Footer />
        </React.Fragment>
    );
}
 
export default ServicesPage;