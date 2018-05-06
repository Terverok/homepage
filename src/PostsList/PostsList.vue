<script>
import Vue from 'vue'
import './PostsList.scss'
import { PostSummary } from './PostSummary'

const mockPosts = [
    {
        id: 0,
        title: 'test',
        data: `helo! it's test post :)`,
    },
    {
        id: 1,
        title: 'Narcissistic',
        data: `Here! I want to be the first :<`,
    }
]

export default Vue.extend({
    components: {
        PostSummary,
    },
    props: {
        posts: {
            type: Array,
            default: () => [...mockPosts],
        }
    },
})
</script>

<template>
    <div id="posts" class="posts-list">
        <PostSummary
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:post="post"
        />
    </div>
</template>
