import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../components/homepage/homepage';

const Router: React.FC = () => {
    return (  
        <React.Fragment>
            <Routes>
                <Route index element={<Homepage />} />
            </Routes>
        </React.Fragment>
    );
}
 
export default Router;