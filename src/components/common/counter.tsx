
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
    count: number;
    title: string;
    showPlusIcon: boolean;
}

const Counter: React.FC<CounterProps> = ({ count, title, showPlusIcon }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [currentCount, setCurrentCount] = React.useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.75,
    });

    React.useEffect(() => {
        if (inView) {
            setIsVisible(true);
            let interval: NodeJS.Timeout | number = 0;
            if (currentCount < count) {
                interval = setInterval(() => {
                    setCurrentCount(currentCount + 1);
                }, 50);
            }
            return () => clearInterval(interval as NodeJS.Timeout);
        }
    }, [inView, count, currentCount]);

    return (
        <React.Fragment>
            <Box ref={ref} sx={{ display: 'flex' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    <Typography variant="h2" component="h2" color="primary">
                        {isVisible ? currentCount : 0}
                        {showPlusIcon ? '+' : ''}
                    </Typography>
                    <Typography variant="h6" component="p">
                        {title}
                    </Typography>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Counter;
