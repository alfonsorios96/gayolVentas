import { Router } from '@vaadin/router';


const routes = [
    {
        path: '/',
        component: 'gayol-app',
        action: async() => {
            await import('./GayolApp');
        }
    },
    // TODO: CAMBIAR DASBOARDPAGE POR HOME PAGE
    {
        path: 'dashboard',
        component: 'dashboard-page',
        action: async() => await import ('./Pages/DashboardPage')
    },
    {
        path: 'home',
        component: 'home-page',
        action: async() => await import ('./Pages/HomePage')
    },
    {
        path: 'searchpage',
        component: 'search-page',
        action: async() => await import ('./Pages/SearchPage')
    },
    {
        path: 'list',
        component: 'list-page',
        action: async() => await import ('./Pages/ListPage')
    },
    {
        path: 'upload',
        component: 'upload-list',
        action: async() => await import ('./Pages/UploadList')
    },
    {
        path: '(.*)',
        component: 'not-found-page',
        action: async() => await import ('./Pages/NotfoundPage')
    }
];

// NOTA: exports routes

const app = document.getElementById('app');
export const router = new Router(app);

router.setRoutes(routes);