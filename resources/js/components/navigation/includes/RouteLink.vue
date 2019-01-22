<template>
    <router-link tag="li" :to="link.route">
        <i class="fa"
           :class="link.icon">
        </i>
        {{ link.name }}
    </router-link>
</template>

<script>
    export default {
        name: 'RouteLink',
        props: ['link'],
    }
</script>