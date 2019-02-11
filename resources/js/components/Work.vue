<template>
    <div class="container">
        <div class="row">
            <painting></painting>
            <painting></painting>
            <painting></painting>
            <div class="spotlight-wrap">
                <div class="spotlight"></div>
                <div class="spotlight"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Painting from '@/js/components/project-showcase/Painting.vue';

    export default {
        name: 'App',
        components: {
            Painting
        }
    }
</script>