import * as React from 'react';
import { DJState, djReducer, initialState } from './DjStateReducer';
import { useMediaQuery, useTheme } from '@mui/material';
import songRequestService from '../../services/songRequestService';

const DJContext = React.createContext<DJState>(initialState);

const DJProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [state, dispatch] = React.useReducer(djReducer, initialState);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const checkMobile = () => {
        dispatch({ type: 'SET_IS_MOBILE', isMobile });
    }

    const checkAcceptingRequests = () => {
        songRequestService.getSongRequestSetting().then((response) => {
            dispatch({ type: 'SET_ACCEPTING_REQUESTS', acceptingRequests: response });
        });
    };

    React.useEffect(() => {
        checkMobile();
        checkAcceptingRequests();
    }, []);

    return (
        <DJContext.Provider value={{ ...state, dispatch }}>
            {children}
        </DJContext.Provider>
    );
}

export default DJProvider;

export const useDJContext = () => { return React.useContext(DJContext); }