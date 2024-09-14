import * as React from 'react';
import MenuBar from '../common/menu-bar';
import { Avatar, Box, Button, Card, CardHeader, Container, TextField, Typography } from '@mui/material';
import Footer from '../common/footer';
import searchService from '../../services/searchService';
import { CheckCircleOutline } from '@mui/icons-material';
import songRequestService from '../../services/songRequestService';
import notify from '../common/snackbarConfig';

const RequestPage: React.FC = () => {
    const [hits, setHits] = React.useState([]);
    const [selectedHitIndex, setSelectedHitIndex] = React.useState<number | null>(null);

    const handleKeyUp = (e: React.KeyboardEvent) => {
        const searchValue = (document.getElementById('requestForm') as HTMLInputElement).value;
        if (searchValue.length > 2) {
            searchService.search(searchValue).then((response) => {
                setHits(response.response.hits);
                setSelectedHitIndex(0);
            });
        } else {
            setSelectedHitIndex(null);
            setHits([]);
        }
    }

    const handleSongRequest = () => {
        if (selectedHitIndex !== null) {
            const selectedHit: any = hits[selectedHitIndex];
            songRequestService.requestSong(selectedHit.result).then((result) => {
                if (result) {
                    notify.success('Song requested');
                    setSelectedHitIndex(null);
                    setHits([]);
                    (document.getElementById('requestForm') as HTMLInputElement).value = '';
                }
            });
        }
    }

    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth="lg" sx={{ mt: 12, minHeight: '100vh' }}>
                <Box my={4}>
                    <Typography variant='h3' gutterBottom>
                        Request a Song
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                        <TextField 
                            id='requestForm' 
                            label='Search for a song, artist, album, or lyrics' 
                            variant='outlined' 
                            fullWidth 
                            onKeyUp={handleKeyUp}
                        />
                        {selectedHitIndex !== null && <Button variant='text' color='primary' sx={{ whiteSpace: 'nowrap' }} onClick={handleSongRequest}>Request Song</Button>}
                    </Box>
                </Box>

                {hits.length > 0 && (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {hits.map((hit: any, index: number) => (
                            <Box key={index} onClick={() => selectedHitIndex === index ? setSelectedHitIndex(null) : setSelectedHitIndex(index)}>
                                <Card key={index} variant={selectedHitIndex === index ? 'outlined' : 'elevation'}>
                                    <CardHeader 
                                        title={hit.result.title} 
                                        subheader={hit.result.artistNames} 
                                        avatar={
                                            <Avatar src={hit.result.imageUrl} alt={hit.result.title} />
                                        }
                                        action={
                                            selectedHitIndex === index && <CheckCircleOutline color='primary' />
                                        }
                                    />
                                </Card>
                            </Box>
                        ))}
                    </Box>
                )}
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default RequestPage;