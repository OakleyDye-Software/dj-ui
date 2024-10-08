import { IAbout } from "../../interfaces/IAbout";
import { ICounter } from "../../interfaces/ICounter";
import { IEventType } from "../../interfaces/IEventType";
import { IFAQ } from "../../interfaces/IFAQ";
import { IPackage } from "../../interfaces/IPackage";
import { IServiceSummary } from "../../interfaces/IServiceSummary";

export interface DJState {
    isMobile: boolean;
    acceptingRequests: boolean;
    currentSection: string;
    about: IAbout | null;
    services: IServiceSummary[];
    counters: ICounter[];
    eventTypes: IEventType[];
    pricePackages: IPackage[];
    faqs: IFAQ[];
    dispatch?: React.Dispatch<DJAction>;
}

export const initialState: DJState = {
    isMobile: false,
    acceptingRequests: false,
    currentSection: 'hero',
    about: null,
    services: [],
    counters: [],
    eventTypes: [],
    pricePackages: [],
    faqs: []
};

interface ISetIsMobile {
    type: 'SET_IS_MOBILE';
    isMobile: boolean;
}

interface ISetAcceptingRequests {
    type: 'SET_ACCEPTING_REQUESTS';
    acceptingRequests: boolean;
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

interface ISetEventTypes {
    type: 'SET_EVENT_TYPES';
    eventTypes: IEventType[];
}

interface ISetPricePackages {
    type: 'SET_PRICE_PACKAGES';
    pricePackages: IPackage[];
}

interface ISetFAQs {
    type: 'SET_FAQS';
    faqs: IFAQ[];
}

export type DJAction = 
    | ISetIsMobile
    | ISetAcceptingRequests
    | ISetServices
    | ISetCurrentSection
    | ISetAbout
    | ISetCounters
    | ISetEventTypes
    | ISetPricePackages
    | ISetFAQs;

export const djReducer = (state: DJState, action: DJAction): DJState => {
    switch (action.type) {
        case 'SET_IS_MOBILE':
            return {
                ...state,
                isMobile: action.isMobile
            };
        case 'SET_ACCEPTING_REQUESTS':
            return {
                ...state,
                acceptingRequests: action.acceptingRequests
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
        case 'SET_EVENT_TYPES':
            return {
                ...state,
                eventTypes: action.eventTypes
            };
        case 'SET_PRICE_PACKAGES':
            return {
                ...state,
                pricePackages: action.pricePackages
            };
        case 'SET_FAQS':
            return {
                ...state,
                faqs: action.faqs
            };
        default:
            return state;
    }
}