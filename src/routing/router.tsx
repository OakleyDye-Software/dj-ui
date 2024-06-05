import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../components/homepage/homepage';
import AboutPage from '../components/about-page/about-page';
import ServicesPage from '../components/services-pages/services-page';
import Weddings from '../components/services-pages/weddings';

const Router: React.FC = () => {
    return (  
        <React.Fragment>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/weddings" element={<Weddings />} />
            </Routes>
        </React.Fragment>
    );
}
 
export default Router;