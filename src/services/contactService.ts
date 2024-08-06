import { IContactFormSubmission } from "../interfaces/IContactFormSubmission";
import getHttpService from "./httpService";

const { httpService } = getHttpService();

const sendContactFormSubmissionAsync = async (submission: IContactFormSubmission) => {
    return await httpService.post('/Contact/ContactForm?domain=cdentertainment.co', submission).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    });
}

const contactService = {
    sendContactFormSubmissionAsync
};

export default contactService;