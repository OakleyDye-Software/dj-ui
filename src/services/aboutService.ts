import getHttpService from "./httpService";

const { httpService } = getHttpService();

const getAbout = async () => {
    return httpService.get('/About').then((response) => {
        if (response.status === 200) {
            return response.data;
        }
        throw new Error('Failed to retrieve about information');
    });
}

const aboutService = {
    getAbout
}

export default aboutService;