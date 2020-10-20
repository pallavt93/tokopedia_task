import App from './App';
import HomePage from './pages/HomePage';
import ProductDescriptionPage from './pages/ProductDescriptionPage';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...ProductDescriptionPage,
                path: '/pdp/:id',
                exact: true
            }
        ]
    }
];