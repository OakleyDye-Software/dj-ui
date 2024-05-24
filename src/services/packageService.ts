import getHttpService from "./httpService";

const { httpService } = getHttpService();

const getPackages = async () => {
    return await httpService.get('/PricePackage').then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    });
};

const packageService = {
    getPackages
};

export default packageService;