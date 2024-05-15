import { IServiceSummary } from "../interfaces/IServiceSummary";
import getHttpService from "./httpService";

const { httpService } = getHttpService();

const getServiceSummaries = async () => {
    return httpService.get('/Service').then((response) => {
        if (response.status === 200) {
            return response.data;
        }
        throw new Error('Failed to retrieve service summaries');
    });
}

const serviceService = {
    getServiceSummaries
}

export default serviceService;