import { Router } from '@vaadin/router';


const routes = [
    {
        path: '',
        component: 'gayol-app',
        children: [
            {
                path: '',
                redirect: '/dashboard',
            },
            {
                path: 'dashboard',
                component: 'dashboard-page',
                action: async() => await import('./Pages/DashboardPage')
            },
            {
                path: 'home',
                component: 'home-page',
                action: async() => await import('./Pages/HomePage')
            },
            {
                path: 'list',
                component: 'list-page',
                action: async() => await import('./Pages/ListPage')
            },
            {
                path: 'uploadList',
                component: 'upload-List',
                action: async() => await import('./Pages/UploadList')
            },
            {
                path: 'search',
                component: 'search-page',
                action: async() => await import('./Pages/SearchPage')
            }
        ]
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
