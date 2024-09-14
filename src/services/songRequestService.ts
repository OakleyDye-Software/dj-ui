import getHttpService from "./httpService";
import notify from "../components/common/snackbarConfig";

const { httpService } = getHttpService();

const requestSong = async (song: any) => {
    return await httpService.post(`/SongRequest`, song).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            notify.error('Failed to request song');
        }
    });
}

const getSongRequests = async () => {
    return await httpService.get(`/SongRequest`).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            notify.error('Failed to get song requests');
        }
    });
}

const archiveSongRequests = async () => {
    return await httpService.delete(`/SongRequest`).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            notify.error('Failed to archive song requests');
        }
    });
}

const archiveSongRequestById = async (ids: number[]) => {
    return await httpService.delete(`/SongRequest`, { data: ids }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            notify.error('Failed to archive song requests');
        }
    });
}

const getSongRequestSetting = async () => {
    return await httpService.get(`/SongRequest/setting`).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            notify.error('Failed to get song request setting');
        }
    });
}

const toggleSongRequestSetting = async () => {
    return await httpService.put(`/SongRequest/setting`).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            notify.error('Failed to toggle song request setting');
        }
    });
}

const songRequestService = {
    requestSong,
    getSongRequests,
    archiveSongRequests,
    archiveSongRequestById,
    getSongRequestSetting,
    toggleSongRequestSetting
};

export default songRequestService;