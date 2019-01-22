<template>
    <ul class="navbar">
        <route-link
                v-for="link in links"
                v-bind:key="link.id"
                v-bind:link="link"
        ></route-link>
    </ul>
</template>

<script>
    import RouteLink from '@/js/components/navigation/includes/RouteLink.vue';

    let links = [
        {
            'id': 1,
            'icon': 'fa-home',
            'name': 'Home',
            'route': '/'
        },
        {
            'id': 2,
            'icon': 'fa-user',
            'name': 'About',
            'route': '/about'
        },
        {
            'id': 3,
            'icon': 'fa-star',
            'name': 'Skills',
            'route': '/skills'
        },
        {
            'id': 4,
            'icon': 'fa-wrench',
            'name': 'Work',
            'route': '/work'
        },
        {
            'id': 5,
            'icon':'fa-envelope',
            'name': 'Contact',
            'route': '/contact'
        },
    ];

    export default {
        name: 'App',
        data: function () {
            return {
                links: links
            };
        },
        components: {
            RouteLink
        }
    }
</script>