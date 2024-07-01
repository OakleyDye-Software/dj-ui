import * as React from 'react';
import MenuBar from '../common/menu-bar';
import { Container } from '@mui/material';
import Footer from '../common/footer';
import ReactMarkdown from 'react-markdown';

const Disclaimer: React.FC = () => {
    const [disclaimer, setDisclaimer] = React.useState('');
    React.useEffect(() => {
        fetch(require('./disclaimer.md'))
            .then(response => response.text())
            .then(text => setDisclaimer(text));
    }, []);

    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth='lg' sx={{ mt: 15 }}>
                <ReactMarkdown>
                    {disclaimer}
                </ReactMarkdown>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default Disclaimer;