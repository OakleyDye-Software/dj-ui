import { Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import { useDJContext } from '../../logic/state/GlobalContext';

interface MenuBarProps {
    className: string;
    currentSection: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ className, currentSection }) => {
    const { isMobile } = useDJContext();
    const [isMenuVisible, setIsMenuVisible] = React.useState<boolean>(false);

    let color; 
    switch (currentSection) {
        case 'service':
            color = 'black';
            break;
        default:
            color = 'white';
            break;
    }

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsMenuVisible(true);
        }, 250);

        return () => clearTimeout(timer);
    }, []);

    return (  
        <React.Fragment>
            <div 
                className={`menu-bar ${className}`} 
                style={{ color }}
            >
                <div style={{ height: '100%' }}>
                    <Box 
                        className='logo'
                        sx={{ 
                            zIndex: 1, 
                            position: 'absolute', 
                            top: '50%', 
                            left: '50%',
                            transform: 'translate(-50%, -50%) scale(3)',
                        }}
                    >
                        {/* <img src={'test'} alt="DJ OXLEY" width={100} height={100} /> */}
                        <Typography variant={isMobile ? 'h6' : 'h4'} component="h4" sx={{ ml: 1 }}>CD ENTERTAINMENT</Typography>
                    </Box>
                </div>
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
                    <MenuIcon sx={{ fontSize: isMobile ? 30: 45 }}/>
                    <Typography variant={isMobile ? 'h6' : 'h4'} component="h4" sx={{ ml: 1 }}>Menu</Typography>
                </Box>
            </div>
        </React.Fragment>
    );
}
 
export default MenuBar;