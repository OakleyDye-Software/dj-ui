import { Box, Typography } from '@mui/material';
import * as React from 'react';
import serviceService from '../../../services/serviceService';
import { IServiceSummary } from '../../../interfaces/IServiceSummary';

const ServicesSection: React.FC = () => {
    const [services, setServices] = React.useState([]);

    React.useEffect(() => {
        const getServices = async () => {
            await serviceService.getServiceSummaries().then((data) => {
                setServices(data);
                console.log(data);
            });
        }

        getServices();
    }, []);
    
    return (  
        <React.Fragment>
            <Box sx={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, py: 5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5 }}>
                    <Box sx={{ backgroundColor: 'black', color: 'white', px: 2, py: 10, width: '60vh', height: '60vh', justifyContent: 'center' }}>
                        <Typography variant="h4" component="h4">Weddings</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: 'black', color: 'white', px: 2, py: 10, width: '60vh', height: '60vh', justifyContent: 'center' }}>
                        <Typography variant="h4" component="h4">Dances</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5 }}>
                    <Box sx={{ backgroundColor: 'black', color: 'white', px: 2, py: 10, width: '60vh', height: '60vh', justifyContent: 'center' }}>
                        <Typography variant="h4" component="h4">Corporate Events</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: 'black', color: 'white', px: 2, py: 10, width: '60vh', height: '60vh', justifyContent: 'center' }}>
                        <Typography variant="h4" component="h4">Parties</Typography>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
}
 
export default ServicesSection;