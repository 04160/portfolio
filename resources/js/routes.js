import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/js/components/Home.vue';
import About from '@/js/components/About.vue';
import Skills from '@/js/components/Skills.vue';
import Contact from '@/js/components/Contact.vue';
import Work from '@/js/components/Work.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/skills',
            name: 'Skills',
            component: Skills
        },
        {
            path: '/work',
            name: 'Work',
            component: Work
        },
    ]
});

export default router;