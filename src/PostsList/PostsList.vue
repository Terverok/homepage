<script>
import Vue from 'vue'
import './PostsList.scss'
import { PostSummary } from './PostSummary'
import loremIpsum from '../loremIpsum'

const mockPosts = [
    {
        id: 0,
        title: 'test',
        date: 'xx-yy-zzzz',
        data: `helo! it's test post :)`,
    },
    {
        id: 1,
        title: 'Narcissistic',
        date: '01-01-01',
        data: `Here! I want to be the first :<`,
    },
    {
        id: 2,
        title: 'Long test',
        date: '01-03-2018',
        data: loremIpsum,
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
    <div
        id="posts"
        class="posts-list"
    >
        <PostSummary
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:post="post"
        />
    </div>
</template>
