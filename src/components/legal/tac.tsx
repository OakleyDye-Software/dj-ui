import * as React from 'react';
import MenuBar from '../common/menu-bar';
import { Container } from '@mui/material';
import Footer from '../common/footer';
import ReactMarkdown from 'react-markdown';

const Tac: React.FC = () => {
    const [terms, setTerms] = React.useState('');
    React.useEffect(() => {
        fetch(require('./terms.md'))
            .then(response => response.text())
            .then(text => setTerms(text));
    }, []);
    return (  
        <React.Fragment>
            <MenuBar className='fixedMenuBar' currentSection='default' />
            <Container maxWidth='lg' sx={{ mt: 15 }}>
                <ReactMarkdown>
                    {terms}
                </ReactMarkdown>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
 
export default Tac;