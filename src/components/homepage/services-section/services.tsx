import { Box, Typography } from '@mui/material';
import * as React from 'react';
import serviceService from '../../../services/serviceService';
import { IServiceSummary } from '../../../interfaces/IServiceSummary';

const ServicesSection: React.FC = () => {
    const [services, setServices] = React.useState<IServiceSummary[]>([]);

    React.useEffect(() => {
        const getServices = async () => {
            await serviceService.getServiceSummaries().then((data) => {
                setServices(data);
            });
        }

        getServices();
    }, []);
    
    return (  
        <React.Fragment>
            <Box sx={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, py: 5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 5 }}>
                    {services.map((service) => (
                        <Box key={service.id} sx={{ backgroundColor: 'black', color: 'white', px: 2, py: 10, width: ['90%', '45%'], aspectRatio: '1/1', justifyContent: 'center', position: 'relative' }}
                            onMouseEnter={(e) => (e.currentTarget.children[1] as HTMLElement).style.height = '70%'}
                            onMouseLeave={(e) => (e.currentTarget.children[1] as HTMLElement).style.height = '0'}
                        >
                            <Typography variant="h4" component="h4">{service.name}</Typography>
                            <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '0', backgroundColor: 'rgba(0,0,0,0.7)', color: 'white', transition: '0.3s', overflow: 'hidden', px: 2, py: 1 }}>
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