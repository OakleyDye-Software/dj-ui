import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../components/homepage/homepage';
import AboutPage from '../components/about-page/about-page';
import ServicesPage from '../components/services-pages/services-page';
import Weddings from '../components/services-pages/weddings';
import Dances from '../components/services-pages/dances';
import GearRental from '../components/services-pages/gear-rental';
import LiveSound from '../components/services-pages/live-sound';
import Parties from '../components/services-pages/parties';
import Corporate from '../components/services-pages/corporate';
import CookiePolicy from '../components/legal/cookie-policy';
import Disclaimer from '../components/legal/disclaimer';
import PrivacyPolicy from '../components/legal/privacy-policy';
import Tac from '../components/legal/tac';
import Testimonials from '../components/testimonials/testimonials';
import Portfolio from '../components/portfolio/portfolio';
import ContactPage from '../components/contact-page/contact-page';
import RequestPage from '../components/requests/request';

const Router: React.FC = () => {
    return (  
        <React.Fragment>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path='/testimonials' element={<Testimonials />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/request' element={<RequestPage />} />

                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/weddings" element={<Weddings />} />
                <Route path='/services/dances' element={<Dances />} />
                <Route path='/services/parties' element={<Parties />} />
                <Route path='/services/corporate-events' element={<Corporate />} />
                <Route path='/services/live-sound' element={<LiveSound />} />
                <Route path='/services/gear-rental' element={<GearRental />} />

                <Route path='/legal/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/legal/terms-and-conditions' element={<Tac />} />
                <Route path='/legal/cookie-policy' element={<CookiePolicy />} />
                <Route path='/legal/disclaimer' element={<Disclaimer />} />
            </Routes>
        </React.Fragment>
    );
}
 
export default Router;