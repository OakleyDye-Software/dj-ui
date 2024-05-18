import { IServiceSummary } from "../../interfaces/IServiceSummary";

export interface DJState {
    currentSection: string;
    services: IServiceSummary[];
    dispatch?: React.Dispatch<DJAction>;
}

export const initialState: DJState = {
    currentSection: 'hero',
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

export type DJAction = 
    | ISetServices
    | ISetCurrentSection;

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
        default:
            return state;
    }
}