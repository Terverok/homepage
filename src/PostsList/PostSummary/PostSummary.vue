<script>
import Vue from 'vue'
import './PostSummary.scss'

export default Vue.extend({
    components: {
    },
    props: {
        post: {
            type: Object,
            default: () => {},
        }
    },
})
</script>

<template>
    <div class="post-summary">
        <div class="post-summary-title">{{ post.title }}</div>
        <div class="post-summary-description">{{ post.data }}</div>
    </div>
</template>
