import getHttpService from "./httpService";

const { httpService } = getHttpService();

const getCounters = async () => {
    return httpService.get('/Counter').then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    });
};

const incrementCounter = async (counterId: number) => {
    return httpService.put(`/Counter/Increment/${counterId}`).then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    });
}

const counterService = {
    getCounters,
    incrementCounter
};

export default counterService;