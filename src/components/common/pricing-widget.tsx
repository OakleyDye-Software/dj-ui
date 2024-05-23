import * as React from 'react';
import { IPackage } from '../../interfaces/IPackage';
import { Card, CardContent, List, Typography } from '@mui/material';

interface PricingWidgetProps {
    pricePackage: IPackage;
}

const PricingWidget: React.FC<PricingWidgetProps> = ({ pricePackage }) => {
    return (  
        <React.Fragment>
            <Card>
               <CardContent>
                    <Typography variant='h5' component='h5'>{pricePackage.name}</Typography>
                    <Typography variant='h6' component='h6'>${pricePackage.price}</Typography>
                    <List>
                        {pricePackage.features.map((feature, index) => (
                            <Typography key={index} variant='body1' component='li'>{feature}</Typography>
                        ))}
                    </List>
                </CardContent> 
            </Card>
        </React.Fragment>
    );
}
 
export default PricingWidget;