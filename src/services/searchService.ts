import getHttpService from "./httpService";

const { httpService } = getHttpService();

const search = async (query: string) => {
    return await httpService.get(`/search?query=${query}`).then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    });
}

const searchService = {
    search
}

export default searchService;