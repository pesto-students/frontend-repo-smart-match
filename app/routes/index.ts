import Homepage from '../pages/screens/Homepage';
// import AboutPage from '../AboutPage';
// import ContactPage from '../ContactPage';
// import ServicesPage from '../ServicesPage';
import { FC } from 'react';

const routes: { [key: string]: FC<{}> } = {
    '/': Homepage,
    // '/about': AboutPage,
    // '/contact': ContactPage,
    // '/services': ServicesPage,
};

export default routes;
