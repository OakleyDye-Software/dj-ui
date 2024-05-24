import * as React from 'react';
import { IPackage } from '../../interfaces/IPackage';
import { Box, Button, Card, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Album } from '@mui/icons-material';
import { useDJContext } from '../../logic/state/GlobalContext';

interface PricingWidgetProps {
    pricePackage: IPackage;
}

const PricingWidget: React.FC<PricingWidgetProps> = ({ pricePackage }) => {
    const { isMobile } = useDJContext();

    return (  
        <React.Fragment>
            <Card sx={{ width: isMobile ? '80vw' : '25vw', minHeight: '70vh', backgroundColor: '#f8f8f8', boxShadow: 5 }}>
               <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <Box>
                        <Typography variant='h4' component='h4'>{pricePackage.name}</Typography>
                        <Typography variant='h6' component='h6'>Starting at ${pricePackage.price}</Typography>
                        <Divider sx={{ pb: 2 }} />
                        <List>
                            {pricePackage.features.map((feature, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <Album color='primary' />
                                    </ListItemIcon>
                                    <ListItemText primary={feature.name} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Button variant='contained' color='primary' sx={{ mt: 'auto' }}>Book Now</Button>
                </CardContent> 
            </Card>
        </React.Fragment>
    );
}
 
export default PricingWidget;