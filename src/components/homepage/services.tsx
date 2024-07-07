import { Box, Typography } from '@mui/material';
import * as React from 'react';
import serviceService from '../../services/serviceService';
import { IServiceSummary } from '../../interfaces/IServiceSummary';
import { useDJContext } from '../../logic/state/GlobalContext';
import { useNavigate } from 'react-router-dom';

const ServicesSection: React.FC = () => {
    const { isMobile, services, dispatch } = useDJContext();
    const navigate = useNavigate();

    React.useEffect(() => {
        const getServices = async () => {
            await serviceService.getServiceSummaries().then((data) => {
                dispatch!({ type: 'SET_SERVICES', services: (data as IServiceSummary[]).sort((a, b) => a.id < b.id ? -1 : 1) });
            });
        }

        if (services.length === 0){
            getServices();
        }
    }, []);
    
    return (  
        <React.Fragment>
            <Typography variant={isMobile ? 'h4' : 'h2'} component="h2" sx={{ textAlign: 'center', pt: 10, pb: 5, backgroundColor: '#FFFFFF', color: '#000000' }}>Our Services</Typography>
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
                            key={service.id} 
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
                                position: 'relative',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => (e.currentTarget.children[1] as HTMLElement).style.height = '70%'}
                            onMouseLeave={(e) => (e.currentTarget.children[1] as HTMLElement).style.height = '0'}
                            onClick={() => navigate(`/services/${service.urlSlug}`)}
                        >
                            <Typography variant={isMobile ? 'h6' : 'h4'} component="h4">{service.name}</Typography>
                            <Box 
                                sx={{ 
                                    position: 'absolute', 
                                    bottom: 0, 
                                    left: 0, 
                                    right: 0, 
                                    height: '0', 
                                    backgroundColor: 'rgba(0,0,0,0.9)', 
                                    color: '#FFFFFF', 
                                    transition: '0.3s', 
                                    overflow: 'hidden', 
                                    px: 2
                                }}
                            >
                                <br />
                                <Typography variant="body1">{service.description}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </React.Fragment>
    );
}
 
export default ServicesSection;