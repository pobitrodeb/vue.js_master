import {createRouter, createWebHashHistory} from 'vue-router';


import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Services from '../views/Services.vue';
import SingleService from '../views/SingleService.vue'
import Contact from '../views/Contact.vue';

const routes = [
    { path: '/',         name:'home',     component: Home },
    { path: "/about",    name:'about',    component: About },
    { path: "/services", name:'services', component: Services },
    { path: "/services/:id", name:'single-service', component: SingleService },
    { path: "/contact",  name:'contact',  component: Contact },
];

const router = createRouter({
    history: createWebHashHistory(), 
    routes,
});

export default router;