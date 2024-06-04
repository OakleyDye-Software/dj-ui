import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../components/homepage/homepage';
import AboutPage from '../components/about-page/about-page';

const Router: React.FC = () => {
    return (  
        <React.Fragment>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </React.Fragment>
    );
}
 
export default Router;