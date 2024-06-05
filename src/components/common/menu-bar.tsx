import { Box, Collapse, Drawer, Link, List, ListItemButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import { useDJContext } from '../../logic/state/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface MenuBarProps {
    className: string;
    currentSection: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ className, currentSection }) => {
    const { isMobile } = useDJContext();
    const navigate = useNavigate();
    const isHomePage = window.location.pathname === '/';
    const [isMenuVisible, setIsMenuVisible] = React.useState<boolean>(!isHomePage);
    const [isMenuHovered, setIsMenuHovered] = React.useState<boolean>(false);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
    const [openSubMenu, setOpenSubMenu] = React.useState<{ [key: string]: boolean }>({services: false});

    const handleClickSubmenu = (menu: string) => {
        if (openSubMenu[menu]) {
            navigate('/' + menu);
        }
        setOpenSubMenu({...openSubMenu, [menu]: !openSubMenu[menu]});
    };

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
                        className={isHomePage ? 'logo': ''}
                        sx={{ 
                            zIndex: 1, 
                            position: 'absolute', 
                            top: isHomePage ? '50%' : '1rem', 
                            left: isHomePage ? '50%' : '1rem',
                            transform: isHomePage ? 'translate(-50%, -50%) scale(3)' : undefined,
                        }}
                    >
                        <Link href={`/`}><img src={color === 'black' ? '/logo_black.png' : '/logo_white.png'} alt="CD ENTERTAINMENT" width={150}  /></Link>
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
                    <List sx={{ minWidth: '30vw' }}>
                        <ListItemButton sx={{ justifyContent: 'center' }} onClick={() => navigate('/')}>
                            <Typography variant='h4' component='h4'>Home</Typography>
                        </ListItemButton>
                        <ListItemButton sx={{ justifyContent: 'center' }} onClick={() => navigate('/about')}>
                            <Typography variant='h4' component='h4'>About</Typography>
                        </ListItemButton>
                        <ListItemButton sx={{ justifyContent: 'center' }} onClick={() => handleClickSubmenu('services')}>
                            <Typography variant='h4' component='h4'>Services</Typography>
                            {openSubMenu.services ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openSubMenu.services} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ justifyContent: 'center' }} onClick={() => navigate('/services/weddings')}>
                                    <Typography variant='h6' component='h6'>Weddings</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ justifyContent: 'center' }} onClick={() => navigate('/services/dances')}>
                                    <Typography variant='h6' component='h6'>Dances</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ justifyContent: 'center' }} onClick={() => navigate('/services/parties')}>
                                    <Typography variant='h6' component='h6'>Parties</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ justifyContent: 'center' }} onClick={() => navigate('/services/corporate-events')}>
                                    <Typography variant='h6' component='h6'>Corporate Events</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ justifyContent: 'center' }} onClick={() => navigate('/services/live-sound')}>
                                    <Typography variant='h6' component='h6'>Live Sound</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ justifyContent: 'center' }} onClick={() => navigate('/services/gear-rental')}>
                                    <Typography variant='h6' component='h6'>Gear Rental</Typography>
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton sx={{ justifyContent: 'center' }} onClick={() => navigate('/contact')}>
                            <Typography variant='h4' component='h4'>Contact</Typography>
                        </ListItemButton>
                    </List>
                </Drawer>
            </div>
        </React.Fragment>
    );
}
 
export default MenuBar;