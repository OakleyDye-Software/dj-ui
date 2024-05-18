import { IAbout } from "../../interfaces/IAbout";
import { IServiceSummary } from "../../interfaces/IServiceSummary";

export interface DJState {
    currentSection: string;
    about: IAbout | null;
    services: IServiceSummary[];
    dispatch?: React.Dispatch<DJAction>;
}

export const initialState: DJState = {
    currentSection: 'hero',
    about: null,
    services: []
};

interface ISetServices {
    type: 'SET_SERVICES';
    services: IServiceSummary[];
}

interface ISetCurrentSection {
    type: 'SET_CURRENT_SECTION';
    currentSection: string;
}

interface ISetAbout {
    type: 'SET_ABOUT';
    about: IAbout;
}

export type DJAction = 
    | ISetServices
    | ISetCurrentSection
    | ISetAbout;

export const djReducer = (state: DJState, action: DJAction): DJState => {
    switch (action.type) {
        case 'SET_SERVICES':
            return {
                ...state,
                services: action.services
            };
        case 'SET_CURRENT_SECTION':
            return {
                ...state,
                currentSection: action.currentSection
            };
        case 'SET_ABOUT':
            return {
                ...state,
                about: action.about
            };
        default:
            return state;
    }
}