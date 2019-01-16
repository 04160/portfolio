<template>
    <div>
        <ul class="navbar">
            <li>
                <router-link tag="li" to="/">Home</router-link>
                <router-link tag="li" to="/about">About</router-link>
                <router-view></router-view>
            </li>
        </ul>
    </div>
</template>