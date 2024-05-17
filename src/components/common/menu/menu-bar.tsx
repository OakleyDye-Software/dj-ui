import { Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';

interface MenuBarProps {
    className: string;
    currentSection: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ className, currentSection }) => {
    let color; 
    switch (currentSection) {
        case 'service':
            color = 'black';
            break;
        default:
            color = 'white';
            break;
    }

    return (  
        <React.Fragment>
            <div 
                className={`menu-bar ${className}`} 
                style={{ color }}
            >
                <Box 
                    sx={{ 
                        zIndex: 1, 
                        position: 'absolute', 
                        top: '1rem', 
                        left: '1rem'
                    }}
                >
                    {/* <img src={'test'} alt="DJ OXLEY" width={100} height={100} /> */}
                    <Typography variant="h4" component="h4" sx={{ ml: 1 }}>CD ENTERTAINMENT</Typography>
                </Box>
                <Box 
                    sx={{ 
                        zIndex: 1, 
                        position: 'absolute', 
                        top: '1rem', 
                        right: '1rem', 
                        display: 'flex', 
                        alignItems: 'center' 
                    }}
                >
                    <MenuIcon sx={{ fontSize: 45 }}/>
                    <Typography variant="h4" component="h4" sx={{ ml: 1 }}>Menu</Typography>
                </Box>
            </div>
        </React.Fragment>
    );
}
 
export default MenuBar;