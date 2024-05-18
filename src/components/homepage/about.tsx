import * as React from 'react';
import { useDJContext } from '../../logic/state/GlobalContext';
import aboutService from '../../services/aboutService';
import { Box, Typography } from '@mui/material';

const About: React.FC = () => {
    const { about, dispatch } = useDJContext();

    React.useEffect(() => {
        const getAbout = async () => {
            await aboutService.getAbout().then((about) => {
                dispatch!({ type: 'SET_ABOUT', about });
            });
        }

        if (!about) {
            getAbout();
        }
    }, []);

    return (  
        <React.Fragment>
            <Typography variant='h2' component='h2' sx={{ textAlign: 'center', pt: 10, pb: 5 }}>About</Typography>
            <Box sx={{ display: 'flex', px: '20%', pb: 10 }}>
                <Box>
                    <Typography variant='body1'>{about?.description}</Typography>
                </Box>
                <Box>

                </Box>
            </Box>
        </React.Fragment>
    );
}
 
export default About;