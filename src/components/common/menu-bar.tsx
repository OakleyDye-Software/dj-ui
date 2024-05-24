import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import { useDJContext } from '../../logic/state/GlobalContext';

interface MenuBarProps {
    className: string;
    currentSection: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ className, currentSection }) => {
    const { isMobile } = useDJContext();
    const [isMenuVisible, setIsMenuVisible] = React.useState<boolean>(false);
    const [isMenuHovered, setIsMenuHovered] = React.useState<boolean>(false);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    }

    let color; 
    switch (currentSection) {
        case 'service':
            color = 'black';
            break;
        case 'pricing':
            color = 'black';
            break;
        default:
            color = 'white';
            break;
    }

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsMenuVisible(true);
        }, 2000);

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
                        alignItems: 'center',
                        visibility: isMenuVisible ? 'visible' : 'hidden',
                    }}
                    onMouseEnter={() => setIsMenuHovered(true)}
                    onMouseLeave={() => setIsMenuHovered(false)}
                    onClick={handleDrawerOpen}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: isMobile ? 30 : 45,
                            height: isMobile ? 30 : 45,
                            '& > svg': {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                transition: 'opacity 0.3s, transform 0.3s',
                            }
                        }}>
                        <MenuIcon
                            sx={{ 
                                fontSize: isMobile ? 30 : 45, 
                                opacity: isMenuHovered ? 0 : 1,
                                transform: isMenuHovered ? 'rotate(315deg)' : 'rotate(0deg)',
                            }}
                        />
                        <AddIcon 
                            sx={{ 
                                fontSize: isMobile ? 30 : 45, 
                                opacity: isMenuHovered ? 1 : 0,
                                transform: isMenuHovered ? 'rotate(0deg)' : 'rotate(-315deg)', 
                            }} 
                        /> 
                    </Box>
                    <Typography variant={isMobile ? 'h6' : 'h4'} component="h4" sx={{ ml: 1 }}>Menu</Typography>
                </Box>

                <Drawer
                    anchor='right'
                    open={isDrawerOpen}
                    onClose={handleDrawerClose}
                    sx={{
                        color: 'black'
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 5, pr: 5 }}>
                        <CloseIcon onClick={handleDrawerClose} sx={{ fontSize: 45 }}/>
                    </Box>
                    <List sx={{ width: '30vw' }}>
                        <ListItemButton sx={{ justifyContent: 'center' }}>
                            <Typography variant='h4' component='h4'>Home</Typography>
                        </ListItemButton>
                        <ListItemButton sx={{ justifyContent: 'center' }}>
                            <Typography variant='h4' component='h4'>About</Typography>
                        </ListItemButton>
                        <ListItemButton sx={{ justifyContent: 'center' }}>
                            <Typography variant='h4' component='h4'>Services</Typography>
                        </ListItemButton>
                        <ListItemButton sx={{ justifyContent: 'center' }}>
                            <Typography variant='h4' component='h4'>Contact</Typography>
                        </ListItemButton>
                    </List>
                </Drawer>
            </div>
        </React.Fragment>
    );
}
 
export default MenuBar;