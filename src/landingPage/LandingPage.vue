<script>
import Vue from 'vue'
import './LandingPage.scss'
import avatar from '../../static/Tkaczyk-medium.jpg'

export default Vue.extend({
    data: function() {
        return {
            avatar,
        }
    }
})
</script>

<template>
    <div class="presentation">
        <img v-bind:src="avatar" />
        <span class="name">Hi, that's me! :)</span>
    </div>
</template>

