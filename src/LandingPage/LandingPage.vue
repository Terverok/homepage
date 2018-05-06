<script>
import Vue from 'vue'
import './LandingPage.scss'
import avatar from '../../static/Tkaczyk-medium.jpg'
import loremIpsum from 'loremIpsum';

export default Vue.extend({
    data: function() {
        return {
            avatar,
            loremIpsum,
        }
    }
})
</script>

<template>
    <div class="entire-page">
        <div class="presentation">
            <img
                v-bind:src="avatar"
                class="avatar"
            >
            <div class="name">Hi, that's me! :)</div>
            <div class="description">{{ loremIpsum }}</div>
        </div>
        <div class="well" />
    </div>
</template>

