import { Box } from '@mui/material';
import * as React from 'react';
import { useDJContext } from '../../logic/state/GlobalContext';
import counterService from '../../services/counterService';
import Counter from '../common/counter';
import { ICounter } from '../../interfaces/ICounter';

const Counters: React.FC = () => {
    const { counters, dispatch } = useDJContext();

    React.useEffect(() => {
        const getCounters = async () => {
            await counterService.getCounters().then((data) => {
                dispatch!({ type: 'SET_COUNTERS', counters: (data as ICounter[]).sort((a, b) => a.id - b.id)});
            });
        };

        getCounters();
    }, []);

    return (  
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 10, gap: 10 }}>
                {counters?.map((counter) => (
                    <Counter count={counter.value} title={counter.name} showPlusIcon={counter.showPlus} />
                ))}
            </Box>
        </React.Fragment>
    );
}
 
export default Counters;