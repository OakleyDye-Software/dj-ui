import * as React from 'react';
import MenuBar from '../common/menu-bar';
import Footer from '../common/footer';
import { Container } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const PrivacyPolicy: React.FC = () => {
    const [privacyPolicy, setPrivacyPolicy] = React.useState('');
    React.useEffect(() => {
        fetch(require('./privacypolicy.md'))
            .then(response => response.text())
            .then(text => setPrivacyPolicy(text));
    }, []);

    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth='lg' sx={{ mt: 15 }}>
                <ReactMarkdown>
                    {privacyPolicy}
                </ReactMarkdown>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default PrivacyPolicy;