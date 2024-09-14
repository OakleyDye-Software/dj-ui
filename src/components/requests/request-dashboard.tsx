import * as React from 'react';
import MenuBar from '../common/menu-bar';
import { Avatar, Box, Button, Chip, Container, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from '@mui/material';
import Footer from '../common/footer';
import songRequestService from '../../services/songRequestService';
import { Archive, LibraryMusic, PlayCircleOutline } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import notify from '../common/snackbarConfig';
import { useDJContext } from '../../logic/state/GlobalContext';

const SongRequestDashboard: React.FC = () => {
    const [requests, setRequests] = React.useState([]);
    const [selectedRequests, setSelectedRequests] = React.useState([]);
    const { acceptingRequests, dispatch } = useDJContext();

    const getSongRequests = () => {
        songRequestService.getSongRequests().then((response) => {
            if (response) {
                setRequests(response);
            }
        });
    };

    const archiveSongRequests = () => {
        songRequestService.archiveSongRequests().then((response) => {
            if (response) {
                notify.success('Song requests archived');
                getSongRequests();
            }
        });
    };

    const archiveSelectedSongRequests = () => {
        //const selectedRequests: any[] = requests.filter((request: any) => request.selected);
        if (selectedRequests.length > 0) {
            console.log((selectedRequests as any[]).flatMap((x) => x.id));
            // songRequestService.archiveSongRequestById(selectedRequests.flatMap(x => x.id)).then((response) => {
            //     if (response) {
            //         notify.success('Selected song requests archived');
            //         getSongRequests();
            //     }
            // });
        }
    };

    const toggleSongRequestSetting = () => {
        songRequestService.toggleSongRequestSetting().then((response) => {
            dispatch!({ type: 'SET_ACCEPTING_REQUESTS', acceptingRequests: response });
            if (response) {
                notify.success('Song requests enabled');
            } else {
                notify.success('Song requests disabled');
            }
        });
    };

    React.useEffect(() => {
        getSongRequests();
        const intervalId = setInterval(getSongRequests, 120000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth="lg" sx={{ mt: 12 }}>
                <Box my={4}>
                    <Typography variant='h3' gutterBottom>
                        Pending Song Requests
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 2 }}>
                        {acceptingRequests ? <Chip label='Accepting Requests' color='success' sx={{ mb: 2 }} /> : <Chip label='Not Accepting Requests' color='primary' sx={{ mb: 2 }} />}
                        {selectedRequests.length > 0 && <Button variant='contained' color='primary' onClick={archiveSelectedSongRequests} sx={{ mb: 2 }}>Archive Selected Requests</Button>}
                    </Box>
                    <DataGrid
                        rows={requests as any[]}
                        columns={[
                            { field: 'id', headerName: 'ID', width: 100 },
                            { field: 'imageUrl', headerName: 'Image', width: 100, renderCell: (params) => <Box sx={{ display: 'flex', alignItems: 'center' }}><Avatar src={params.value} /></Box> },
                            { field: 'title', headerName: 'Title', flex: 1 },
                            { field: 'artistNames', headerName: 'Artist', flex: 1 },
                            { field: 'requestDate', headerName: 'Requested At', width: 200, renderCell: (params) => new Date(`${params.value}Z`).toLocaleString() },
                        ]}
                        checkboxSelection
                        onRowSelectionModelChange={(newSelection) => setSelectedRequests(newSelection as never[])}
                    />
                </Box>
            </Container>
            <SpeedDial ariaLabel='Action Menu' sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon />}>
                <SpeedDialAction key='getSongRequests' icon={<LibraryMusic />} tooltipTitle='Get Song Requests' onClick={getSongRequests} />
                <SpeedDialAction key='archiveSongRequests' icon={<Archive />} tooltipTitle='Archive All Song Requests' onClick={archiveSongRequests} />
                <SpeedDialAction key='toggleSongRequests' icon={<PlayCircleOutline />} tooltipTitle='Toggle Song Requests' onClick={toggleSongRequestSetting} />
            </SpeedDial>
            <Footer />
        </React.Fragment>
    );
}
 
export default SongRequestDashboard;