import getHttpService from "./httpService";

const { httpService } = getHttpService();

const getFaqs = async () => {
    return await httpService.get("/FAQ").then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    })
}

const faqService = {
    getFaqs
}

export default faqService;