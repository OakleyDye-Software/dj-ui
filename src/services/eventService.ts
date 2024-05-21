import getHttpService from "./httpService";

const { httpService } = getHttpService();

const getEventTypes = async () => {
    return httpService.get("/Event/Type").then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    });
}

const eventService = {
    getEventTypes
};

export default eventService;