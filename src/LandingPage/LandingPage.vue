<script>
import Vue from 'vue'
import loremIpsum from 'loremIpsum'

import { PostsList } from 'PostsList'
import { TransparentPicture } from 'SpecialUtils'

import './LandingPage.scss'
import avatar from '../../static/Tkaczyk-medium.jpg'
import mask from '../../static/Tkaczyk-medium-mask.png'

export default Vue.extend({
    components: {
        PostsList,
        TransparentPicture
    },
    data: function() {
        return {
            avatar,
            mask,
            loremIpsum,
        }
    }
})
</script>

<template>
    <div class="landing-page">
        <div class="upper-row">
            <div
                id="about-me"
                class="presentation"
            >
                <TransparentPicture
                    v-bind:width="300"
                    v-bind:height="408"
                    v-bind:mask="mask"
                    v-bind:picture="avatar"
                    class="avatar"
                />
                <div class="name">Hi, that's me! :)</div>
                <div class="description">{{ loremIpsum }}</div>
            </div>
        </div>
        <PostsList />
    </div>
</template>

