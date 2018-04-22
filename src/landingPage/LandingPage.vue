<script>
import Vue from 'vue'
import './LandingPage.scss'

export default Vue.extend({
    data: function() {
        return {
            helloWorldText: 'hello World!',
        }
    }
})
</script>

<template>
    <div> HI :) {{ helloWorldText }}</div>
</template>

