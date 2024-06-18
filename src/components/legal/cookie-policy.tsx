import * as React from 'react';
import MenuBar from '../common/menu-bar';
import Footer from '../common/footer';
import { Container, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const CookiePolicy: React.FC = () => {
    const [cookiePolicy, setCookiePolicy] = React.useState('');
    React.useEffect(() => {
        fetch(require('./cookiepolicy.md'))
            .then(response => response.text())
            .then(text => setCookiePolicy(text));
    }, []);

    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth='lg' sx={{ mt: 15 }}>
                <ReactMarkdown>
                    {cookiePolicy}
                </ReactMarkdown>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default CookiePolicy;