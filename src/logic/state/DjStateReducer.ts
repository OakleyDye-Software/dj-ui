import { IServiceSummary } from "../../interfaces/IServiceSummary";

export interface DJState {
    services: IServiceSummary[];
    dispatch?: React.Dispatch<DJAction>;
}

export const initialState: DJState = {
    services: []
};

interface ISetServices {
    type: 'SET_SERVICES';
    services: IServiceSummary[];
}

export type DJAction = 
    | ISetServices;

export const djReducer = (state: DJState, action: DJAction): DJState => {
    switch (action.type) {
        case 'SET_SERVICES':
            return {
                ...state,
                services: action.services
            };
        default:
            return state;
    }
}