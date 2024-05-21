import { IAbout } from "../../interfaces/IAbout";
import { ICounter } from "../../interfaces/ICounter";
import { IServiceSummary } from "../../interfaces/IServiceSummary";

export interface DJState {
    isMobile: boolean;
    currentSection: string;
    about: IAbout | null;
    services: IServiceSummary[];
    counters: ICounter[];
    dispatch?: React.Dispatch<DJAction>;
}

export const initialState: DJState = {
    isMobile: false,
    currentSection: 'hero',
    about: null,
    services: [],
    counters: []
};

interface ISetIsMobile {
    type: 'SET_IS_MOBILE';
    isMobile: boolean;
}

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

interface ISetCounters {
    type: 'SET_COUNTERS';
    counters: ICounter[];
}

export type DJAction = 
    | ISetIsMobile
    | ISetServices
    | ISetCurrentSection
    | ISetAbout
    | ISetCounters;

export const djReducer = (state: DJState, action: DJAction): DJState => {
    switch (action.type) {
        case 'SET_IS_MOBILE':
            return {
                ...state,
                isMobile: action.isMobile
            };
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
        case 'SET_COUNTERS':
            return {
                ...state,
                counters: action.counters
            };
        default:
            return state;
    }
}