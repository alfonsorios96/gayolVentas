import { Router } from '@vaadin/router';
import './GayolApp';
import './Pages/NotfoundPage';

const routes = [
    {
        path: '/',
        component: 'gayol-app',
    },
    {
        path: '(.*)',
        component: 'not-found-page'
    }
];

const app = document.getElementById('app');
export const router = new Router(app);

router.setRoutes(routes);