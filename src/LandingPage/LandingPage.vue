<script>
import Vue from 'vue'
import loremIpsum from 'loremIpsum'

import { PostsList } from 'PostsList'

import './LandingPage.scss'
import avatar from '../../static/Tkaczyk-medium.jpg'

export default Vue.extend({
    components: {
        PostsList,
    },
    data: function() {
        return {
            avatar,
            loremIpsum,
        }
    }
})
</script>

<template>
    <div class="landing-page">
        <div id="about-me" class="presentation">
            <img
                v-bind:src="avatar"
                class="avatar"
            >
            <div class="name">Hi, that's me! :)</div>
            <div class="description">{{ loremIpsum }}</div>
        </div>
        <div class="well" />
        <PostsList />
    </div>
</template>

