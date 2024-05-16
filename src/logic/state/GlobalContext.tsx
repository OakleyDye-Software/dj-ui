import * as React from 'react';
import { DJState, djReducer, initialState } from './DjStateReducer';

const DJContext = React.createContext<DJState>(initialState);

const DJProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [state, dispatch] = React.useReducer(djReducer, initialState);

    return (
        <DJContext.Provider value={{ ...state, dispatch }}>
            {children}
        </DJContext.Provider>
    );
}

export default DJProvider;

export const useDJContext = () => { return React.useContext(DJContext); }