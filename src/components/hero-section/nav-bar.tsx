
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import * as React from 'react';

const NavBar: React.FC = () => {
    return (  
        <React.Fragment>
            <AppBar sx={{ backgroundColor: 'black' }}>
                <Toolbar sx={{ justifyContent: 'flex-start' }}>
                    <Typography variant="h6" align='left' component="div" sx={{ flexGrow: 1 }}>
                        Logo
                    </Typography>
                    <Button color="inherit">Menu Item 1</Button>
                    <Button color="inherit">Menu Item 2</Button>
                    <Button color="inherit">Menu Item 3</Button>
                    <Button color="inherit">Menu Item 4</Button>
                    <Button color="inherit">Call to Action</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
    
export default NavBar;
