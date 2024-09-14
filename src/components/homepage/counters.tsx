import { Box } from '@mui/material';
import * as React from 'react';
import { useDJContext } from '../../logic/state/GlobalContext';
import counterService from '../../services/counterService';
import Counter from '../common/counter';
import { ICounter } from '../../interfaces/ICounter';

const Counters: React.FC = () => {
    const { isMobile, counters, dispatch } = useDJContext();

    React.useEffect(() => {
        const getCounters = async () => {
            await counterService.getCounters().then((data) => {
                dispatch!({ type: 'SET_COUNTERS', counters: (data as ICounter[]).sort((a, b) => a.id - b.id)});
            });
        };

        if (counters.length === 0) {
            getCounters();
        }
    }, []);

    return (  
        <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', mx: isMobile ? 10 : undefined, py: 10, gap: isMobile ? 5 : 10 }}>
                {counters?.map((counter) => (
                    <Counter key={counter.name} count={counter.value} title={counter.name} showPlusIcon={counter.showPlus} />
                ))}
            </Box>
        </React.Fragment>
    );
}
 
export default Counters;