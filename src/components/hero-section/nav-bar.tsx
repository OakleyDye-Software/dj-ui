
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import * as React from 'react';

const NavBar: React.FC = () => {
    return (  
        <React.Fragment>
            <AppBar sx={{ backgroundColor: 'black' }}>
                <Toolbar sx={{ justifyContent: 'flex-start' }}>
                    <Typography variant="h6" component='div' fontWeight='bold' align='left' sx={{ flexGrow: 1 }}>
                        DJ OXLEY
                    </Typography>
                    <Button color="inherit" sx={{ mx: 0.5 }}>Menu Item 1</Button>
                    <Button color="inherit" sx={{ mx: 0.5 }}>Menu Item 2</Button>
                    <Button color="inherit" sx={{ mx: 0.5 }}>Menu Item 3</Button>
                    <Button color="inherit" sx={{ mx: 0.5 }}>Menu Item 4</Button>
                    <Button color="primary" variant='contained'>Call to Action</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
    
export default NavBar;
