import Vue from 'vue'

const app = new Vue({
    el: '#app',
    data: {
        message: 'hi, I want to be your friend :>',
    },
    created() {
        console.log(`My hot message:${this.message}`);
    },
    render(h) {
        return <div>{this.message}</div>;
    }
})
