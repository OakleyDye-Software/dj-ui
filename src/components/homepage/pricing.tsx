import * as React from 'react';
import { useDJContext } from '../../logic/state/GlobalContext';
import packageService from '../../services/packageService';
import { Box, ThemeProvider, Typography, createTheme } from '@mui/material';
import PricingWidget from '../common/pricing-widget';
import { lightThemeOptions } from '../../styles/theme';

const Pricing: React.FC = () => {
    const { isMobile, pricePackages, dispatch } = useDJContext();
    const lightTheme = createTheme(lightThemeOptions);

    React.useEffect(() => {
        const getPackages = async () => {
            await packageService.getPackages().then((data) => {
                dispatch!({ type: 'SET_PRICE_PACKAGES', pricePackages: data });
            });
        };

        if (pricePackages.length === 0) {
            getPackages();
        }
    }, []);

    return (  
        <React.Fragment>
            <ThemeProvider theme={lightTheme}>
                <Typography variant={isMobile ? 'h4' : 'h2'} component='h2' sx={{ textAlign: 'center', pt: 10, color: '#000000', backgroundColor: '#FFFFFF' }}>Pricing</Typography>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: isMobile ? 'column' : 'row', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        width: '100vw', 
                        background: '#FFFFFF', 
                        py: isMobile ? undefined : 10,
                        gap: 5
                    }}
                >
                    {pricePackages && pricePackages.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0).map((pkg) => (
                        <PricingWidget key={pkg.id} pricePackage={pkg} />
                    ))}
                </Box>
            </ThemeProvider>
        </React.Fragment>
    );
}
 
export default Pricing;