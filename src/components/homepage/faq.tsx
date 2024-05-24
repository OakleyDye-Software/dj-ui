import * as React from 'react';
import { useDJContext } from '../../logic/state/GlobalContext';
import faqService from '../../services/faqService';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const FAQ: React.FC = () => {
    const { isMobile, faqs, dispatch } = useDJContext();
    const [expanded, setExpanded] = React.useState<number | false>(false);

    React.useEffect(() => {
        const getFaqs = async () => {
            await faqService.getFaqs().then((data) => {
                if (data) {
                    dispatch!({ type: 'SET_FAQS', faqs: data });
                }
            });
        };
        
        if (faqs.length === 0) {
            getFaqs();
        }
    }, []);

    const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (  
        <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: 5, mx: isMobile ? '2vw' : '20vw' }}>
                <Typography variant={isMobile ? 'h4' : 'h2'} align="center" gutterBottom>FAQs</Typography>
                {faqs.map((faq) => (
                    <Accordion key={faq.id} expanded={expanded === faq.id} onChange={handleChange(faq.id)}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </React.Fragment>
    );
}
 
export default FAQ;